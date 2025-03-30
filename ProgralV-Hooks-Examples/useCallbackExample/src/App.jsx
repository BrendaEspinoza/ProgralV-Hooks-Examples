import { useState, useCallback } from 'react'

function Boton({ incrementar }) {
  return <button onClick={incrementar}>Incrementar</button>
}

function Contador() {
  const [contador, setContador] = useState(0)

  const incrementar = useCallback(() => {
    setContador((c) => c + 1)
  }, [])

  return (
    <div>
      <p>Contador: {contador}</p>
      <Boton incrementar={incrementar}/>
    </div>
  )
}

export default Contador
