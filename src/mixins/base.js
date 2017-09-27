define(function () {
  return {
    methods: {
      rpx: function (num, needPx) {
        var len = num

        if (process.env.COMPILE_ENV === 'vue') {
          len = num / 750 * window.innerWidth
        }

        return needPx ? len + 'px' : len
      }
    }
  }
})
