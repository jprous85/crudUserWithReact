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
            show: false
        };

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this)
    }

    componentDidMount() {
        axios.get('http://localhost:8081/').then(res => {
            const persons = res.data;
            this.setState({persons})
        })
    }

    handleShowModal = () =>{ this.setState.show = true };

    handleHideModal = () => { this.setState.show = false };

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
                                                className="btn btn-warning"
                                                to={{
                                                    pathname: "/update",
                                                    state: {
                                                        "person": person
                                                    }
                                                }}>Editar</Link>
                                            <Button
                                               className={"btn btn-danger"}
                                               onClick={this.handleShowModal}>
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
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleHideModal}>
                            Cerrar
                        </Button>
                        <Button variant="primary" onClick={this.handleHideModal}>
                            Eliminar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default UserList
