let targetUrl = window.location.href;
$.ajax('https://hitcounter.pythonanywhere.com/count',{
    data:{url: targetUrl},
}).then(count => $(".count").html("<span>本站总访问量：" + count + "次</span>"));