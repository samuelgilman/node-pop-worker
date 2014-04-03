module.exports = {
  redis: {
    client: false,
    spop: 'my-node-pop-set',
    host: '127.0.0.1',
    port: '6379',
    pass: 'password',
    db: 1
  },
  moderate: {
    interval: 1000,
    limit: 100,
    ttl: (1000 * 30)
  }
};
