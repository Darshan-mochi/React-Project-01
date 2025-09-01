import {createRoot} from "react-dom/client"

import reactLogo from './assets/react.svg'

const root = createRoot(document.getElementById("root"))

function LogoContainer(){
  return(
    <div className="logo-container">
      <img src={reactLogo} alt="logo" className="logo" />
      <h1 className="heading">Rules of JSX</h1>
    </div>
  )
}

function ListContainer(){
  return(
    <div>
        <ul>
          <li>Must have encolse JSX in Root Element</li>
          <li>Close the Tag Properly</li>
          <li>use className for CSS class, as class is reserved word in JS</li>
          <li>use camelCase for attributes</li>
          <li>use flower braces for JS</li>
        </ul>
      </div>
  )
}

function JsxCard(){
  return (
    <div>
  <div className="bg-container">
    <div className="card-container">
      <LogoContainer/>
      <ListContainer/>
    </div>
  </div>
</div>
)
}

function Page(){
  return(
    <>
      <JsxCard/>
      <JsxCard/>
      <JsxCard/>
    </>
  )
}

root.render(<Page/>)