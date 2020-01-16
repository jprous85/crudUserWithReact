import React from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios'

class UpdateUser extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isRedirect: false,
            person: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { person } = this.props.location.state;
        this.setState({
            person
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:8081/'+this.state.person.id,
            this.state.person)
            .then(res => {
                if (res.data.data === "ok") {
                    this.setState({ isRedirect: true })
                }
            })
    }

    handleChange(e) {
        this.setState({
            person: {
                ... this.state.person,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        if (this.state.isRedirect) {
            return <Redirect to={{ pathname: "/" }} />
        }
        return (
            <div className="row mt-5">
                <div className="col-6 offset-3">
                    <div className="card">
                        <div className="card-header">
                            <h6 className="text-muted">Update user</h6>
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
                                           value={this.state.person.name}
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
                                           value={this.state.person.first_last_name}
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
                                           value={this.state.person.email}
                                           onChange={this.handleChange}
                                    />
                                </div>
                                <div className="float-right">
                                    <input type="submit" value="Update user" className="btn btn-primary"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default UpdateUser