import * as snabbdom from "snabbdom";
import h from "snabbdom/h";

const patch = snabbdom.init([
  require("snabbdom/modules/eventlisteners").default,
  require('snabbdom/modules/class').default,          
  require('snabbdom/modules/props').default,          
  require('snabbdom/modules/style').default
]);

export const alexaInitCode = (selector, component) =>{
  console.log(document.getElementById(selector));
  patch(document.getElementById(selector), component.template);
};

let state = {};

export const makeMeAComponent = ({
  template,
  methods = {},
  initialState = {}
}) => {
  state = initialState;
  let previous;

  const mappedMethods = props =>
    Object.keys(methods).reduce(
      (acc, key) => ({
        ...acc,
        [key]: (...args) => {
          state = methods[key](state, ...args);
          const nextNode = template({
            ...props,
            ...state,
            methods: mappedMethods(props)
          });
          patch(previous.template, nextNode.template);

          previous = nextNode;
          return state;
        }
      }),
      {}
    );

  return props => {
    previous = template({ ...props, ...state, methods: mappedMethods(props) });
    return previous;
  };
};
