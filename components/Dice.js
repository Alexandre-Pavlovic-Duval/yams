import styles from '../styles/Dice.module.css';

function Dice(props) {
    return (
        <div>
            <img className={styles.dice} src={props.number}  alt={props.alt}/>
        </div>
    );
};

export default Dice;