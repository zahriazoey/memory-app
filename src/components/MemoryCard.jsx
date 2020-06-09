import React, { Component } from 'react';
import logo from "../logo-wrench-white.png"
import './MemoryCard.css'; 


class MemoryCard extends Component {
    constructor() {
        super()
        this.state = { isFlipped: false };
        // this.setState([!this.state.isFlipped]); 

    }

    clickHandler() {
        
        this.setState({ isFlipped: !this.state.isFlipped });
        
    }

    render() {

        let innerClass = 'MemoryCard_inner';

        if (this.state.isFlipped === true) {
            innerClass = innerClass.concat(' flipped');
        }

        return (
            <div>
                <div className='MemoryCard' onClick={ this.clickHandler.bind(this) }>
                    <div className={ innerClass }>
                        <div className="MemoryCard_back">
                            <img src={ logo } alt='digitalcrafts logo' />
                        </div>
                    
                        <div className='MemoryCard_front'>∆</div>

                    </div>
                </div>   
            </div>

        );
    }
}

export default MemoryCard