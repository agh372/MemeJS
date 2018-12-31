import { makeMeAComponent } from "../framework";
import { suchImgMuchWow } from "../framework/element";
import { onClickaMySpaghet,onMouseOveraMySpaghet } from "../framework/event";
import { changeMyBackgroundColor, changeMyImage } from "../framework/style";


const methods = {
  changeName: (state, first) => ({
    ...state,
    first: state.first === "Subscribe to" ? "Unsubscribe from" : "Subscribe to",
    last: state.last === "Pewdiepie" ? "T - series" : "Pewdiepie",
    color: state.color === "blue" ? "red" : "blue"
  })
};
const initialState = { src:"https://svgur.com/i/AFU.svg" };

const template = ({  src, methods }) =>
  suchImgMuchWow`${onClickaMySpaghet(() =>
    methods.changeName("Subscribe to","Pewdiepie")
  )} ${changeMyImage(src)} `;

export const Details = makeMeAComponent({ template, methods, initialState });
