import { makeMeAComponent } from "../framework";
import { div, EveryoneWeHaveAnAnnouncementToMake } from "../framework/element";
import { onClickaMySpaghet,onMouseOveraMySpaghet } from "../framework/event";
import { changeMyBackgroundColor } from "../framework/style";


const methods = {
  changeName: (state, first) => ({
    ...state,
    first: state.first === "Subscribe to" ? "Unsubscribe from" : "Subscribe to",
    last: state.last === "Pewdiepie" ? "T - series" : "Pewdiepie",
    color: state.color === "blue" ? "red" : "blue"
  })
};
const initialState = { first: "Subscribe to", last: "Pewdiepie", color:"blue" };

const template = ({ first, last, color, methods }) =>
  EveryoneWeHaveAnAnnouncementToMake`${onClickaMySpaghet(() =>
    methods.changeName("Subscribe to","Pewdiepie")
  )} ${changeMyBackgroundColor(color)}  Hey 9 year olds! ${first} ${last} `;
  

export const Header = makeMeAComponent({ template, methods, initialState });
