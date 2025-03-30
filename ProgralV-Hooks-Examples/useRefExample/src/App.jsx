import { useRef } from 'react'

function InputAutoFocus() {
  const inputRef = useRef(null)

  const enfocarInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Escribe algo"/>
      <button onClick={enfocarInput}>Enfocar</button>
    </div>
  )
}

export default InputAutoFocus
