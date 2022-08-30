process.on('uncaughtException', (err) => {
    console.error('unexpected error', err);
  });
  
  setInterval(() => {
    throw new Error('server is broken!');
  }, 1000);
  
  setTimeout(() => {
    console.log('run');
  }, 2000);