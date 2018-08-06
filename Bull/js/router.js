


$(function(){

    $("#titler").load("../title/learn.html")
    $("#dynamic").load("../dynamic/learn.html")
    //切换
    $(".menu-learn").click(function() {
        $("#titler").load($(this).data("page1"))
        $("#dynamic").load($(this).data("page"))
    })
})


