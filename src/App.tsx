import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Rules } from './images/image-rules.svg';
import { ReactComponent as CloseIcon } from './images/icon-close.svg';
import React, { ReactNode, useEffect, useState } from 'react';
import { calcMoveByComputer } from './util/calcComp';


const IconButton = ({name, additionalProps="", callBack=undefined}: {name: string, additionalProps?:string, callBack?: Function}) => {
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
    <div onClick={handleClick} className={`${!callbackUndefined ? "cursor-pointer" : ""} relative z-40 shadow-[inset_0px_-4px_0px_0px] rounded-full ${colorClassesToAdd} md:h-48 md:w-48 h-32 w-32 flex content-center justify-center items-center ${additionalProps}`}>
      <div className="shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full md:h-40 md:w-40 bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
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

const ShadedCircleTimer = ({children}: {children:ReactNode}) => {
  const [waitingMode, setWaitingMode] = useState(true);

  useEffect(() => {
    setTimeout(() => {setWaitingMode(false)},0)
  },[])

  if (waitingMode) return <div className="rounded-full md:h-48 md:w-48 h-32 w-32 bg-black/10"></div>
  return ( 
    <div>
      {children}
    </div>
  );
};



function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const [userSelectedOption, setUserSelectedOption] = useState()

  return (
    <div className="flex h-screen flex-col content-center items-center justify-between bg-radial-at-t from-backgroundGrad-from to-backgroundGrad-to">
      <header className=" max-w-2xl mt-8 align-center items-center flex w-4/5 h-32 rounded-md border-headerOutline border-4 content-evenly justify-between">
        <Logo viewBox="25 0 100 100" className="h-16 w-32"/>
        <div className="bg-whiteBackground-light rounded-md h-24 px-6 mr-2 flex flex-col justify-center">
          <div className="text-score tracking-widest text-xs font-bold">
            SCORE
          </div>
          <div className="text-5xl text-center font-bold text-dark">8</div>
        </div>
      </header>
      <RulesModal modalOpen={modalOpen} setModalOpenCallback = {setModalOpen}/>
      <section className='w-96'>
        <div className="grid md:gap-x-48 grid-cols-2 justify-items-center">
          {!userSelectedOption ? <>
            <IconButton name="paper" callBack={setUserSelectedOption}/>
            <div className="h-4 w-32 absolute  md:translate-y-24 translate-y-14 bg-connectorBar"/>
            <div className="h-4 w-32 rotate-45 md:-translate-x-24 -translate-x-6 translate-y-40 absolute bg-connectorBar"/>
            <div className="h-4 w-32 -rotate-45 md:translate-x-24 translate-x-6 translate-y-40 absolute bg-connectorBar"/>
            <IconButton name="scissors" callBack={setUserSelectedOption}/>
            <IconButton name="rock" additionalProps='col-span-2' callBack={setUserSelectedOption}/>
          </> : 
          <>
            <div className="flex flex-col justify-center align-center items-center">
              <IconButton name={userSelectedOption}/>
              <p className="md:mb-10 md:text-xl md:order-first text-whiteBackground-light tracking-tight mt-4">YOU PICKED</p>
            </div>
            <div className="flex flex-col justify-center align-center items-center">
              <ShadedCircleTimer>
                <IconButton name={calcMoveByComputer()}/>
              </ShadedCircleTimer>
              <p className="md:mb-10 md:text-xl md:order-first text-whiteBackground-light tracking-tight mt-4">THE HOUSE PICKED</p>
            </div>
            <div className="flex flex-col col-span-2 mt-20">
              <h3 className="m-auto text-white text-5xl font-bold tracking-tighter mb-4">YOU WIN</h3>
              <button className="bg-whiteBackground-light py-2 px-14 rounded-md text-backgroundGrad-from tracking-wider font-semibold">PLAY AGAIN</button>
            </div>
          </>
          }
        </div> 
      </section>
      <section className="w-full flex justify-center md:justify-end md:mr-20">
        <button 
          onClick={() => setModalOpen(prev => !prev)}
          className=" border text-whiteBackground-light px-6 py-2 rounded-md mb-10 text-xs tracking-widest">RULES</button>
      </section>
    </div>
  );
}

export default App;
