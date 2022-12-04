import { LeftArrow, RightArrow } from "../UI/Icons";

const CarouselBtn = (props) => {
  return (
    <button className={props.classBtn} onClick={props.click}>{props.children}</button>
  )
}

export default CarouselBtn