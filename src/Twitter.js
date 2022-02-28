import React, {useEffect, memo, useState} from 'react'

const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}

function Twitter(props){
    const {loading} = props

    const [tweet, setTweet] = useState('title')

    // state = {
    //     tweet = 'title'
    // }
   
    // O useEffect é equivalente
    // aos componentes 

    // componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log('ComponentDidMount', posts)
        console.log('ComponentDidMount: loading', loading)

    }, [])

    //componentDidUpdate
    useEffect(() =>  {
        console.log('ComponenteDidUpdate', loading)
    }, [loading])

    //componentWillUnmount 
    useEffect(() => {
        return () => {
            console.log('ComponenteWillUnmount: fui removido :( ')
        }
    }, [])


    //shouldComponenteUpdate



    // componentDidUpdate = (prevProps)  => {
    //     const { loading } = props
    //     if(props.loading !== prevProps.loading){
    //         console.log('ComponentDidUpdate: loading', loading)
    //     }
    // }

    // componentWillUnmount = () => {
    //     console.log('ComponentWillUnmount: fui removido')
    // }

    // // pergunta se pode renderizar a aplicação novamente
    // shouldComponentUpdate = (nextProps, nextState) => {
    //     return this.state.tweet !== nextState.tweet || nextProps.loading !== this.props.loading
    // }

    const handleTweet = ( ) => {
        setTweet('Tweet atualizado')
    }

    
    const { posts } = props
    console.log('Tweet', tweet)
    return (
        <div>
            <button onClick={handleTweet}>Re-render</button>
        </div>

    )
    
}

export default memo(Twitter, areEqual)