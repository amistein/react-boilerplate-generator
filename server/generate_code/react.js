const promisified = require('../promisified');
const funcs = {};

funcs.generateMainReactFile = state => {
  return promisified.readFile(__dirname + '/../../boilerplates/main.js.txt')
  .then(file => {
    file = generateReactRouter(file, state.reactRouter.selected);
    file = generateRedux(file, state.redux.selected);
    file = generateRoutes(file, state.reactRouter.selected, state.resources);
    return file;
  });
};

function generateReactRouter(file, reactRouter) {
  const map = {
    REACT_ROUTER_IMPORT: `import {Router, Route, browserHistory} from 'react-router';`,
    REACT_ROUTER_ROUTER_OPENING: '<Router history={browserHistory}>',
    REACT_ROUTER_ROUTER_CLOSING: '</Router>',
    REACT_ROUTER_ROUTE_OPENING: '<Route path="/" component={MainComponent}>',
    REACT_ROUTER_ROUTE_CLOSING: '</Route>'
  };

  const regex = new RegExp(Object.keys(map).join('|'), 'g');
  return file.replace(regex, matched => reactRouter ? map[matched] : '');
}

function generateRedux(file, redux) {
  const map = {
    REDUX_PROVIDER_IMPORT: `import {Provider} from 'react-redux';`,
    REDUX_STORE_IMPORT: `import store from './store';`,
    REDUX_PROVIDER_OPENING: '<Provider store={store}>',
    REDUX_PROVIDER_CLOSING: '</Provider>'
  };

  const regex = new RegExp(Object.keys(map).join('|'), 'g');
  return file.replace(regex, matched => redux ? map[matched] : '');
}

function generateRoutes(file, reactRouter, resources) {
  if (!reactRouter) {
    file = file.replace('CC_IMPORTS', '');
    return file.replace('MAIN_REACT_BODY', '<MainComponent/>');  
  } 
  const routes = [];
  const imports = [];
  resources.forEach(resource => {
    if (resource.reactRouter) {
      const name = resource.name;
      routes.push(`<Route path='/${name}' component={${name}${resource.container ? 'Container' : ''}}/>`);
      imports.push(`import ${name}${resource.container ? 'Container' : ''} from './${resource.container ? 'containers' : 'components'}/${name}';`);
    }
  });
  file = file.replace('CC_IMPORTS', imports.join('\n'));
  return file.replace('MAIN_REACT_BODY', routes.join('\n        '));
}

module.exports = funcs;