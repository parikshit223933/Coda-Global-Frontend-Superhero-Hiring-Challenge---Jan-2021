import React from 'react'
import user from '../../../assets/images/user.jpg'
import './UserDetails.scss'

class UserDetails extends React.Component {
    constructor() {
        super()
        this.state = { clicks: 0 }
    }
    handleClicks() {
        if (this.state.clicks % 2 === 0) {
            this.props.addPerson(this.props.person)
        } else {
            this.props.removePerson(this.props.person)
        }
        this.setState({
            ...this.state,
            clicks: this.state.clicks + 1,
        })
    }
    render() {
        return (
            <tr>
                <td scope="row" className="text-center">
                    <input
                        type="checkbox"
                        onClick={() => this.handleClicks()}
                    />
                </td>
                <td>{this.props.name}</td>
                <td>2</td>
                <td>
                    <img
                        src={this.props.image}
                        style={{ width: '30px', height: '30px' }}
                        alt="user"
                    />
                </td>
                <td>{this.props.bet}</td>
                <td>20</td>
                <td>3</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

export default UserDetails
