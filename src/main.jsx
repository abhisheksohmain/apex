import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/index.css'

document.documentElement.classList.add('js')

// Shows the real error on screen instead of a blank page
class ErrorBoundary extends React.Component {
  state = { err: null }
  static getDerivedStateFromError(err) { return { err } }
  render() {
    if (this.state.err) {
      return <pre style={{ padding: 30, whiteSpace: 'pre-wrap', color: '#b00020' }}>Something went wrong:{'\n'}{String(this.state.err)}</pre>
    }
    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <HashRouter><App /></HashRouter>
  </ErrorBoundary>
)
