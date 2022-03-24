var CI = process.env.npm_lifecycle_event === 'test:ci';

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine-html-reporter'),
      require('karma-mocha-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: './../../coverage',
      reporters: [
        { type: 'in-memory' },
        { type: 'cobertura', subdir: 'lib', file: 'Cobertura.xml' },
      ],
    },
    reporters: CI ? ['mocha'] : ['mocha', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: !CI,
    browsers: CI ? ['ChromeHeadless'] : ['Chrome'],
    singleRun: CI,
    customLaunchers: {
    }
  });
};
