
// ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // state update karo taake fallback UI dikh sake
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // yahan tum error ko logging service par bhej saktay ho
    // example: sendToService(error, info)
    console.error("Logged error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // fallback UI (alternate screen)
      return (
        <div style={{ padding: 20 }}>
          <h2>Something went wrong.</h2>
          <p>Try refreshing the page or contact support.</p>
          <button onClick={() => window.location.reload()}>Reload</button>
        </div>
      );
    }
    // agar koi error nahi to normal children render karo
    return this.props.children;
  }
}

export default ErrorBoundary;