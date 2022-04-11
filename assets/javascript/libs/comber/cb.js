import _extend from 'lodash/extend';
const Comber = {};

Comber.KComberStorageType = {
  localStorage: 'localStorage',
  sessionStorage: 'sessionStorage'
};

Comber.getConfig = function () {
  const defs = {
    apiUrl: '',
    debug: false,
    getTimeout: 10,
    postTimeout: 60,
    requestVersion: false,
    storage: {},
    alert: () => {},
    headersHandler: (headers) => {},
    beforeGetHandler: (options, from) => {},
    beforePostHandler: (options, from) => {},
    dataHandler: (options, from) => {},
  };
  const storageDefs = {
    clearSize: 1800,
    separator: '@CACHE',
  };
  const storage = JSON.parse(JSON.stringify(Comber.config.storage));
  _extend(defs, Comber.config);
  _extend(defs.storage, storageDefs, storage);
  return defs;
};

export default Comber;
