(function(global, undefined) {
  
  // Configure RequireJS
  require({
    baseUrl: 'js/',
    paths: {
      'jquery': 'libs/jquery-1.5.1'
    },
    // Load jQuery before any other scripts
    priority: ['jquery']
  });
  
  require(['jquery', 'app/module', 'plugins'], function($, module) {
    
    log('required deps: ', arguments);

    $(function() {
      module.sayHi('#main');
    });

  });
})(this);






















