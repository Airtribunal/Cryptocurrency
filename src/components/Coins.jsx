import React from 'react';
import Coinitem from './Coinitem';
import "./Coins.css"

const Coins = (props) => {
    return (
        <div className="container">
            <div className="heading">
                <p>#</p>
                <p className="coin-name">Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className="hide-mobile">Volume</p>
                <p className="hide-mobile">Mkt Cap</p>
            </div>
            {props.coins.map(coin => {
                return (
                    <Coinitem coins={coin} key={coin.id} />
                )
            })}
        </div>
    );
}

export default Coins;
