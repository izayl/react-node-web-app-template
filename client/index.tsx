import React, { useEffect, useState } from "react";
import { render } from "react-dom";

const App = () => {
  const [data, setData] = useState('')
  useEffect(() => {
    const test = () => fetch('/api').then(res => res.json())
    test().then(({data}) => {
      setData(data)
    })
  }, [])
  return (
    <div>
      <h1>hello react</h1>
      <p>{data}</p>
    </div>
  )
}

render(<App />, document.getElementById('app'))