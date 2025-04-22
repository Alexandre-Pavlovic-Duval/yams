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

  let dice = [];
  // Randomize and display of 5 dices
  for (let i = 0; i < 5; i++){
    let randomDice = Math.floor(Math.random() * dices.length);
    let randomizedDice = dices[randomDice];
    dice.push(
      <Dice key={i} number={randomizedDice.diceNumber} alt={randomizedDice.alt} />
    );
  };

  let yamsTitle = <img src={"logo.png"} alt="Yams Logo"/>


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
          <div className= {styles.titleMidlleContainer}>{yamsTitle}</div>
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