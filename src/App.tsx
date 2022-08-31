import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Rules } from './images/image-rules.svg';
import { ReactComponent as CloseIcon } from './images/icon-close.svg';
import { useState } from 'react';
import { calcMoveByComputer, calcWinner } from './util/calcComp';


const IconButton = ({name, additionalProps="", callBack=undefined, showHalo=false}: {name: string, additionalProps?:string, callBack?: Function, showHalo?:boolean}) => {
  var icon = null
  const callbackUndefined = callBack === undefined

  name === 'paper' ? icon = <Paper/> : name === "rock" ? icon=<Rock/> : icon=<Scissors/>
  const nameToColorClassnames: {[key: string]: string} = {
    'paper' : 'shadow-paperGrad-dark bg-paperGrad-light',
    'rock': 'shadow-rockGrad-dark bg-rockGrad-light',
    'scissors' : 'shadow-scissorsGrad-dark bg-scissorsGrad-light'
  }

  const handleClick = () => {
    if (callBack){
      callBack(name)
    }
  }
  
  const colorClassesToAdd =  nameToColorClassnames[name]
  return (
      <div onClick={handleClick} className={`${!callbackUndefined ? "cursor-pointer" : ""} relative z-10 shadow-[inset_0px_-4px_0px_0px, 10px 10px black] rounded-full ${colorClassesToAdd} md:h-48 md:w-48 h-32 w-32 flex content-center justify-center items-center ${additionalProps}`}>
              { showHalo &&
        <>
          <div className=" -z-50 absolute md:w-[28rem] md:h-[28rem] w-96 h-96 bg-cyanIconShadow/5 rounded-full"/>
          <div className=" -z-50 absolute md:w-96 md:h-96 w-72 h-72 bg-cyanIconShadow/5 rounded-full"/>
          <div className=" -z-50 absolute md:w-72 md:h-72 w-56 h-56 bg-cyanIconShadow/5 rounded-full"/>
        </>
        }
        <div className=" relative z-10 shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full md:h-40 md:w-40 bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
            {icon}
        </div>
      </div>
  );
};

const RulesModal = ({modalOpen, setModalOpenCallback} : {modalOpen: boolean, setModalOpenCallback:any}) => {

  return (
      <div onClick={() => setModalOpenCallback(false)} className={`${modalOpen ? "flex" : "hidden"} bg-black/50 h-full w-full absolute z-50`}>
        <div onClick={(e) => e.stopPropagation()} className=" bg-whiteBackground-light m-auto h-full w-full md:h-96 md:w-96 md:rounded-md flex flex-col md:flex-row md:flex-wrap justify-around align-center items-center md:justify-between">
          <h1 className="md:ml-4 md:order-1 text-3xl text-backgroundGrad-from font-bold tracking-tighter">
            RULES
          </h1>
          <div className="md:m-auto md:order-3">
            <Rules/>
          </div>
          <div className="md:mr-4 md:order-2 cursor-pointer">
            <CloseIcon onClick={() => setModalOpenCallback(false)}/>
          </div>
        </div>
      </div>
  );
};



function App() {
  const [score, setScore] = useState(0);
  const [modalOpen, setModalOpen] = useState(false)
  const [userSelectedOption, setUserSelectedOption] = useState("")
  const [computerSelectedOption, setComputerSelectedOption] = useState("")
  const [thisRoundWonBy, setThisRoundWonBy] = useState("")

  const handleUserSelectedOption = (selectedOption: string) => {
    const computerMove = calcMoveByComputer()
    setUserSelectedOption(selectedOption)
    setComputerSelectedOption(computerMove)
    const winner = calcWinner(selectedOption, computerMove)
    if (winner === "draw"){
      return
    }
    if (winner === "user"){
      setScore(prev => prev+1)
      setThisRoundWonBy("user")
    }
    if (winner === "computer"){
      setScore(prev => prev === 0 ? 0 : prev-1)
      setThisRoundWonBy("computer")
    }
  }

  const resetGameValues = () => {
    setUserSelectedOption("")
    setComputerSelectedOption("")
    setThisRoundWonBy("")
  }


  return (
    <div className=" relative z-10 flex h-screen w-screen flex-col content-center items-center justify-between bg-radial-at-t from-backgroundGrad-from to-backgroundGrad-to">
      <header className="relative z-50 max-w-2xl mt-8 align-center items-center flex w-4/5 h-32 rounded-md border-headerOutline border-4 content-evenly justify-between">
        <Logo viewBox="25 0 100 100" className="h-16 w-32"/>
        <div className=" bg-whiteBackground-light rounded-md h-24 px-6 mr-2 flex flex-col justify-center">
          <div className=" text-score tracking-widest text-xs font-bold">
            SCORE
          </div>
          <div className="text-5xl text-center font-bold text-dark">{score}</div>
        </div>
      </header>
      <section className='w-full '>
          {!userSelectedOption ? <>
            <div className="m-auto w-[28rem] grid md:gap-x-48 grid-cols-2 justify-items-center">
              <IconButton name="paper" callBack={handleUserSelectedOption}/>
              <div className="h-4 w-32 absolute  md:translate-y-24 translate-y-14 bg-connectorBar"/>
              <div className="h-4 w-32 rotate-45 md:-translate-x-24 -translate-x-6 translate-y-40 absolute bg-connectorBar"/>
              <div className="h-4 w-32 -rotate-45 md:translate-x-24 translate-x-6 translate-y-40 absolute bg-connectorBar"/>
              <IconButton name="scissors" callBack={handleUserSelectedOption}/>
              <IconButton name="rock" additionalProps='col-span-2' callBack={handleUserSelectedOption}/>
            </div> 
          </> : 
          <div className="m-auto flex space-between flex-wrap md:flex-nowrap justify-evenly items-center w-2/3 max-w-5xl">
            <div className={`relative ${thisRoundWonBy==="user" ? "z-10" :"z-20"} md:order-1 flex flex-col justify-center align-center items-center p-2`}>
              <IconButton name={userSelectedOption} showHalo={thisRoundWonBy === "user"}/>
              <p className="md:mb-10 md:text-xl md:order-first text-whiteBackground-light tracking-tight mt-4">YOU PICKED</p>
            </div>
            <div className={`relative ${thisRoundWonBy==="computer" ? "z-10" :"z-20"} md:order-3 flex flex-col justify-center align-center items-center p-2`}>
                <IconButton name={computerSelectedOption} showHalo={thisRoundWonBy === "computer"}/>
              <p className="md:mb-10 md:text-xl md:order-first text-whiteBackground-light tracking-tight mt-4">THE HOUSE PICKED</p>
            </div>
            <div className="md:order-2 flex flex-col col-span-2 md:mt-0 mt-20">
              <h3 className="m-auto text-white text-5xl font-bold tracking-tighter mb-4 whitespace-nowrap">{thisRoundWonBy === "user" ? "YOU WIN" : thisRoundWonBy === "computer" ? "YOU LOSE" : "DRAW"}</h3>
              <button onClick={resetGameValues} className="relative z-10 bg-whiteBackground-light py-2 px-14 rounded-md text-backgroundGrad-from tracking-wider font-semibold whitespace-nowrap">PLAY AGAIN</button>
            </div>
          </div>
          }
      </section>
      <section className="w-full flex justify-center md:justify-end md:mr-20">
        <button 
          onClick={() => setModalOpen(prev => !prev)}
          className=" border text-whiteBackground-light px-6 py-2 rounded-md mb-10 text-xs tracking-widest">RULES</button>
      </section>
      <RulesModal modalOpen={modalOpen} setModalOpenCallback = {setModalOpen}/>
    </div>
  );
}

export default App;
