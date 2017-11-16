/* 
* @Author: Marte
* @Date:   2017-11-15 14:26:50
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-15 15:46:31
*/

//验证表单
function nameCheck(input){
    var in_login = document.querySelector("#in_login");
    var valierror = document.querySelector("#valierror");
    var pass = 0;
    var mobilePreg =/(^1[3|4|5|7|8][0-9]\d{8,8}$)|(^17[7890][0-9]{8}$)/;//正则手机号码匹配
    var mailPreg =/^([a-z0-9A-Z]+[-|_|\.]?)+([a-z0-9A-Z]?)@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{1,}$/;//正则邮箱匹配
    var domainPreg =/^([a-z0-9]([-a-z0-9]*[a-z0-9])?\.)+((a[cdefgilmnoqrstuwxz]|aero|arpa)|(b[abdefghijmnorstvwyz]|biz)|(c[acdfghiklmnorsuvxyz]|cat|com|coop)|d[ejkmoz]|(e[ceghrstu]|edu)|f[ijkmor]|(g[abdefghilmnpqrstuwy]|gov)|h[kmnrtu]|(i[delmnoqrst]|info|int)|(j[emop]|jobs)|k[eghimnprwyz]|l[abcikrstuvy]|(m[acdghklmnopqrstuvwxyz]|mil|mobi|museum)|(n[acefgilopruz]|name|net)|(om|org)|(p[aefghklmnrstwy]|pro)|qa|r[eouw]|s[abcdeghijklmnortvyz]|(t[cdfghjklmnoprtvwz]|travel)|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw])$/i;//正则验证码匹配
    if(mobilePreg.test(input.value)){
        pass = 1;   //输入的手机号能匹配，通过
    }
    if(mailPreg.test(input.value)){
        str = input.value;  //输入的邮箱号能匹配，通过
        var strs= new Array(); //定义一数组
        strs=str.split("@"); //字符分割
        if(domainPreg.test(strs[1])) {
            pass = 1;   
        }
    }
    if(!pass){
        valierror.style.display = 'block';
        valierror.innerHTML = "请输入正确的邮箱账号或手机!";
    }

}
function rmDefault(input){
    input.style.color="rgb(0, 0, 0)";
    if(input.value=="邮箱/手机/用户名"){
        input.value='';
        
    }
}
/**消除错误提示*/
function hiddenError(error_id) {
    var valierror = document.querySelector("#valierror");
    var obj = $(error_id);
    valierror.style.display="none";
}


//校验验证码  
function validate(yzm){  
    var valierror = document.querySelector("#valierror");
    var inputCode = document.getElementById("iptlogin").value.toUpperCase(); //取得输入的验证码并转化为大写        
    if(inputCode.length <= 0) { //若输入的验证码长度为0  
        valierror.style.display = 'block';
        valierror.innerHTML = "您输入的验证码为空";
    }         
    else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时  
        valierror.style.display = 'block';
        valierror.innerHTML = "您输入的验码错误";
        createCode();//刷新验证码  
        document.getElementById("iptlogin").value = "";//清空文本框  
    }         
               
}  


