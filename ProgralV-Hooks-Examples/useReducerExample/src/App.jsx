import {useReducer} from 'react'

const reducer = (estado, accion) => 
  {
  switch (accion.tipo) {
    case 'incrementar':
      return {contador: estado.contador + 1}
    case 'decrementar':
      return {contador: estado.contador - 1}
    default:
      return estado
  }
}

function Contador() 
{
  const [estado, dispatch] = useReducer(reducer,{contador: 0})

  return (
    <div>
      <p>Contador: {estado.contador}</p>
      <button onClick={() => dispatch({tipo: 'incrementar'})}>Incrementar</button>
      <button onClick={() => dispatch({tipo: 'decrementar'})}>Decrementar</button>
    </div>
  )
}

export default Contador
