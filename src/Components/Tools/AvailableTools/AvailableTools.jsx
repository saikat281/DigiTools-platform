import React from 'react';
import ToolsCard from './ToolsCard';

const AvailableTools = ({ToolsData,selected,setSelected}) => {
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                ToolsData.map(tool=> <ToolsCard tool={tool} key={tool.id} selected={selected} setSelected={setSelected}></ToolsCard>)
            }
        </div>
    );
};

export default AvailableTools;