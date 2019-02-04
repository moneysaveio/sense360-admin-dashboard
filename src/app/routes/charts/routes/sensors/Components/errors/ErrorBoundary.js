import React from 'react';
import ErrorCard from 'components/Cards/ErrorCard/index';

const logErrorToMyService = (error, info) => {
  console.log(error, info);
}
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, info) {
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <ErrorCard />
        )

        // return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;