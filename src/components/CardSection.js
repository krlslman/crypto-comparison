import React, { Component } from 'react'

export class CardSection extends Component {
    render() {
        return (
            <div className='card-section ms-3'>
                <div className="fs-1 fw-bold m-3 mb-0 text-Capitalize">
                    {this.props.coinName}
                </div>
                <div className='d-flex align-items-center m-3 mt-0'>
                    <div className="text-white pe-3"
                        style={{overflow: 'visible'}}> Current
                        Price:</div>
                    <div className='current-price'>
                        ${this.props.currentPrice}
                    </div>
                </div>
                <section className="row" style={{ marginTop: ' 2px !important' }}>
                    <div className="card text-white text-center">
                        <div className="card-body">
                            <h6 className="card-title" >Market Cap 24Hrs</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#28edff" }}>
                                {this.props.mCap24} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center">
                        <div className="card-body">
                            <h6 className="card-title" >All Time High</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#28edff" }}>
                                ${this.props.ath}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center">
                        <div className="card-body">
                            <h6 className="card-title" >All Time High</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#28edff" }}>
                                ${this.props.atl}
                            </p>
                        </div>
                    </div>

                    <div className="card text-white text-center">
                        <div className="card-body">
                            <h6 className="card-title" >Positive Sentiments </h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#28edff" }}>
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center">
                        <div className="card-body">
                            <h6 className="card-title" style={{ color: "#00eea5" }}> High 24Hrs </h6>
                            <p className="card-text fw-bold fs-5">
                                ${this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-white text-center">
                        <div className="card-body">
                            <h6 className="card-title" style={{ color: '#ff566e' }}> Low 24Hrs </h6>
                            <p className="card-text fw-bold fs-5">
                                ${this.props.low24}
                            </p>
                        </div>
                    </div>
                </section>
                
            </div>
        )
    }
}

export default CardSection