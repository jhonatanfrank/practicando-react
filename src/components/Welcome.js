import React from 'react'
import { useState, useEffect } from 'react'

const Welcome = (props) => {

  const [counter, setCounter] = useState(0)
  const [semaforo, setSemaforo] = useState(false)

  useEffect(() => {
    console.log(semaforo)

  },[semaforo])

  const funcion = () => {
    //console.log("Entrando en la funcion de contar")
    setCounter(counter + 1)
    setSemaforo(!semaforo)
  }

  console.log(semaforo)

  return (
    <>
      <div>Hola desde el componente Welcome</div>
      <div>{props.mensaje}</div>
      <h2>CONTADOR DE REACT CON HOOKS</h2>
      <h4>El numero del contador es {counter}</h4>
      <h4>El semaforo está en color {semaforo ? 'red' : 'green'}</h4>
      <button type="submit" onClick={funcion}>Sumar contador</button>
    </>
  )
}

export default Welcome