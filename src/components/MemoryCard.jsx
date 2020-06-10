import React, { Component } from 'react';
import logo from "../logo-wrench-white.png"
import './MemoryCard.css'; 


class MemoryCard extends Component {
    render() {

        let innerClass = 'MemoryCard_inner';

        if (this.props.isFlipped === true) {
            innerClass = innerClass.concat(' flipped');
        }

        return (
            <div>
                <div className='MemoryCard' onClick={ this.props.pickCard }>
                    <div className={ innerClass }>
                        <div className="MemoryCard_back">
                            <img src={ logo } alt='digitalcrafts logo' />
                        </div>
                    
                        <div className='MemoryCard_front'>{ this.props.symbol }</div>

                    </div>
                </div>   
            </div>

        );
    }
}

export default MemoryCard