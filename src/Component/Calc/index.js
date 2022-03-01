import React from 'react'
import PropType from 'prop-types'

function Calc(props){

    const { min, max, onChange } = props

    return (
        <div>
            <p>
                Valor mínimo: {min}
            </p>
            <p>
                Valor máximo: {max}
            </p>
            <input type="number" onChange={onChange}/>
        </div>
    )
}

Calc.propTypes = {
    min: PropType.number.isRequired,
    max: PropType.number.isRequired,
    onChange: PropType.func.isRequired
}

export default Calc