import React from 'react'
import './RightPanelComponent.scss'
import UserDetails from './subComponents/UserDetails'
import UserCardComponent from './subComponents/UserCardComponent'

class RightPanelComponent extends React.Component {
    render() {
        return (
            <div
                className="right-panel pt-4 pl-xl-4 pl-lg-3 pl-sm-2"
                style={{ boxSizing: 'border-box' }}
            >
                <div
                    className="select-playing pt-3"
                    style={{ color: '#2b12d7' }}
                >
                    <h3>Select Playing 9</h3>
                </div>
                <div className="py-5 position-relative">
                    <i
                        className="fas fa-search position-absolute"
                        style={{ left: 0, top: 52, color: '#a0a0a0' }}
                    ></i>
                    <input
                        type="text"
                        placeholder="Search Players"
                        style={{ width: '340px', paddingLeft: 25 }}
                    />
                </div>
                <div className="table-container" style={{height:'69vh', overflow:'scroll'}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">SELECT</th>
                                <th scope="col">
                                    <b>PLAYER NAME</b>
                                </th>
                                <th scope="col">
                                    <b>LEVEL</b>
                                </th>
                                <th scope="col">
                                    <b>AVATAR</b>
                                </th>
                                <th scope="col">
                                    <i className="mr-1 fab fa-bitcoin text-warning"></i>
                                    <span>BET</span>
                                </th>
                                <th scope="col">
                                    <i className="mr-1 fas fa-trophy text-warning"></i>
                                    <span>WINS</span>
                                </th>
                                <th scope="col">LOST</th>
                                <th scope="col">
                                    <i className="text-warning mr-1 fas fa-coins"></i>
                                    <span>PRICE</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <UserDetails />
                            <UserDetails />
                            <UserDetails />
                            <UserDetails />
                            <UserDetails />
                            <UserDetails />
                            <UserDetails />
                            <UserDetails />
                            <UserDetails />
                            <UserDetails />
                        </tbody>
                    </table>
                </div>
                <div className="w-100 d-flex flex-row justify-content-end align-items-center pr-3 pt-3">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Previous"
                                >
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Next"
                                >
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default RightPanelComponent
