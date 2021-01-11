import React from 'react'
import user from '../../../assets/images/user.jpg'
import './UserDetails.scss'

class UserDetails extends React.Component {
    render() {
        return (
            <tr>
                <td scope="row" className="text-center">
                    <input type="checkbox" />
                </td>
                <td>Disha patahai</td>
                <td>2</td>
                <td>
                    <img
                        src={user}
                        style={{ width: '30px', height: '30px' }}
                        alt="user"
                    />
                </td>
                <td>5</td>
                <td>20</td>
                <td>3</td>
                <td>500</td>
            </tr>
        )
    }
}

export default UserDetails
