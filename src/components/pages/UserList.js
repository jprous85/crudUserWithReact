import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import Button from "react-bootstrap/Button";


class UserList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            persons: [],
            id: null,
            show: false,
            person: []
        };
    }

    componentDidMount() {
        this._componentRequestData();
    }

    componentDidUpdate(){
        this._componentRequestData();
    }

    _componentRequestData(){
        axios.get('http://localhost:8081/').then(res => {
            const persons = res.data;
            this.setState({persons})
        });
    }

    handleShowModal = (person) =>{
        this.setState({
            show: true,
            person
        });
    };

    handleHideModal = () => {
        this.setState({
            show: false
        });
    };

    handleDeletePerson=()=>{
        axios.delete('http://localhost:8081/'+this.state.person.id)
            .then(res => {
                if (res.data.data === 'ok') {
                    this.handleHideModal();
                }
            });
    };

    render() {
        return (
            <React.Fragment>
                <div className="row m-3">
                    <div className="col-md-12 mb-2 mt-2">
                        <div className="float-right">
                            <a href="/create"
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
                                    <tr key={person.id}>
                                        <td>{person.name}</td>
                                        <td>{person.email}</td>
                                        <td>{person.created_at}</td>
                                        <td>
                                            <Link
                                                className="btn btn-warning mr-3"
                                                to={{
                                                    pathname: "/update",
                                                    state: {
                                                        "person": person
                                                    }
                                                }}>Editar</Link>
                                            <Button
                                               className={"btn btn-danger"}
                                               onClick={(e)=>this.handleShowModal(person, e)}>
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleHideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleHideModal}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={this.handleDeletePerson}>
                            Eliminar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default UserList
