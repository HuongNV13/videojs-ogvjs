const generate = require('videojs-generate-karma-config');

module.exports = function(config) {

  // see https://github.com/videojs/videojs-generate-karma-config
  // for options
  const options = {
    browsers(aboutToRun) {
      return aboutToRun.filter(function(launcherName) {
        if (process.env.TRAVIS) {
          return launcherName === 'Firefox' || launcherName === 'travisChrome';
        }
      });
    },
    files(defaultFiles) {
      return defaultFiles.concat([
        'node_modules/ogv/dist/ogv-support.js',
        'node_modules/ogv/dist/ogv.js',
      ]);
    },
    customLaunchers(defaults) {
      return Object.assign(defaults, {
        travisChrome: {
          base: 'Chrome',
          flags: ['--no-sandbox']
        }
      });
    },
    reporters: ['dots'],
    colors: true
  };

  config = generate(config, options);

  // any other custom stuff not supported by options here!
};
