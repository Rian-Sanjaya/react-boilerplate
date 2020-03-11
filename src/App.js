import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning')) // asyncronously import / import dynamically only when is needed

class App extends React.Component {
  state = {
    count: 0
  }

  componentWillMount() {
    console.log("component will mount")
  }
  
  render() {
    const { count } = this.state

    return (
      <div>
        <h1>Hello world!</h1>
        <h2 className={count > 10 ? 'warning' : null}>Count: {this.state.count}</h2>
        <button onClick={() => this.setState(curState => ({count: curState.count + 1}))}>+</button>
        <button onClick={() => this.setState(curState => ({count: curState.count - 1}))}>-</button>
        {count > 10 ?
          // only render Warning when it is needed, otherwise fallback null (do nothing)
          <React.Suspense fallback={null}> 
            <Warning />
          </React.Suspense>
        : null}
      </div>
    )
  }
}

export default hot(module)(App)
