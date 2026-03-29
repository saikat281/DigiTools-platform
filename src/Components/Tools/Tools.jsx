import React, { useState } from 'react';
import AvailableTools from './AvailableTools/AvailableTools';
import SelectedTools from './SelectedTools/SelectedTools';


const Tools = () => {
    const [toggleBtn,setToggleBtn] = useState("product")
    return (
        <div className='mt-[150px] flex flex-col justify-center items-center'>
            <div className='text-center space-y-3'>
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className='space-x-2'>
                    <button onClick={()=> setToggleBtn("product")} className={`btn ${toggleBtn ==="product" ? " text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}   rounded-full`}>Product</button>
                    <button onClick={()=> setToggleBtn("cart")} className={`btn ${toggleBtn ==="cart" ? " text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""} rounded-full`}>Cart(0)</button>
                </div>
            </div>

            <div>

                {toggleBtn === "product" ? <AvailableTools></AvailableTools> : <SelectedTools></SelectedTools>}
                
                
            </div>
        </div>
    );
};

export default Tools;