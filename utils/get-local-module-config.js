module.exports = function () {
  try {
    const moduleConfig = require('../module.config');

    return moduleConfig;
  } catch {
    return {};
  }
};
