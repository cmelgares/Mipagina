import logo from './assets/Spajzlogo22corto.png'
import './App.css'
import LanguageSelector from "./components/LanguageSelector"

function App() {

  return (
    <div className="App">
      <div className='navbar'>
        <img src={logo} className='logo'/>
        <ul>
          <li><a href="#">Homes</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <LanguageSelector />
      </div>

      <div className='content'>
        <h1>Take the control of your Business</h1>
        <p>Try the best order system of the market Y empieza a ahorrar un dinerillo</p>
        <div>
          <button type='button'><span></span>Restaurants</button>
          <button type='button'><span></span>Suppliers</button>
        </div>
      </div>
    </div>
  )
}

export default App
