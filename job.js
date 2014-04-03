module.exports = {

  init: function (params) {
    var that = this;
    var nodePop = params.nodePop;
    that.nodePop = nodePop
  },

  process: function (mem) {

    var that = this;
    var nodePop = that.nodePop;

    setTimeout(function () {

      console.log('PROCESSED * mem -> ' + mem);

      nodePop.queue({
        set: 'next-node-pop-set',
        mem: mem
      }, function (err) {
        if (err) { console.log(err); }
        nodePop.done(mem);
      });

    }, (1000 * 2))

  }

};
