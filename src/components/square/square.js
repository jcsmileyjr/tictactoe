import './square.css';
import '../../shared/styles.css';

const Square = ({icon = 'blank'}) => {
    return(
        <main>
            {icon === 'blank' &&
                <button className='blank--style'></button>
            }
        </main>
    );
}

export default Square;