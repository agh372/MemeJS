import h from "snabbdom/h";


const initialState = {
  template: "",
  on: {}
};


const reducer = args => (acc, currentString, index) => {
  const currentArg = args[index];
  //
  if (currentArg && currentArg.type === "event") {
    return { ...acc, on: { [currentArg.name]: currentArg.event } };
  }

  if (currentArg && currentArg.type === "style") {
    return { ...acc, style: { [currentArg.name]: currentArg.property } };
  }

  if (currentArg && currentArg.type === "attrs") {
    return { ...acc, attrs: { [currentArg.name]: currentArg.property } };
  }


  return {
    ...acc,
    template: acc.template + currentString + (args[index] || "")
  };
};


const createDankElement = tagName => (strings, ...args) => {
  const { template, on , style } = strings.reduce(reducer(args), initialState);
  console.log(style);
  return {
    type: "element",
    template: h(tagName,{ on, style }, template)
  };
};


export const div = createDankElement("div");
export const p = createDankElement("p");
export const EveryoneWeHaveAnAnnouncementToMake = createDankElement("h1");
export const suchImgMuchWow = createDankElement("svg");