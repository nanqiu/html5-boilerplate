(function(global, undefined) {
  
  define(['jquery', 'app/module-b'], function($, moduleB) {
    
    return {
      sayHi: function(elem) {
        return $(elem).append(moduleB.sayHi());
      }
    };
  });
  
})(this);