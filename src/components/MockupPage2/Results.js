import React from 'react'
import './Results.scss'
import UserCard from './subComponents/UserCard'
import line from '../../assets/images/line.png'

class Results extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="results-component">
                <div className="container">
                    <div className="row flex-row justify-content-center align-items-center">
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                    </div>

                    <div className="row flex-row justify-content-center align-items-center position-relative py-5">
                        <div className="position-absolute horizontal-line-container">
                            <img src={line} alt="line" />
                        </div>
                        <div className="circle">
                            2
                        </div>
                    </div>

                    <div className="row flex-row justify-content-center align-items-center">
                        <UserCard />
                        <UserCard />
                        <UserCard />
                        <UserCard />
                    </div>
                </div>
            </div>
        )
    }
}
export default Results
