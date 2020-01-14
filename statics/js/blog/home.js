document.querySelector("#show-aside-btn").addEventListener("click", function () {
    document.querySelector(".container>aside").classList.toggle("show");
});

$(function () {
    $(function () {
        var main_width = document.querySelector("main").offsetWidth;
        var art_width = document.querySelector(".article-main").offsetWidth;
        var offset = $('#aside').offset();
        $("main").scroll(function () {
            //检查对象的顶部是否在游览器可见的范围内
            var scrollTop = $("main").scrollTop();
            if (offset.top < scrollTop + 65) {
                $('#aside').addClass('fixed').css("width", main_width - art_width - 10);
            } else {
                $('#aside').removeClass('fixed');
            }
        });
    });
});
