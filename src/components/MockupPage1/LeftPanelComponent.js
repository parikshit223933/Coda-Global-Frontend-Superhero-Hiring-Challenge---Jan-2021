import React from 'react';
import dice from '../../assets/images/dice_PNG15.png';
import './LeftPanelComponent.scss'
import partition from '../../assets/images/divider-clipart-fancy-7.png'
import UserCardComponent from "./subComponents/UserCardComponent";

class LeftPanelComponent extends React.Component {
    render() {
        return (
            <div className="w-100 pt-5 left-panel position-relative">
                <div className="text-center pt-5">
                    <img src={dice} alt="dice" style={{ width: '100px', height: '100px' }} />
                </div>
                <div>
                    <img src={partition} alt="dice" style={{ width: '100%' }} />
                </div>
                <div className="text-secondary pl-3 py-2">
                    Playing 9
                </div>
                <div className="players" style={{ height: '56vh', overflowY: 'scroll' }}>
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                    <UserCardComponent />
                </div>
                <div className="text-center px-5">
                    <button type="button" className="btn w-100 btn-primary position-absolute start-button">START</button>
                </div>
            </div>
        )
    }
}

export default LeftPanelComponent;
