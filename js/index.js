//$("#one").click(function(){
////	$(this).find(".showList_one").stop().slideToggle(500);
//	console.log("123")
//})
$(function(){
//    顶部下拉菜单
    $(".top-xiala").each(function (a,b) {
        $(this).click(function () {
            $(".showList").eq(a).slideDown()
        })
    })
    $(".showList dd").click(function () {
        $(".showList").slideUp()
    })
    $(".showList").parent().mouseleave(function () {
        $(".showList").slideUp()
    })
    
    
})
fnTab("newsBox",'onclick');