import React from "react";
// import ReactDOM from "react-dom";
import Feed from "./components/Feed";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>
            N.B. VPN/NAT source ip addresses can trigger Instagram rate limits.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

class AuthlessFeed extends React.Component {
    render() {
        return (
            <ErrorBoundary>
                <Feed
                    userName="cest.belle.events"
                    className="Feed"
                    classNameLoading="Loading"
                    limit="16"
                />
            </ErrorBoundary>
            // document.getElementById("root")
        )
    };
}

export default AuthlessFeed;