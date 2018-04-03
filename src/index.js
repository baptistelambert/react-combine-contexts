import React from 'react';

const getChild = children => (Array.isArray(children) ? children[0] : children);

export const combineContexts = contexts => ({
  Provider: ({ children, value }) =>
    Object.values(contexts).reduce(
      (tree, Context) => (
        <Context.Provider value={value}>{tree}</Context.Provider>
      ),
      children
    ),
  Consumer: ({ children }) =>
    Object.entries(contexts).reduce(
      (tree, [key, Context]) => values => (
        <Context.Consumer>
          {consumerValue =>
            tree({
              ...values,
              [key]: consumerValue,
            })
          }
        </Context.Consumer>
      ),
      value => getChild(children)(value)
    )(),
});
