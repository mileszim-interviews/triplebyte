module.exports = function(env) {
  return {
    clientAllowedKeys: ['SOME_TEST_KEY'],
    path: `./config/${env}.env`
  }
};
