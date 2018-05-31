Package.describe({
  name: '<%= packageName %>',
  version: '0.0.1',
  summary: '<%= packageSummary %>',
  git: '',
  documentation: 'README.md',
});

var dependencies = [
  'templating',
  'ecmascript',
  'underscore',
];

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4');
  api.use(dependencies, ['client', 'server']);
  api.mainModule('client/main.js', 'client');
  api.mainModule('server/main.js', 'server');
});

Package.onTest(function(api) {
  api.versionsFrom('METEOR@1.4');

  api.use(dependencies);
  api.use([
    'tinytest',
    'practicalmeteor:sinon',
    '<%= packageName %>',
  ]);

  api.mainModule('common/test.js');
});
