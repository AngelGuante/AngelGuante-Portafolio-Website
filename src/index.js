import React from "react"
import { createRoot } from "react-dom/client"
import Bar from './Components/Containers/Bar'
import SPA from './Components/Pages/SPA'
require("./Styles/Reset.css")
require("./Styles/DefaultPageStyles.css")

const App = () =>
    <>
        <Bar />
        <div className="mainDiv"
            style={{
                width: '1000px',
                marginTop: '10rem'
            }}>
            <SPA />
        </div>
    </>

const root = createRoot(document.getElementById('root'))
root.render(<App />)