$(function(){
    // 切换
    function tabChg(parm1,parm2){
        $(parm2).eq(0).show().siblings('ul').hide();
        $(parm1).on('tap',function(){
            $(this).addClass('cur').siblings().removeClass('cur');
            var index = $(this).index();
            $(parm2).eq(index).show().siblings().hide();
        })
    }
    tabChg('.myOrd ol li','.ordList .proDd ul');
})