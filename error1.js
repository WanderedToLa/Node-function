setInterval(() => {
    console.log('시작');
    try {
      throw new Error('server is broken!');
    } catch (err) {
      console.error(err);
    }
  }, 1000)