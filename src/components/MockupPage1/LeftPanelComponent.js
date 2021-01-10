import React from 'react';
import dice from '../../assets/images/dice_PNG15.png';
import './LeftPanelComponent.scss'

class LeftPanelComponent extends React.Component {
    render() {
        return (
            <div className="w-100 pt-4 left-panel">
                <div>
                    <img src={dice} alt="dice" style={{width:'100px', height:'100px'}}/>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default LeftPanelComponent;
