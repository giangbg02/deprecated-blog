document.querySelector("#show-aside-btn").addEventListener("click", function () {
    document.querySelector(".container>aside").classList.toggle("show");
});

$(function(){$(function() {
    var Fwidth = document.querySelector("main").offsetWidth;
    var offset = $('#aside').offset();
    $("main").scroll(function () {
        //检查对象的顶部是否在游览器可见的范围内
        var scrollTop = $("main").scrollTop();
        if (offset.top < scrollTop + 65){
            $('#aside').addClass('fixed');
            $('#aside').css("width", (Fwidth-30)*0.25);
        }
        else{
            $('#aside').removeClass('fixed');
        }
    });
});
});
