import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <hr className='opacity-[10%]' />
      <Banner></Banner>
      <Tools></Tools>
    </>
  )
}

export default App
