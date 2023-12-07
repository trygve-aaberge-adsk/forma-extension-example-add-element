import { render } from "preact"

function App() {
  return (
    <weave-button
      onClick={() => {
        console.log("clicked")
      }}
    >
      Click me
    </weave-button>
  )
}

render(<App />, document.getElementById("app")!)
