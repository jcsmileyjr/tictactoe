import './square.css';
import '../../shared/styles.css';
import React, { useState } from "react";

const Square = ({icon = 'blank', updateIcon}) => {
    const [iconType, setIconType] = useState("blank");

    const setIcon = () => {
        setIconType(updateIcon());
    }
    return(
        <button className='square__button--style' onClick={()=> setIcon()} >
            <div className={`${iconType==='blank'?'blank--style':iconType==='O'?'oIcon--style':''}`}></div>
            {iconType === 'X' &&
                <div className='square__x--style'>
                    <div className="xIcon--style"></div>
                    <div className="xIconRight--style"></div>
                </div>
            }
        </button>  

    );
}

export default Square;