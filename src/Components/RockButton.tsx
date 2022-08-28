import { ReactComponent as Rock } from '../images/icon-rock.svg';

const RockButton = () => {
    return (
        <div className="shadow-[inset_0px_-4px_0px_0px] shadow-rockGrad-dark rounded-full bg-rockGrad-light h-32 w-32 flex content-center justify-center items-center">
            <div className="shadow-[inset_0px_4px_0px_0px] shadow-whiteBackground-dark rounded-full bg-whiteBackground-light h-24 w-24 flex content-center justify-center items-center">
                <Rock/>
            </div>
        </div>
    );
};

export default RockButton;