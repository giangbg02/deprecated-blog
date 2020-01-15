$(".desc span").on('mouseenter', function() {
    var that = this;
    layer.tips(that.innerText, that, {tips: [3, '#78BA32'], time: 10000});
}).on('mouseleave', function() {
    layer.closeAll();
});