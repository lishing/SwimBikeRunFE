import React from 'react'
import TipsInfo from './TipsInfo.js';


const TipsList = (props) =>{
    const handleDelete = (id) =>{props.deleteTip(id)}
    return(
        <div className="tips-container">

            {props.tips.map((tips, index) =>
                <TipsInfo 
                    key={index}
                    title={tips.title}
                    id={tips._id}
                    description={tips.description}
                    tags={tips.tags} 
                    updateTips={props.updateTips}
                    handleDelete={handleDelete}

                />
            )}
        </div>
    )  
} 

export default TipsList;
