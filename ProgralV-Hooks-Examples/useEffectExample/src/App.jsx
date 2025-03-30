import { useState, useEffect } from 'react';


function Reloj() {
  const [hora, setHora] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date())
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return <p>Hora actual: {hora.toLocaleTimeString()}</p>
}

export default Reloj
