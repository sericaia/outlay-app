const Hapi = require('hapi');
const Glue = require('glue');
const manifest = require('./config/manifest.json');

const options = {
  relativeTo: __dirname,
};

async function start() {
  try {
    const server = await Glue.compose(manifest, options);
    await server.start();
    console.log('Server Started:', server.info.uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

start();
