exports.config = { //config
    directConnect: true,
    capabilities:{
        'browserName': 'chrome'},
    framework: 'jasmine2',
    specs: ['test.js']
};