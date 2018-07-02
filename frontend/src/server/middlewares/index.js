import addDevMiddlewares from './addDevMiddlewares';

const setUpMiddlewares = (app) => {
  if (process.env.NODE_ENV === 'development') {
    addDevMiddlewares(app);
  }
};

export default setUpMiddlewares;
