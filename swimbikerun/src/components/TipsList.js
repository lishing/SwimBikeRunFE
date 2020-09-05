import React from 'react'
import TipsInfo from './TipsInfo.js';


const TipsList = (props) =>{
    console.log("tipslist", props)
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
                />
            )}
        </div>
    )  
}


export default TipsList;
