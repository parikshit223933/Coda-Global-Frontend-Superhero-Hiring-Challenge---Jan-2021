import React from 'react'
import LeftPanelComponent from './LeftPanelComponent'
import RightPanelComponent from './RightPanelComponent'
import './Better.scss'

class Better extends React.Component {
    constructor() {
        super()
        this.state = {
            bucket: [],
        }
    }
    addPerson(person) {
        console.log(person);
        if (this.state.bucket.includes(person)) {
            return
        }
        let temp = this.state.bucket
        temp.push(person)
        this.setState({
            ...this.state,
            bucket: temp,
        })
    }
    removePerson(person) {
        if (!this.state.bucket.includes(person)) {
            return
        }
        this.setState({
            ...this.state,
            bucket: this.state.bucket.filter((p) => p !== person),
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="col-xl-3 col-lg-4"
                        style={{ backgroundColor: '#ebf0f2' }}
                    >
                        <LeftPanelComponent bucket={this.state.bucket} />
                    </div>
                    <div
                        className="col-xl-9 col-lg-8"
                        style={{ backgroundColor: '#f1f5f6' }}
                    >
                        <RightPanelComponent
                            removePerson={(person) => this.removePerson(person)}
                            addPerson={(person) => this.addPerson(person)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Better
