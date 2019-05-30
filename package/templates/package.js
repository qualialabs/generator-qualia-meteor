Package.describe({
  name: '<%= packageName %>',
  version: '0.0.1',
  summary: '<%= packageSummary %>',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.use([
    'templating',
    'ecmascript',
    'underscore',

    'qualia:core',
  ]);

  api.mainModule('client/index.js', 'client');
  api.mainModule('server/index.js', 'server');
});
