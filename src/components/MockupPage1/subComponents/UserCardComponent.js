import React from 'react';
import user from '../../../assets/images/user.jpg';

class UserCardComponent extends React.Component {
    render() {
        return (
            <div className="d-flex flex-row justify-content-between align-items-center w-100 px-3" style={{ height: '70px' }}>
                <div className="d-flex flex-row justify-content-start">
                    <div className="user-image mr-3">
                        <img src={this.props.image} alt="user" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="d-flex flex-column justify-content-start align-items-start">
                        <div>
                            {this.props.name}
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <div>
                                    <i className="fas fa-trophy mr-2 text-warning"></i>
                                </div>
                                <div>
                                    55
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                <div>
                                    <i className="fas fa-medal mr-2 text-warning"></i>
                                </div>
                                <div>
                                    {this.props.bet}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row justify-content-center align-items-center">
                    <i className="fas fa-coins mr-2 text-warning"> </i><div>{this.props.price}</div>
                </div>
            </div>
        )
    }
}

export default UserCardComponent;
