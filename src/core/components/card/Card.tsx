import {CardPropsInterface} from "./card.props.interface.ts";

const Card = ({ text }: CardPropsInterface) => {
    return (
        <div className={"flex justify-between mb-2"}>
            <div className={" px-2 py-2 bg-[#FFFFFF] rounded-l-xl w-[100%]"}>
                <p>
                    {text}
                </p>
            </div>
            <div className={"bg-[#FFFFFF] rounded-r-xl"}>
                <img src="src/core/assets/ponts.svg" alt="menu" />
            </div>
        </div>
    );
};

export default Card;