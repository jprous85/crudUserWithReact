import React from 'react'
import { Link } from 'react-router-dom'

const UserList = () =>{
    return (
        <div className="row m-3">
            <div className="col-md-12 mb-2 mt-2">
                <div className="float-right">
                    <a  href="javascriot:void(0)"
                        className="btn btn-primary"
                    >Crear nuevo usuario</a>
                </div>
            </div>
            <div className="col-md-12 mt-2">
                <table className="table table-hover">
                    <tr>
                        <th>User</th>
                        <th>Email</th>
                        <th>Creado</th>
                        <th>Opciones</th>
                    </tr>
                    <tr>
                        <td>test</td>
                        <td>test</td>
                        <td>test</td>
                        <td>
                            <a href="javascriot:void(0)"
                            className="btn btn-warning mr-1">Editar</a>
                            <a href="javascriot:void(0)"
                            className="btn btn-danger ml-1">Eliminar</a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default UserList