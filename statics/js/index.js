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

    // 匹配加载的页面中是否含有js
    var regDetectJs = /<script(.|\n)*?>(.|\n|\r\n)*?<\/script>/ig;
    //ajaxLoadedData为ajax获取到的数据
    var jsContained = ajaxLoadedData.match(regDetectJs);
    // 如果包含js，则一段一段的取出js再加载执行
    if(jsContained) {
        // 分段取出js正则
        var regGetJS = /<script(.|\n)*?>((.|\n|\r\n)*)?<\/script>/im;
        // 按顺序分段执行js
        var jsNums = jsContained.length;
        for (var i=0; i<jsNums; i++) {
            var jsSection = jsContained[i].match(regGetJS);
            if(jsSection[2]) {
                if(window.execScript) {
                    // 给IE的特殊待遇
                    window.execScript(jsSection[2]);
                } else {
                    // 给其他大部分浏览器用的
                    window.eval(jsSection[2]);
                }
            }
        }
    }
}