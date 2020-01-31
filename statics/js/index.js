$(function () {
    GenerateContentList();

    // pjax异步加载页面
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

    // 加载gitalk评论系统
    if ($('#gitalk-container').length > 0) {
        var gitalk = new Gitalk({
            clientID: '7ff38d8c3509efdcee12',   // GitHub Application Client ID
            clientSecret: '01c5373a8f0d16232103c1a3fa78cf1700aba622', // GitHub Application Client Secret
            repo: 'T-miracle.github.io',       // 存放评论的仓库
            owner: 'T-miracle',                // 仓库的创建者，
            admin: ['T-miracle'],              // 如果仓库有多个人可以操作，那么在这里以数组形式写出
            id: md5(location.pathname),         // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
        });
        gitalk.render('gitalk-container');      // 渲染Gitalk评论组件
    }

    // 重载高亮代码块
    if ($('pre').length > 0) {
        Prism.highlightAll();
    }

    $("#toc").tocify();


}