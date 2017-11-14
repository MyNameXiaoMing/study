/* 
* @Author: Marte
* @Date:   2017-11-12 12:47:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-12 12:57:02
*/

function shouye(){
    $(document).ready(function(){
        $(window).resize(function(){
            $('.topnav').css({
                left: ($(window).width() - $('.top').outerWidth())/2,
                
            });
        });
        // 最初运行函数
        $(window).resize();
    });

}