import Menu from "../pic/menu.svg";
export default function Header(props){
    return(
        <header className={`w-full h-16 lg:h-32 bg-headerBG rounded-tl lg:rounded-tl-none rounded-tr relative`}>
            <img src={Menu} alt="" onClick={props.active} className="lg:hidden absolute top-2 left-2"/>
        </header>
    );
}