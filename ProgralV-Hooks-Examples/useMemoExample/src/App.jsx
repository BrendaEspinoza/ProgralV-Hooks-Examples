import {useState,useMemo} from 'react'

function CalculoPesado({ numero }) {
  const resultado = useMemo(() => {
    console.log("Calculando...")
    return numero * 2
  }, [numero])

  return <p>Resultado: {resultado}</p>
}

function App() {
  const [numero, setNumero] = useState(1)

  return (
    <div>
      <input type="number" value={numero} onChange={(e) => setNumero(Number(e.target.value))}/>
      <CalculoPesado numero={numero}/>
    </div>
  )
}

export default App
