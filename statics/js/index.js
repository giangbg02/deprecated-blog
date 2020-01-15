// 手机点击头像弹出侧边栏
document.querySelector("#show-aside-btn").addEventListener("click", function () {
    document.querySelector(".container>aside").classList.toggle("show");
});

// 目录粘性定位
$(function () {
    $(function () {
        var getWidth = document.querySelector(".article-aside").offsetWidth;
        var offset = $('#aside').offset();
        $("main").scroll(function () {
            //检查对象的顶部是否在游览器可见的范围内
            var scrollTop = $("main").scrollTop();
            if (offset.top < scrollTop + 65) {
                $('#aside').addClass('fixed').css("width", getWidth - 15);
            } else {
                $('#aside').removeClass('fixed');
            }
        });
    });
});
