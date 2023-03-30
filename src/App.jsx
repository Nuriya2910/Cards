import './App.css'
import Card from './Card'
import Data from './data'

function App() {

  return (
      <div className="home">
        {Data.map((item, i) => {
          return(
            <Card card={item} key ={i} />
          )
        })
        }
    
      </div>
  )
}

export default App
