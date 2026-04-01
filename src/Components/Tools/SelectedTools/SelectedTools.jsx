import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import SelectedCart from './SelectedCart';
import { toast } from 'react-toastify';

const SelectedTools = ({ selected, setSelected, add, setAdd }) => {
    //console.log(selected)
    const handleRemoveAll = () => {
        setSelected([]);
        toast("🦄 Checkout Successfull!");
        setAdd(0);
    }
    return (
        <div className='w-full p-6 shadow-lg'>
            <p className='text-2xl font-bold mb-3'>Your Cart</p>
            {
                selected.length === 0 ?
                    <div className='h-[300px] flex flex-col items-center justify-center bg-gray-100 space-y-2 rounded-md'>
                        <div className='text-8xl opacity-[30%]'>
                            <IoCartOutline />
                        </div>
                        <p className='opacity-[70%]'>Your cart is empty</p>
                    </div>

                    :
                    <div className='space-y-6'>
                        {
                            selected.map((tool, idx) => <SelectedCart tool={tool} selected={selected} setSelected={setSelected} key={idx} add={add} setAdd={setAdd}></SelectedCart>)
                        }
                        <div className='flex flex-col justify-center space-y-4'>
                            <div className='flex justify-between items-cneter px-2'>
                                <p>Total:</p>
                                <p className='text-3xl font-bold'>${add}</p>
                            </div>
                            <button onClick={()=>handleRemoveAll()} className='btn p-6 text-white rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
                        </div>
                    </div>

            }
        </div>
    );
};

export default SelectedTools;