<div align="center">
  <h1>react-combine-contexts</h1>
  <p>Use multiple React Contexts without pain.</p>
</div>

## Installation

This package is compatible with react 16.3.0 and higher.

With npm:

`npm install react-combine-contexts`

Or with yarn:

`yarn add react-combine-contexts`

## Usage

```js
// src/index.js
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { combineContexts } from 'react-combine-contexts';

import * as LocaleContext from './LocaleContext';
import * as ThemeContext from './ThemeContext';

// This will return an object that contains a Provider and a Consumer
const CombinedContext = combineContexts({
  locale: LocaleContext, // Associate each Context to a key
  theme: ThemeContext,
});

const App = () => (
  <Fragment>
    {/* Use the Context Provider like you would use it with any other Context */}
    <CombinedContext.Provider>
      <Fragment>
        {/* Use multiple contexts with a single Consumer */}
        <CombinedContext.Consumer>
          {({ locale, theme }) => (
            <div style={{ color: theme.color, fontFamily: theme.fontFamily }}>
              <span>Selected locale is {locale.selectedLocale}</span>
              <div>
                <button onClick={() => locale.setLocale('en')}>en</button>
                <button onClick={() => locale.setLocale('fr')}>fr</button>
              </div>
            </div>
          )}
        </CombinedContext.Consumer>
        {/* It is still possible to use a scoped Consumer */}
        <ThemeContext.Consumer>
          {theme => <div>The main color is {theme.color}.</div>}
        </ThemeContext.Consumer>
      </Fragment>
    </CombinedContext.Provider>
  </Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

### `combineContexts`

This function takes an object as a parameter and returns another object which contains a Provider and a Consumer.

For each key of the provided object you must provide a Context. The keys you indicated will be the ones used by the Consumer in the object passed as the parameter of its child function.

### Inspiration

This package is inspired by [react-adopt](https://github.com/pedronauck/react-adopt).

### License

MIT
