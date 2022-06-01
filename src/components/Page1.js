import logo from "../logo.svg";

const Page1 = () => {
  return (
    <div className="App">
        <header>
            <img 
            src={logo} 
            alt="app-logo" 
            className="App-logo" 
            />
            <h1 className="App-title">Welcome to React Code Splitting page 1</h1>
        </header>
        <button 
        onClick={() => window.location.href = "/page2"}
        >Page 2</button>
        <button
        onClick={() => window.location.href = "/page3"}
        >Page 3</button>
    </div>
  )
}

export default Page1
