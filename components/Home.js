import styles from '../styles/Home.module.css';
import Dice from './Dice';

function Home() {

  const dices = [
    {diceNumber: "1.png", alt: "Number 1"},
    {diceNumber: "2.png", alt: "Number 2"},
    {diceNumber: "3.png", alt: "Number 3"},
    {diceNumber: "4.png", alt: "Number 4"},
    {diceNumber: "5.png", alt: "Number 5"},
    {diceNumber: "6.png", alt: "Number 6"},
  ];

  let dice = dices.map(element => {
    return <Dice number={element.diceNumber} alt={element.alt}/>
  });


  return (
    <div>
      <div className={styles.mainDiv}>
        {/* Left Part Container */}
        <div className= {styles.leftContainer}>
          <div className= {styles.firstLeftTriangle}></div>
          <div className= {styles.secondLeftTriangle}></div>
          <div className= {styles.thirdLeftTriangle}></div>
        </div>

        {/* Middle Part Container */}
        <div className= {styles.middleContainer}>
          <div className= {styles.titleMidlleContainer}></div>
          <div className= {styles.dicesMiddleContainer}>
            {dice}
          </div>
        </div>

        {/* Right Part Container */}
        <div className= {styles.rightContainer}>
          <div className= {styles.firsrightTriangle}></div>
          <div className= {styles.secondrightTriangle}></div>
          <div className= {styles.thirdrightTriangle}></div>
        </div>
      </div>

    </div>
  );
}

export default Home;