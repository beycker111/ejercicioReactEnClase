import React, { useState, Fragment } from 'react'


const Mostrar = (props) => {
    return ( 
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Clasificación edad</th>
                        <th>Ocupación</th>
                        <th>Valores</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 ?
                        props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.nombre}</td>
                                <td>{user.edad}</td>
                                <td>{user.categoriaEdad}</td>
                                <td>{user.ocupacion}</td>
                                <td>{user.valores.map(valor => (
                                    <span>{valor} </span>
                                ))}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={3}>No hay registros</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Mostrar;