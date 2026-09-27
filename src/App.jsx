import Hero from "./Hero"
import NavBar from "./NavBar"


const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <h1 className="font-bold text-xl text-amber-700">This is Starter Kit</h1>
    </div>
  )
}

export default App