import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as Rock } from './images/icon-rock.svg';




function App() {
  return (
    <div className="flex h-screen flex-col content-center items-center justify-between bg-radial-at-t from-backgroundGrad-from to-backgroundGrad-to">
      <header className="mt-8 align-center items-center flex w-4/5 h-32 rounded-md border-headerOutline border-4 content-evenly justify-between">
        <Logo viewBox="25 0 100 100" className="h-16 w-32"/>
        <div className="bg-whiteBackground-light rounded-md h-24 px-4 mr-2 flex flex-col justify-center">
          <div className="text-score tracking-widest text-xs font-bold">
            SCORE
          </div>
          <div className="text-5xl text-center font-bold text-dark">8</div>
        </div>
      </header>
      <section className='w-96'>
        <div className="grid grid-cols-2 justify-items-center">
          <div className="relative z-40 shadow-[inset_0px_-4px_0px_0px] shadow-paperGrad-dark rounded-full bg-paperGrad-light h-32 w-32 flex content-center justify-center items-center">
              <div className="shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
                  <Paper/>
              </div>
          </div>
          <div className="h-4 w-32 absolute translate-y-14 bg-connectorBar"/>
          <div className="relative z-40 shadow-[inset_0px_-4px_0px_0px] shadow-scissorsGrad-dark rounded-full bg-scissorsGrad-light h-32 w-32 flex content-center justify-center items-center">
            <div className="shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
              <Scissors/>
            </div>
          </div>
          <div className="h-4 w-32 rotate-45 -translate-x-6 translate-y-40 absolute bg-connectorBar"/>
          <div className="h-4 w-32 -rotate-45 translate-x-6 translate-y-40 absolute bg-connectorBar"/>
          <div className="relative z-40 col-span-2 shadow-[inset_0px_-4px_0px_0px] shadow-rockGrad-dark rounded-full bg-rockGrad-light h-32 w-32 flex content-center justify-center items-center">
            <div className="shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
                <Rock/>
            </div>
        </div>
        </div>
      </section>
      <section>
        <div>
          <button className="border text-whiteBackground-light px-6 py-2 rounded-md mb-10 text-xs tracking-widest">RULES</button>
        </div>
      </section>
    </div>
  );
}

export default App;
