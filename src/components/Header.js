import Menu from "../pic/menu.svg";
import Close from "../pic/close.svg"
import Girl from "../pic/girl.svg";
export default function Header(props){
    return(
        <header className={`w-full h-20 lg:h-40 bg-headerBG rounded-tl lg:rounded-tl-none rounded-tr relative`}>
            <img src={props.showing==true ? Menu:Close} alt="" onClick={props.active} className="lg:hidden w-5 h-5 absolute top-2 left-2"/>
            <img src={Girl} alt="" className="h-16 lg:h-36 absolute bottom-0 left-6"/>
        </header>
    );
}