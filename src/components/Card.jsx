import React, { Component } from 'react';
import logo from "../logo-wrench-white.png"

import './Card.css'; 

class Card extends Component {
    render() {
        
        return (
            <div>
                <div className="Card">
                    <img src={ logo } alt='digitalcrafts logo' />
                </div>
            </div>
           
        );
    }
}

export default Card