import React from 'react';
import ToolsCard from './ToolsCard';

const AvailableTools = ({ToolsData,selected,setSelected,add,setAdd}) => {
    
    return (
        <div className='grid grid-cols-3 gap-6  justify-items-center mt-6 '>
            {
                ToolsData.map(tool=> <ToolsCard tool={tool} key={tool.id} selected={selected} setSelected={setSelected} add={add} setAdd={setAdd}></ToolsCard>)
            }
        </div>
    );
};

export default AvailableTools;