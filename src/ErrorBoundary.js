import React, {Component} from 'react'

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, errorInfo){
        console.log('error', error)
        console.log('errorInfo', errorInfo)
        this.setState({
            hasError: true
        })
        // sendToService(data)
    }
    render () {
        if(this.state.hasError){
            return <img src="https://th.bing.com/th/id/OIP.hkRXjcphUEBgob5Fq26r7gHaHa?pid=ImgDet&rs=1.png" />
        }
        return this.props.children
        
    }
}
    

export default ErrorBoundary