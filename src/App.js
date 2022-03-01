import React, {useState} from 'react'
import Button from './Component/Button'
import Calc from './Component/Calc'
function App(){

  const [value, setValue] = useState(0)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)

  const handleClick = () => {
    setMin(10)
  }

  const handleCalc = ({target}) => {
    const value = target.value
    setValue(min + max + value)
  }

  return (
    <>
      <Calc min={min} max={max} onChange={handleCalc} />
      <p>Valor calculado: {value}</p>
      <Button onClick={handleClick}> 
        Adicionar no carrinho
      </Button>
    </>

  )
}

export default App