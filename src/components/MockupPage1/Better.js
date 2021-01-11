import React from 'react';
import LeftPanelComponent from "./LeftPanelComponent";
import RightPanelComponent from "./RightPanelComponent";
import './Better.scss'

class Better extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5" style={{ backgroundColor: '#ebf0f2' }}>
                        <LeftPanelComponent />
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7" style={{ backgroundColor: '#f1f5f6' }}>
                        <RightPanelComponent />
                    </div>
                </div>
            </div>
        )
    }
}

export default Better;
