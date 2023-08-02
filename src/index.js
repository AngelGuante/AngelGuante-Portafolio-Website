import React from "react"
import { createRoot } from "react-dom/client"
import Bar from './Components/Containers/Bar'
require("./Styles/Reset.css")
require("./Styles/DefaultPageStyles.css")

const App = () =>
    <>
        <Bar />
        <div className="mainDiv">
        </div>
    </>

const root = createRoot(document.getElementById('root'))
root.render(<App />)