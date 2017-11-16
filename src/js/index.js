/* 
* @Author: Marte
* @Date:   2017-11-12 12:47:25
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-16 14:40:52
*/

document.addEventListener('DOMContentLoaded',function(){

    //显示隐藏二级菜单
    var lf_cat = document.querySelector(".lf_cat");
    var category = document.querySelector(".category-menu-nav");

    var nav_nanzi = document.querySelector("#nav_nanzi");
    var nav_nvzi = document.querySelector("#nvzi");
    var nav_ertong = document.querySelector("#nav_ertong");
    var nav_nanzi2 = document.querySelector("#nav_nanzi_pop");
    var nav_nvzi2 = document.querySelector("#nav_nvzi_pop");
    var nav_ertong2 = document.querySelector("#nav_ertong_pop");
    lf_cat.onmouseenter = function(){
        
        console.log(category);
        category.style.display = 'block';
    }

    category.onmouseleave = function(){
        category.style.display = 'none';
    }

    nav_nanzi.onmouseenter = function(){
        nav_nanzi2.style.display = 'block';
        nav_nvzi2.style.display = 'none';
        nav_ertong2.style.display = 'none';
    }

    nav_nanzi2.onmouseleave = function(){
        nav_nanzi2.style.display = 'none';
    }

    nav_nvzi.onmouseenter = function(){
        nav_nvzi2.style.display = 'block';
        nav_nanzi2.style.display = 'none';
        nav_ertong2.style.display = 'none';
    }

    nav_nvzi2.onmouseleave = function(){
        nav_nvzi2.style.display = 'none';
    }
    nav_ertong.onmouseenter = function(){
        nav_ertong2.style.display = 'block';
        nav_nanzi2.style.display = 'none';
        nav_nvzi2.style.display = 'none';
    }
    nav_ertong2.onmouseleave = function(){
        nav_ertong2.style.display = 'none';
    }

    //显示隐藏三级菜单
    var ydxie = document.querySelector("#cat_ydxie");
    var ydxiepop = document.querySelector("#cat_ydxie_pop");

    ydxie.onmouseover = function(){
        ydxiepop.style.display = "block";
    }
    ydxie.onmouseleave = function(){
        ydxiepop.style.display = "none";
    }
    ydxiepop.onmouseover = function(){
        ydxiepop.style.display = "block";
    }
    ydxiepop.onmouseleave = function(){
        ydxiepop.style.display = "none";
    }
    var ydfu = document.querySelector("#cat_ydfu");
    var ydfupop = document.querySelector("#cat_ydfu_pop");
    ydfu.onmouseover = function(){
        ydfupop.style.display = "block";
    }
    ydfu.onmouseleave = function(){
        ydfupop.style.display = "none";
    }
    ydfupop.onmouseover = function(){
        ydfupop.style.display = "block";
    }
    ydfupop.onmouseleave = function(){
        ydfupop.style.display = "none";
    }

    var paobu = document.querySelector("#cat_paobu");
    var paobupop = document.querySelector("#cat_paobu_pop");
    paobu.onmouseover = function(){
        paobupop.style.display = "block";
    }
    paobu.onmouseleave = function(){
        paobupop.style.display = "none";
    }
    paobupop.onmouseover = function(){
        paobupop.style.display = "block";
    }
    paobupop.onmouseleave = function(){
        paobupop.style.display = "none";
    }

    var lanqiu = document.querySelector("#cat_lanqiu");
    var lanqiupop = document.querySelector("#cat_lanqiu_pop");
    lanqiu.onmouseover = function(){
        lanqiupop.style.display = "block";
    }
    lanqiu.onmouseleave = function(){
        lanqiupop.style.display = "none";
    }
    lanqiupop.onmouseover = function(){
        lanqiupop.style.display = "block";
    }
    lanqiupop.onmouseleave = function(){
        lanqiupop.style.display = "none";
    }

    var zuqiu = document.querySelector("#cat_zuqiu");
    var zuqiupop = document.querySelector("#cat_zuqiu_pop");
    zuqiu.onmouseover = function(){
        zuqiupop.style.display = "block";
    }
    zuqiu.onmouseleave = function(){
        zuqiupop.style.display = "none";
    }
    zuqiupop.onmouseover = function(){
        zuqiupop.style.display = "block";
    }
    zuqiupop.onmouseleave = function(){
        zuqiupop.style.display = "none";
    }

    var baobao = document.querySelector("#cat_baobao");
    var baobaopop = document.querySelector("#cat_baobao_pop");
    baobao.onmouseover = function(){
        baobaopop.style.display = "block";
    }
    baobao.onmouseleave = function(){
        baobaopop.style.display = "none";
    }
    baobaopop.onmouseover = function(){
        baobaopop.style.display = "block";
    }
    baobaopop.onmouseleave = function(){
        baobaopop.style.display = "none";
    }

    var huwai = document.querySelector("#cat_huwai");
    var huwaipop = document.querySelector("#cat_huwai_pop");
    huwai.onmouseover = function(){
        huwaipop.style.display = "block";
    }
    huwai.onmouseleave = function(){
        huwaipop.style.display = "none";
    }
    huwaipop.onmouseover = function(){
        huwaipop.style.display = "block";
    }
    huwaipop.onmouseleave = function(){
        huwaipop.style.display = "none";
    }
})
    

   
