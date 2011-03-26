({
    appDir: "../../js/",
    
    baseUrl: "./",
    
    dir: "../../publish/js",
    
    // Set paths for modules. If relative paths, set relative to baseUrl above.
    paths: {
      'jquery': 'libs/jquery-1.5.1'
    },
    
    // Comment out the optimize line if you want the code minified by UglifyJS
    optimize: "closure",

    modules: [{
      name: "script"
    }]
})