import React, { Component } from 'react'
import { ReactComponent as Logo } from "../../src/assets/logo_s.svg";

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#0e131a"}}>
                    <div className="container-fluid">
                        <div className='d-flex justify-content-center align-items-center gap-5 ps-5'>
                            <div className='d-flex justify-content-center align-items-center gap-3'>
                            <span>Coin 1: </span>
                            <select id="coin-selector" className="form-select form-select-lg " aria-label="form-select-lg" name='selectCoin'
                                onChange={this.props.handle_Submit} >
                                <option value="avalanche-2">Avalanche (AVAX)</option>
                                <option value="binancecoin">Binance (BNB)</option>
                                <option selected value="bitcoin">Bitcoin (BTC) </option>
                                <option value="cardano">Cardano (ADA)</option>
                                <option value="decentraland">Decentraland (MANA)</option>
                                <option value="dogecoin">Dogecoin (DOGE)</option>
                                <option value="ethereum">Ethereum (ETH)</option>
                                <option value="ripple">Ripple (XRP)</option>
                                <option value="solana">Solana (SOL)</option>
                                <option value="tether">Tether (USDT)</option>
                                <option value="xrp">XRP (XRP)</option>
                                <option value="litecoin">Litecoin (LTC)</option>
                            </select>
                            </div>

                            <div className='d-flex justify-content-center align-items-center gap-3'>
                            <span>Coin 2: </span>
                            <select id="coin-selector" className="form-select form-select-lg " aria-label="form-select-lg" name='selectCoin2'
                                onChange={this.props.handle_Submit2}>
                                <option value="avalanche-2">Avalanche (AVAX)</option>
                                <option value="binancecoin">Binance (BNB)</option>
                                <option value="bitcoin">Bitcoin (BTC) </option>
                                <option value="cardano">Cardano (ADA)</option>
                                <option value="decentraland">Decentraland (MANA)</option>
                                <option value="dogecoin">Dogecoin (DOGE)</option>
                                <option selected value="ethereum">Ethereum (ETH)</option>
                                <option value="ripple">Ripple (XRP)</option>
                                <option value="solana">Solana (SOL)</option>
                                <option value="tether">Tether (USDT)</option>
                                <option value="xrp">XRP (XRP)</option>
                                <option value="litecoin">Litecoin (LTC)</option>
                            </select>
                            </div>
                        </div>


                        <a className="navbar-brand d-flex align-items-center gap-2 ml-auto display-2 fs-4 "
                            href="https://koral-portfolio.vercel.app/" style={{color:"#28edff"}} >
                            Coin Comparison
                            <Logo height={60} alt="Logo" />
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header