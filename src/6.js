console.log('starting script');

class MyEventEmitter {
  constructor() {
    this.eventMap = {};
  }

  on(eventName, func) {
    if (!this.eventMap[eventName]) {
      this.eventMap[eventName] = [];
    }
    this.eventMap[eventName].push(func);
  }

  emit(eventName, ...args) {
    this.eventMap[eventName].forEach(handler => {
      handler(...args);
    });
  }

  // other method syntaxes
  // method: function() {}
  // method = () => {}
  // function.bind(this)(args)
}

const blobby = new MyEventEmitter();

blobby.on('squish', string => {
  console.log(string);
});

blobby.on('squish', string => {
  console.log(string.toUpperCase());
});

blobby.emit('squish', 'oh look a string for blobby!');
