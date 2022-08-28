import { ReactComponent as Paper } from '../images/icon-paper.svg';

const PaperButton = () => {
    return (
        <div className="shadow-[inset_0px_-4px_0px_0px] shadow-paperGrad-dark rounded-full bg-paperGrad-light h-32 w-32 flex content-center justify-center items-center">
            <div className="shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
              <Paper/>
            </div>
          </div>
    );
};

export default PaperButton;