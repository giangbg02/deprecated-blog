$(function () {
    GenerateContentList();

    $(document).pjax('a', '.main-body', {
        fragment: '.main-body',
        timeout: 5000,
        cache: false
    }).on('pjax:complete', function () {
        GenerateContentList();
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

    // 右侧文章目录粘性定位
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
    $.ajax('https://hitcounter.pythonanywhere.com/count', {
        data: {url: targetUrl},
    }).then(count => $(".num").html(count));

    // 来必力评论
    if ($('#lv-container').length > 0) {
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
        console.log('检测到该页面拥有来必力评论容器，评论系统添加中...')
    } else {
        console.log('此页面没有来必力评论容器!')
    }

    $('.article-tip').click(function () {
        top.layer.msg(
            '<svg style="width: 36px;height: 36px" class="icon" aria-hidden="true"><use xlink:href="#icon-biji"></use></svg>文章正在努力编写中...',
            {
                skin: 'layer-skin',
                time: 10000,
                btn: ['明白了']
            })
    })
}