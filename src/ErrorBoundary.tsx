import React, { Component, PropsWithChildren } from "react";

type State = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<PropsWithChildren> {
  state: State = {
    hasError: false,
    error: null,
  };
  constructor(props: PropsWithChildren) {
    super(props);
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);

    this.setState({ error: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <h1>Something went wrong. Error: {JSON.stringify(this.state.error)}</h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
