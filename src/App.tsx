import { ReactComponent as Logo } from './images/logo.svg';


function App() {
  return (
    <div className="flex flex-col content-center items-center justify-center bg-gray-700">
      <header className=" flex w-3/5 h-32 rounded-md border-headerOutline border-4 content-evenly justify-between">
        <Logo/>
        <div className="bg-slate-300 rounded-md m-2 p-3">
          <div className="text-score">
            Score:
          </div>
          <div className="text-2xl text-dark">
            800
          </div>
        </div>
      </header>
      <section>
        <div>
          Main thing
        </div>
      </section>
      <section>
        <div>
          Rules
        </div>
      </section>
    </div>
  );
}

export default App;
