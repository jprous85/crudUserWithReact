import React from "react";
import axios from 'axios'
import {Link, Redirect} from "react-router-dom";

class CreateUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {

        axios.post('http://localhost:8081/', {
            "name": this.state.name,
            "first_last_name": this.state.first_last_name,
            "email": this.state.email
        })
            .then(res => {
                if (res.data.data === "ok") {
                    this.setState({isRedirect: true})
                }
            });
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        if (this.state.isRedirect) {
            return <Redirect to={{pathname: "/"}}/>
        }
        return (
            <React.Fragment>
                <div className={"row"}>
                    <div className="col-6 offset-3 mt-5">
                        <Link to="/">
                            return to back
                        </Link>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 offset-3">
                        <div className="card">
                            <div className="card-header">
                                <h6 className="text-muted">Create new user</h6>
                            </div>
                            <div className="card-body">
                                <form id="formNewUser" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text"
                                               name="name"
                                               id="name"
                                               className="form-control"
                                               autoComplete="off"
                                               value={this.setState.value}
                                               onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="first_last_name">First last name</label>
                                        <input type="text"
                                               name="first_last_name"
                                               id="first_last_name"
                                               className="form-control"
                                               autoComplete="off"
                                               value={this.setState.value}
                                               onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email"
                                               name="email"
                                               id="email"
                                               className="form-control"
                                               autoComplete="off"
                                               value={this.setState.value}
                                               onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="float-right">
                                        <input type="submit" value="Create new user" className="btn btn-primary"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CreateUser