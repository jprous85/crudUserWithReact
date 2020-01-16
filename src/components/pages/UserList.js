import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";

class UserList extends React.Component{

    state = {
        persons: []
    };

    componentDidMount(){
        axios.get('http://localhost:8081/').then(res => {
            const persons = res.data;
            this.setState({persons})
        })
    }

    render(){
        return (
            <div className="row m-3">
                <div className="col-md-12 mb-2 mt-2">
                    <div className="float-right">
                        <a  href="/create"
                            className="btn btn-primary"
                        >Crear nuevo usuario</a>
                    </div>
                </div>
                <div className="col-md-12 mt-2">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>User</th>
                            <th>Email</th>
                            <th>Creado</th>
                            <th>Opciones</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.persons.map(person =>
                                    <tr>
                                        <td>{ person.name }</td>
                                        <td>{ person.email }</td>
                                        <td>{ person.created_at }</td>
                                        <td>
                                            <Link
                                                className="btn btn-warning"
                                                to={{
                                                pathname: "/update",
                                                state: {
                                                    "person" : person
                                                }
                                            }} >Editar</Link>

                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UserList