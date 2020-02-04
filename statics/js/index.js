$(function () {
    GenerateContentList();

    // pjax异步加载页面
    $(document).pjax('a', '.main-body', {
        fragment: '.main-body',
        timeout: 5000,
        async: false
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
    $(window).scroll(function () {
        //检查对象的顶部是否在游览器可见的范围内
        var scrollTop = $(window).scrollTop();
        if (offset.top < scrollTop + 65) {
            $('#aside').addClass('fixed');
        } else {
            $('#aside').removeClass('fixed');
        }
    });

    // 当前网页访问量统计
    let targetUrl = window.location.href;
    $.ajax('https://hitcounter.pythonanywhere.com/count', {
        data: {url: targetUrl},
    }).then(count => $(".num").html(count));

    // 未完成文章点击提示信息
    $('.article-tip').click(function () {
        top.layer.msg(
            '<svg style="width: 36px;height: 36px" class="icon" aria-hidden="true"><use xlink:href="#icon-biji"></use></svg>文章正在努力编写中...',
            {
                skin: 'layer-skin',
                time: 10000,
                btn: ['明白了']
            })
    });
}