import logo from "../logo.svg";

const Page3 = ({onRouteChange}) => {
    return (
      <div className="App">
      <header>
            <img 
            src={logo} 
            alt="app-logo" 
            className="App-logo" 
            />
            <h1 className="App-title">Welcome to React Code Splitting page 3</h1>
        </header>
        <button 
        onClick={() => window.location.href = "/"}
        >Page 1</button>
        <button
        onClick={() => window.location.href = "/page2"}
        >Page 2</button>
      </div>
    )
  }
  
  export default Page3
