import React, {Component} from 'react'

class Twitter extends Component {

    state = {
        tweet = 'title'
    }
    componentDiMount() {
        const { posts } = this.props
        console.log('ComponentDidMount', posts)
    }

    componentDidUpdate(prevProps) {
        const { loading } = this.props
        if(this.props.loading !== prevProps.loading){
            console.log('ComponentDidUpdate: loading', loading)
        }
    }

    componentWillUnmount(){
        console.log('ComponentWillUnmount: fui removido')
    }

    // pergunta se pode renderizar a aplicação novamente
    shouldComponentUpdate(nextProps, nextState){
        return this.state.tweet !== nextState.tweet || nextProps.loading !== this.props.loading
    }

    tweet = ( ) => {
        this.setState({
            tweet: true
        })
    }

    render () {
        const { posts } = this.props
        console.log('render', posts)
        return (
            <div>
                tests
            </div>

        )
    }
}

export default Twitter