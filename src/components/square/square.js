import './square.css';
import '../../shared/styles.css';
import React, { useState } from "react";

const Square = ({iconType, updateIcon, playerSelection}) => {
    //const [iconType, setIconType] = useState("blank");

    const setIcon = () => {
        //setIconType(updateIcon());
        playerSelection();
    }
    return(
        <button className='square__button--style' onClick={()=> setIcon()} >
            <div className={`${iconType===false?'blank--style':iconType==='player'?'oIcon--style':''}`}></div>
            {iconType === 'computer' &&
                <div className='square__x--style'>
                    <div className="xIcon--style"></div>
                    <div className="xIconRight--style"></div>
                </div>
            }
        </button>  

    );
}

export default Square;