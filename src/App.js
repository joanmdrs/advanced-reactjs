import Twitter from './Twitter'
import React, {Component} from 'react'

class App extends Component {
  state = {
    loading: false,
    actived: true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render(){
    const posts = [{
      title: 'xpto',
      description: 'foo'
    },{
      title: 'xpto',
      description: 'foo'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Remover componente</button>
        {this.state.actived && <Twitter posts={posts} loading={this.state.posts} />}
      </div>
    )
  }
}

export default App