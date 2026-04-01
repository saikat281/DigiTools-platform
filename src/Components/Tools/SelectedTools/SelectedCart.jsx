import React from 'react';
import { toast } from 'react-toastify';

const SelectedCart = ({ tool, selected, setSelected, add, setAdd }) => {
    const handleRemoveCart = (tool) => {
        const updateCart = selected.filter(cart => cart !== tool);
        setSelected(updateCart)
        setAdd(add - tool.price)
        toast.info("Item Removed")
    }
    return (
        <div className='flex justify-between items-center p-3 rounded-lg bg-gray-100 shadow-b-sm'>
            <div className='flex items-center gap-3'>
                <div>
                    <img className='p-2 bg-white rounded-full' src={tool.image} alt="" />
                </div>

                <div>
                    <h1 className='font-bold'>{tool.name}</h1>
                    <p className='text-gray-700'>{`$${tool.price}`}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveCart(tool)} className='btn text-red-500'>Remove</button>
            </div>
        </div>
    );
};

export default SelectedCart;