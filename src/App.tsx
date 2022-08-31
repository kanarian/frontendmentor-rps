import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import React, { useState } from 'react';


const IconButton = ({icon, name, additionalProps=""}: {icon: React.ReactNode, name: string, additionalProps?:string}) => {
  const nameToColorClassnames: {[key: string]: string} = {
    'paper' : 'shadow-paperGrad-dark bg-paperGrad-light',
    'rock': 'shadow-rockGrad-dark bg-rockGrad-light',
    'scissors' : 'shadow-scissorsGrad-dark bg-scissorsGrad-light'
  }
  
  const colorClassesToAdd =  nameToColorClassnames[name]
  return (
    <div className={`relative z-40 shadow-[inset_0px_-4px_0px_0px] rounded-full ${colorClassesToAdd} md:h-48 md:w-48 h-32 w-32 flex content-center justify-center items-center ${additionalProps}`}>
      <div className="shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full md:h-40 md:w-40 bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
          {icon}
      </div>
    </div>
  );
};

const RulesModal = ({modalOpen} : {modalOpen: boolean}) => {
  return (
      <div className={modalOpen ? "hidden" : "flex" + " bg-red h-10"}>
          DA RULES
      </div>
  );
};

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="flex h-screen flex-col content-center items-center justify-between bg-radial-at-t from-backgroundGrad-from to-backgroundGrad-to">
      <RulesModal modalOpen={modalOpen}/>
      <header className=" max-w-2xl mt-8 align-center items-center flex w-4/5 h-32 rounded-md border-headerOutline border-4 content-evenly justify-between">
        <Logo viewBox="25 0 100 100" className="h-16 w-32"/>
        <div className="bg-whiteBackground-light rounded-md h-24 px-6 mr-2 flex flex-col justify-center">
          <div className="text-score tracking-widest text-xs font-bold">
            SCORE
          </div>
          <div className="text-5xl text-center font-bold text-dark">8</div>
        </div>
      </header>
      <section className='w-96'>
        <div className="grid md:gap-x-48 grid-cols-2 justify-items-center">
          <IconButton icon={<Paper/>} name="paper"/>
          <div className="h-4 w-32 absolute  md:translate-y-24 translate-y-14 bg-connectorBar"/>
          <div className="h-4 w-32 rotate-45 md:-translate-x-24 -translate-x-6 translate-y-40 absolute bg-connectorBar"/>
          <div className="h-4 w-32 -rotate-45 md:translate-x-24 translate-x-6 translate-y-40 absolute bg-connectorBar"/>
          <IconButton icon={<Scissors/>} name="scissors"/>
          <IconButton icon={<Rock/>} name="rock" additionalProps='col-span-2'/>
        </div>
      </section>
      <section className="w-full flex justify-center md:justify-end md:mr-20">
        <button 
          onClick={() => setModalOpen(true)}
          className=" border text-whiteBackground-light px-6 py-2 rounded-md mb-10 text-xs tracking-widest">RULES</button>
      </section>
    </div>
  );
}

export default App;
