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
$(function () {
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
});

