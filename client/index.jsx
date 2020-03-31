import React, { useEffect } from "react";
import { render } from "react-dom";

const App = () => {
  useEffect(() => {
    const test = () => fetch('/api').then(res => res.json())
    test().then(data => {
      console.log(data);
    })
  }, [])
  return (
    <div>
      hello react
    </div>
  )
}

render(<App />, document.getElementById('app'))