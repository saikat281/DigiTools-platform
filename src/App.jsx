import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tools from './Components/Tools/Tools'
import { ToastContainer } from 'react-toastify'
import Steps from './Components/Steps/Steps'

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





      <ToastContainer />
    </>
  )
}

export default App
