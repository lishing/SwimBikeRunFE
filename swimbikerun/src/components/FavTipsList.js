import React from 'react'
import FavTipsInfo from './FavTipsInfo.js';


const FavTipsList = (props) =>{
    return(
        <div className="tips-container">
            {props.favTips.map((tips, index) =>{
            if (tips.liked){
                <FavTipsInfo 
                    key={index}
                    title={tips.title}
                    id={tips._id}
                    description={tips.description}
                    tags={tips.tags} 
                    updateTips={props.updateTips}
                />
            }   
        })}
        </div>
    )  
}

export default FavTipsList;