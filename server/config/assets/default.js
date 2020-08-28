module.exports = {
  server: {
    allJS: ['server.js', 'config/**/*.js', 'src/*/**/*.js'],
    models: 'src/*/server/models/**/*.js',
    routes: ['src/!(core)/routes/**/*.js', 'src/core/routes/**/*.js'],
    sockets: 'src/*/sockets/**/*.js',
    config: ['src/*/config/*.js'],
    policies: 'src/*/policies/*.js',
    views: ['src/*/views/*.html']
  }
}
