import React, { Component } from 'react';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import Header from './components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Id: "bitcoin",
      Id2: "ethereum",
      Data: {},
      Data2: {},
    };
  }

  async componentDidMount() {
    await this.fetchData();
    await this.fetchData2();
    this.interval = setInterval(() => this.fetchData(), 2000);
    this.interval2 = setInterval(() => this.fetchData2(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  fetchData = async () => {
    const { Id } = this.state;
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/${Id}`);
    const jsonData = await data.json();
    this.setState({ Data: jsonData });
  };

  fetchData2 = async () => {
    const { Id2 } = this.state;
    const data = await fetch(`https://api.coingecko.com/api/v3/coins/${Id2}`);
    const jsonData = await data.json();
    this.setState({ Data2: jsonData });
  };

  handleSubmit = async (event) => {
    const { value } = event.target;
    await this.setState({ Id: value });
    await this.fetchData();
  };

  handleSubmit2 = async (event) => {
    const { value } = event.target;
    await this.setState({ Id2: value });
    await this.fetchData2();
  };

  render() {
    const { Id, Id2, Data, Data2 } = this.state;
    return (
      <>
        <Header handle_Submit={this.handleSubmit} handle_Submit2={this.handleSubmit2} />
        { window.screen.width > 1200 ? 
        <main>
          <div className="d-flex selection-one">
            <ChartSection
              Id={Id}
              priceChange24={Data.market_data ? Data.market_data.price_change_24h_in_currency.usd : ''}
              MarketCap={Data.market_data ? Data.market_data.market_cap.usd : ''}
              TotVol={Data.market_data ? Data.market_data.total_volume.usd : ''}
              Circulating={Data.market_data ? Data.market_data.circulating_supply : ''}
              twitterF={Data.community_data ? Data.community_data.twitter_followers : ''}
            />
            <CardSection
              coinName={Data.name}
              currentPrice={Data.market_data ? Data.market_data.current_price.usd : ''}
              mCap24={Data.market_data ? Data.market_data.market_cap_change_percentage_24h : ''}
              ath={Data.market_data ? Data.market_data.ath.usd : ''}
              atl={Data.market_data ? Data.market_data.atl.usd : ''}
              sentiment={Data.sentiment_votes_up_percentage}
              high24={Data.market_data ? Data.market_data.high_24h.usd : ''}
              low24={Data.market_data ? Data.market_data.low_24h.usd : ''}
            />
          </div>
          <div className='division-line'></div>

          <div className="d-flex selection-two">
            <ChartSection
              Id={Id2}
              priceChange24={Data2.market_data ? Data2.market_data.price_change_24h_in_currency.usd : ''}
              MarketCap={Data2.market_data ? Data2.market_data.market_cap.usd : ''}
              TotVol={Data2.market_data ? Data2.market_data.total_volume.usd : ''}
              Circulating={Data2.market_data ? Data2.market_data.circulating_supply : ''}
              twitterF={Data2.community_data ? Data2.community_data.twitter_followers : ''}
            />
            <CardSection
              coinName={Data2.name}
              currentPrice={Data2.market_data ? Data2.market_data.current_price.usd : ''}
              mCap24={Data2.market_data ? Data2.market_data.market_cap_change_percentage_24h : ''}
              ath={Data2.market_data ? Data2.market_data.ath.usd : ''}
              atl={Data2.market_data ? Data2.market_data.atl.usd : ''}
              sentiment={Data2.sentiment_votes_up_percentage}
              high24={Data2.market_data ? Data2.market_data.high_24h.usd : ''}
              low24={Data2.market_data ? Data2.market_data.low_24h.usd : ''}
            />
          </div>
        </main> : <div className='d-flex justify-content-center align-items-center' style={{height:"30vh"}}>
                    <p className='w-75 text-danger'>Sorry! Devices with at least 1200px width are supported for this application.</p>
                  </div> }
      </>
      
    )
  }
}
