import React, { useState, useEffect } from 'react';
import FavTipsInfo from './FavTipsInfo.js';
import api from '../api/index';

const FavTipsList = () =>{
    const [favTips, setFavTips] = useState([])
    
    useEffect(() => {
        const addData = async() =>{
            const allTipsList = await api.getAllTips()
            console.log(allTipsList)
            setFavTips(allTipsList.data)
            return allTipsList
        }
        addData()
    }, [])
    // componentDidMount = async () =>{
    //     const allTipsList = await api.getAllTips()
    //     this.setState({
    //       allTips: allTipsList.data,
    //       displayAllTips : true
    //     })
    //     console.log('this.state.allTips', this.state.allTips)
    // }
    return(
        <div className="fav-tips-container">
            {favTips.map((tips, index) =>{
            if (tips.liked){
                return (<FavTipsInfo 
                    key={index}
                    title={tips.title}
                    id={tips._id}
                    description={tips.description}
                    tags={tips.tags} 
                />)
            }   
        })}
        </div>
    )  
}

export default FavTipsList;