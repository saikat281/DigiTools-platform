import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
 import { ToastContainer, toast } from 'react-toastify';
const ToolsCard = ({ tool, selected, setSelected,add,setAdd }) => {
    // console.log(tool)
    const [selectBtn, setSelectbtn] = useState(false);
    const handleSelected = (tool) => {
        console.log(tool)
        setSelected([...selected, tool])
        setSelectbtn(true);
        setAdd(add + tool.price)
    }
    return (
        <div>
            <div className="flex flex-col justify-between h-full card w-96 bg-base-100 card-lg shadow-lg">
                <div className="card-body">
                    <div className='flex justify-between items-center'>
                        <img className='w-[25px]' src={tool.image} alt="" />
                        <div className="card-actions justify-end">
                            <p className='bg-[#E1E7FF] text-[#3d5fe9] px-3 py-1 rounded-full'>{tool.tag}</p>
                        </div>
                        
                    </div>

                    <h2 className="card-title">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <div className='flex items-end'>
                        <h1 className='text-3xl'>{`$${tool.price}`}</h1>
                        <p>/{tool.period}</p>
                    </div>
                    <div className=''>
                        {
                            tool.features.map((feature, idx) => {

                                return <div key={idx} className='flex items-center gap-2'>
                                    <span className='text-green-600'><FaCheck /></span>
                                    <p>{feature}</p>
                                </div>


                            })
                        }
                    </div>
                    <button onClick={() => { handleSelected(tool);toast.success("Tools Added!") }} className={`btn ${selectBtn === true ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"} text-white  rounded-full`}> {selectBtn === true ? (<> <FaCheck /> Added to cart </>) : ("Buy Now")} </button>

                </div>
            </div>
        </div>
    );
};

export default ToolsCard;