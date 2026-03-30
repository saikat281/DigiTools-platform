import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'
import { ToastContainer } from 'react-toastify'
import Steps from './Components/Steps/Steps'
import Pricing from './Components/Pricing/Pricing'
import Workflow from './Components/Workflow/Workflow'
import Footer from './Components/Footer/Footer'

const ToolsData = async () => {
  const res = fetch("/Data.json")
  return (await res).json();
}

function App() {

  const [selected, setSelected] = useState([]);
  const ToolsPromise = ToolsData();
  return (
    <>
      <Navbar selected={selected}></Navbar>
      <hr className='opacity-[10%]' />
      <Banner></Banner>
      <Suspense>
        <Tools ToolsPromise={ToolsPromise} selected={selected} setSelected={setSelected}></Tools>
      </Suspense>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>





      <ToastContainer />
    </>
  )
}

export default App
