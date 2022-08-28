import { ReactComponent as Scissors } from '../images/icon-scissors.svg';

const ScissorsButton = () => {
    return (
    <div className="shadow-[inset_0px_-4px_0px_0px] shadow-scissorsGrad-dark rounded-full bg-scissorsGrad-light h-32 w-32 flex content-center justify-center items-center">
        <div className="shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
          <Scissors/>
        </div>
    </div>
    );
};

export default ScissorsButton;