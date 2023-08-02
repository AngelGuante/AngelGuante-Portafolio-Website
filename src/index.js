import React from "react"
import { createRoot } from "react-dom/client"
import Bar from './Components/Containers/Bar'
import SAP from './Components/Pages/SAP'
require("./Styles/Reset.css")
require("./Styles/DefaultPageStyles.css")

const App = () =>
    <>
        <Bar />
        <div className="mainDiv"
            style={{
                width: '1000px',
                marginTop: '8%'
            }}>
            <SAP />
        </div>
    </>

const root = createRoot(document.getElementById('root'))
root.render(<App />)