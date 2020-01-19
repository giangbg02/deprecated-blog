// 右侧文章目录粘性定位
$(function () {
    GenerateContentList();

    $(document).pjax('a', '.main-body', {
        fragment: '.main-body',
        timeout: 5000,
        cache: false
    }).on('pjax:complete',
        function() {
            GenerateContentList();
            if ($('.ds-thread').length > 0) { if (typeof DUOSHUO !== 'undefined') DUOSHUO.EmbedThread('.ds-thread'); else $.getScript("https://www.ihewro.com/duoshuo/embedhw4.min.js"); }
        });


});

function GenerateContentList() {
    // 点击头像弹出侧边栏
    document.querySelector("#show-aside-btn").addEventListener("click", function () {
        document.querySelector(".container>aside").classList.toggle("active");
    });

    // 弹出侧边目录
    document.querySelector(".list-btn").addEventListener("click", function () {
        document.querySelector(".list-btn").classList.toggle("active");
        document.querySelector(".article-aside").classList.toggle("active");
        document.querySelector(".article-catalog").classList.toggle("active");
    });

    var offset = $('#aside').offset();
    $("main").scroll(function () {
        //检查对象的顶部是否在游览器可见的范围内
        var scrollTop = $("main").scrollTop();
        if (offset.top < scrollTop + 65) {
            $('#aside').addClass('fixed');
        } else {
            $('#aside').removeClass('fixed');
        }
    });

    let targetUrl = window.location.href;
    $.ajax('https://hitcounter.pythonanywhere.com/count',{
        data:{url: targetUrl},
    }).then(count => $(".num").html(count));

    // 来必力评论
    (function (d, s) {
        var j, e = d.getElementsByTagName(s)[0];

        if (typeof LivereTower === 'function') {
            return;
        }

        j = d.createElement(s);
        j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
        j.async = true;

        e.parentNode.insertBefore(j, e);
    })(document, 'script');
}
