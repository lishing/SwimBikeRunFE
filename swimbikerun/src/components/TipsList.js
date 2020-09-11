import React from 'react'
import TipsInfo from './TipsInfo.js';


const TipsList = (props) =>{
    const handleDelete = (id) =>{props.deleteTip(id)}
    const addToFav = (id) =>{
        props.addToFav(id)
    }
    
    return(
        <div className="tips-container">

            {props.tips.map((tips, index) =>
                <TipsInfo 
                    key={index}
                    title={tips.title}
                    id={tips._id}
                    description={tips.description}
                    tags={tips.tags}
                    liked={tips.liked} 
                    updateTips={props.updateTips}
                    handleDelete={handleDelete}
                    handleAddToFav={addToFav}
                />
            )}
        </div>
    )  
} 

export default TipsList;
