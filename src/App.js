import React, {Fragment} from 'react'

const store = ['', '', '']
function Column(){
  return (
    <tr>
      <td>Tênis</td>
      <td>Roupa</td>
    </tr>
  )
}
// OS fragments servem paara cabar com o problema
// do jsx retornar apenas um elemento, ou seja, uma div
// com vários elementos dentro
function App () {

  const renderColumns = (element, key) => {
    return (
      <Fragment key={key}>
       <Column />
    </Fragment>
    )
    
   
  }
  return(
    <table>
      <tr>
        {store.map(renderColumns)}
      </tr>
    </table> 
  )
}

export default App