import React, { Component } from 'react';
import Toggle from './Toggle';

class GetUsers extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
        }
    };


    componentDidMount() {
        fetch('https://randomuser.me/api/?results=25')
            .then(results => {
                return results.json();
            })
            .then(data => {
                let users = data.results.map((user, index) => {
                    return (
                        <div key={index} className="users-container">
                            <img src={user.picture.medium} alt="Pictures" />
                            <div>
                                <strong>{user.name.first} {user.name.last}</strong>
                            </div>
                            <button>Show Details</button>
                        </div>
                    )
                })
                this.setState({ users: users });
                console.log("state", this.state.users);
            })
    }

    render() {
        return (
            <div className="container">
                {this.state.users}
            </div>
        )
    }
}

export default GetUsers;
