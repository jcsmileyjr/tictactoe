import './square.css';
import '../../shared/styles.css';
import React from "react";

const Square = ({iconType, playerSelection}) => {

    const setIcon = () => {
        playerSelection();
    }
    return(
        <button className='square__button--style' onClick={()=> setIcon()} >
            <div className={`${iconType===false?'blank--style':iconType==='O'?'oIcon--style':''}`}></div>
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