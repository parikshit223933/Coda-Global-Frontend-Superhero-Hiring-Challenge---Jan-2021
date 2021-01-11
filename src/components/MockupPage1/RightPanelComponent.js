import React from 'react'
import './RightPanelComponent.scss'
import UserDetails from './subComponents/UserDetails'
import data from '../../assets/data'
class RightPanelComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            data,
            range: [0, 9],
            searchString: '',
            activePage: 1,
        }
    }
    togglePage(page) {
        if (page === 1) {
            this.setState({
                ...this.state,
                range: [0, 9],
                activePage: 1,
            })
        } else if (page === 2) {
            this.setState({
                ...this.state,
                range: [10, 19],
                activePage: 2,
            })
        } else if (page === 3) {
            this.setState({
                ...this.state,
                range: [20, 29],
                activePage: 3,
            })
        }
    }
    getArray() {
        const usable_data = []
        for (let i = this.state.range[0]; i <= this.state.range[1]; i++) {
            usable_data.push(this.state.data[i])
        }
        return usable_data
    }
    handleSearchChange(e) {
        this.setState({
            ...this.state,
            searchString: e.target.value,
        })
    }
    toggleNext() {
        if (this.state.activePage === 3) {
            return
        }
        this.setState({
            ...this.state,
            activePage: this.state.activePage + 1,
        })
        this.togglePage(this.state.activePage + 1)
    }
    togglePrevious() {
        if (this.state.activePage === 1) {
            return
        }
        this.setState({
            ...this.state,
            activePage: this.state.activePage - 1,
        })
        this.togglePage(this.state.activePage - 1)
    }
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
                        value={this.state.searchString}
                        onChange={(e) => this.handleSearchChange(e)}
                        type="text"
                        placeholder="Search Players"
                        style={{ width: '340px', paddingLeft: 25 }}
                    />
                </div>
                <div
                    className="table-container"
                    style={{ height: '69vh', overflow: 'scroll' }}
                >
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
                            {this.getArray().map((data, index) => {
                                return (
                                    <UserDetails
                                        addPerson={this.props.addPerson}
                                        removePerson={this.props.removePerson}
                                        person={data}
                                        key={index}
                                        name={data.Name}
                                        price={data.Price}
                                        bet={data.Bet}
                                        image={data['Profile Image']}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="w-100 d-flex flex-row justify-content-end align-items-center pr-3 pt-3">
                    <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item">
                                <div
                                    onClick={() => this.togglePrevious()}
                                    className="page-link"
                                    aria-label="Previous"
                                >
                                    <span aria-hidden="true">&laquo;</span>
                                </div>
                            </li>
                            <li
                                className={`page-item ${
                                    this.state.activePage === 1 ? 'active' : ''
                                }`}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => this.togglePage(1)}
                                >
                                    1
                                </div>
                            </li>
                            <li
                                className={`page-item ${
                                    this.state.activePage === 2 ? 'active' : ''
                                }`}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => this.togglePage(2)}
                                >
                                    2
                                </div>
                            </li>
                            <li
                                className={`page-item ${
                                    this.state.activePage === 3 ? 'active' : ''
                                }`}
                            >
                                <div
                                    className="page-link"
                                    onClick={() => this.togglePage(3)}
                                >
                                    3
                                </div>
                            </li>
                            <li className="page-item">
                                <div
                                    className="page-link"
                                    aria-label="Next"
                                    onClick={() => this.toggleNext()}
                                >
                                    <span aria-hidden="true">&raquo;</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default RightPanelComponent
