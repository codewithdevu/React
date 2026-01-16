import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx' 

function Myapp () {
  return(
    <div>
      <h1>devu in react !</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'click me to visit google '
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'visit my google'
)


createRoot(document.getElementById('root')).render(
    reactElement
)
