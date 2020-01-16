let targetUrl = window.location.href;
$.ajax('https://hitcounter.pythonanywhere.com/count',{
    data:{url: targetUrl},
}).then(count => $(".num").html(count));