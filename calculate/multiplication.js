//iife function = Immediately Invoked Function Expression

(function (module) {
  // require("module-alias/register");
  let result = (a, b) => {
    return a * b;
  };
  module.exports = { result };
})();
