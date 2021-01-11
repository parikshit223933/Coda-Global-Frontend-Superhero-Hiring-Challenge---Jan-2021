import React from 'react'
import user from '../../../assets/images/user.jpg'
import './UserCard.scss'

class UserCard extends React.Component {
    render() {
        const red = '#aa0b00'
        const green = '#145303'

        return (
            <div className="user-card position-relative">
                <div className="d-flex flex-row justify-content-start align-items-center px-3">
                    <div className="mr-2">
                        <img
                            src={user}
                            alt="user-profile-card"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-start">
                        <div>
                            <b>Richard</b>
                        </div>
                        <div
                            className="text-secondary"
                            style={{ fontSize: '13px' }}
                        >
                            Level 5
                        </div>
                    </div>
                </div>

                <div className="d-flex py-3 flex-row justify-content-between align-items-center px-3">
                    <div>
                        <i className="fas fa-medal text-warning"></i>{' '}
                        <span>80</span>
                    </div>
                    <div>
                        <i className="fab fa-bitcoin text-warning"></i>{' '}
                        <span>5</span>
                    </div>
                </div>

                <div className="px-3">
                    <i class="fas fa-trophy text-warning"></i> <span>3</span>
                </div>
                <div
                    className="position-absolute w-100"
                    style={{ bottom: 0, left: 0 }}
                >
                    <div
                        className="w-75 mx-auto text-center"
                        style={{ backgroundColor: red, color: 'white', borderTopRightRadius:20, borderTopLeftRadius:20 }}
                    >
                        LOSE
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCard
