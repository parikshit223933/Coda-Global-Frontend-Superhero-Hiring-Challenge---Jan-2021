import React from 'react';
import LeftPanelComponent from "./LeftPanelComponent";
import RightPanelComponent from "./RightPanelComponent";
import './Better.scss'

class Better extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3" style={{ backgroundColor: '#ebf0f2' }}>
                        <LeftPanelComponent />
                    </div>
                    <div className="col-sm-9" style={{ backgroundColor: '#f1f5f6' }}>
                        <RightPanelComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default Better;
