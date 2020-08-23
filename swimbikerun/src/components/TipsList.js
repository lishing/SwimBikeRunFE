import React from 'react'
import TipsInfo from './TipsInfo.js';


const TipsList = (props) =>{
    return(
        <div className="tips-container">
            {props.tips.map((tips, index) =>
            <TipsInfo 
            key={index}
            title={tips.title}
            id={tips._id}
            description={tips.description}
            tags={tips.tags} />
        )}
        </div>
    )  
}


export default TipsList;
