import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({ hasError: true })
        // You can also log the error to an error reporting service
        console.log(info)
        // logErrorToMyService(error, info);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="container">
                    <h1>Something went wrong.</h1>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
