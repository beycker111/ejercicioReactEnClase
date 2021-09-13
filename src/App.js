import React, { useState, Fragment } from 'react'
import Agregar from './components/Agregar'
import Mostrar from './components/Mostrar'
import { v4 as uuidv4} from 'uuid'

function App() {

  const userData = [];

  const [users, setUsers] = useState(userData);

  const addUser = (user) => {

    user.id = uuidv4();
    //user.valores = ['comprimiso', 'respeto', 'perseverancia'];
    
    if(user.edad > 0 && user.edad <= 12){
      user.valores = ['juguetón', 'pureza', 'ternura'];
      user.categoriaEdad = 'niño';
    }else if(user.edad > 12 && user.edad <= 30){
      user.valores = ['honradez', 'humildad', 'tenacidad'];
      user.categoriaEdad = 'joven';
    }else if(user.edad > 30 && user.edad <= 50){
      user.valores = ['sinceridad', 'honestidad', 'sentido de pertenencia'];
      user.categoriaEdad = 'adulto';
    }else{
      user.valores = ['madurez', 'coraje', 'bondad'];
      user.categoriaEdad = 'mayor';
    }
    
    alert("Al " + user.categoriaEdad + " " + user.nombre + " de " + user.edad + " años le recomendamos tener presente la " +
          user.valores[0] + " " + user.valores[1] + " " + user.valores[2] + " como principales valores para obtener un buen resultado como " + user.ocupacion);

    setUsers([
      ...users,
      user
    ])
  }

  return (
    <Fragment>
      <div className="container">
        <h1>Aplicación agregar usuario</h1>
        <div className="row">
          <div className="col-md-6">
            <Agregar addUser={addUser}/>
          </div>
          <div className="col-md-6">
            <Mostrar users={users}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
