# Reading Notes for React Material UI

---

[https://github.com/callemall/material-ui](https://github.com/callemall/material-ui)

---

## Themes

From the document, MUI [injects theme into application context](http://www.material-ui.com/#/get-started/usage):

```javascript
const App = () => (
  <MuiThemeProvider>
    <MyAwesomeReactComponent />
  </MuiThemeProvider>
);
```

```javascript
const MyAwesomeReactComponent = () => (
  <RaisedButton label="Default" />
);
```

[React Context](https://facebook.github.io/react/docs/context.html):

> Occasionally, you want to pass data through the component tree without having to pass the props down manually at every level. React's "context" feature lets you do this.

[MuiThemeProvider.js](https://github.com/callemall/material-ui/blob/master/src/styles/MuiThemeProvider.js)

