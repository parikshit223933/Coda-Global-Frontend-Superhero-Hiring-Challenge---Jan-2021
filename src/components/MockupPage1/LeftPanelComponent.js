import React from 'react'
import './LeftPanelComponent.scss'
import partition from '../../assets/images/divider-clipart-fancy-7.png'
import UserCardComponent from './subComponents/UserCardComponent'
import {Link} from 'react-router-dom'
class LeftPanelComponent extends React.Component {
    render() {
        return (
            <div className="w-100 pt-5 left-panel position-relative">
                <div className="text-center pt-5">
                    <i
                        className="fas fa-dice display-1"
                        style={{ color: '#2a02d6' }}
                    ></i>
                </div>
                <div>
                    <img src={partition} alt="dice" style={{ width: '100%' }} />
                </div>
                <div className="text-secondary pl-3 py-2">Playing 9</div>
                <div
                    className="players"
                    style={{ height: '56vh', overflowY: 'scroll' }}
                >
                    {this.props.bucket.map((person) => {
                        return (
                            <UserCardComponent
                                name={person.Name}
                                image={person['Profile Image']}
                                price={person.Price}
                                bet={person.Bet}
                            />
                        )
                    })}
                </div>
                <div className="text-center px-5">
                    <Link
                        to={'/results'}
                        params={{ bucket: this.props.bucket }}
                        type="button"
                        className="btn w-100 position-absolute start-button"
                        style={{
                            backgroundColor: '#2b12d7',
                            color: 'white',
                            fontWeight: '500',
                        }}
                    >
                        START
                    </Link>
                </div>
            </div>
        )
    }
}

export default LeftPanelComponent
