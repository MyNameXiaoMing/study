/**
 * [获取一个范围内的随机整数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [返回一个随机整数]
 */
function randomNumber(min,max){
	return parseInt(Math.random()*(max-min+1)) + min;
}

//randomNumber(100,200);

/**
 * [随机颜色]
 * @return {String} [返回rgb格式颜色]
 */
function randomColor(){
	// 得到rgb随机颜色
	var r = parseInt(Math.random()*256);
	var g = parseInt(Math.random()*256);
	var b = parseInt(Math.random()*256);

	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

/**
 * [获取元素样式]
 * @param  {Element} ele  [需要获取样式的元素]
 * @param  {String} attr [css样式]
 * @return {String}      [返回css属性值]
 */
function getStyle(ele,attr){
	var res = '';

	// 标准浏览器
	if(window.getComputedStyle){
		res = getComputedStyle(ele)[attr];
	}

	// ie8-
	else if(ele.currentStyle){
		res =  ele.currentStyle[attr];
	}

	// 直接返回内联样式
	else{
		res = ele.style[attr];
	}


	return res;
}

// getStyle(box,'font-size');


/**
 * [绑定事件函数，兼容IE8-]
 * 解决addEventListener和 attachEvent 兼容
 * @param  {Node} ele     [绑定事件的节点]
 * @param  {String} type    [事件类型]
 * @param  {Function} handler [事件处理函数]
 * @param  {Boolean} capture [是否捕获]
 */
function bind(ele,type,handler,capture){
	// 标准浏览器
	if(ele.addEventListener){
		ele.addEventListener(type,handler,capture);
	}

	// IE8-
	else if(ele.attachEvent){
		ele.attachEvent('on' + type,handler);
	}

	// 其他浏览器
	else{
		ele['on' + 'click'] = handler;
	}
}

// bind(btn,'click',function(){},true);


//cookie操作
//增，删，查，改
var Cookie = {
	/**
	 * [添加/修改cookie]
	 * @param {String} name    [cookie名]
	 * @param {String} val     [cookie值]
	 * @param {[Date]} expires [cookie有效期]
	 * @param {[String]} path    [cookie保存路径]
	 */
	set:function(name,val,expires,path){
		var str = name + '=' + val;

		// 有效期
		if(expires){
			str += ';expires=' + expires.toUTCString();
		}

		// 保存路径
		if(path){
			str += ';path=' + path;
		}

		// 写入cookie
		document.cookie = str;
	},

	/**
	 * [删除cookie]
	 * @param  {String} name [要删除的cookie名]
	 * @param  {[String]} path [指定路径]
	 */
	remove:function(name,path){
		var now = new Date();
		now.setDate(now.getDate()-7);

		// document.cookie = name + '=null;expires=' + now.toUTCString();
		// 利用添加方法达到删除效果
		this.set(name,'null',now,path);
	},

	/**
	 * [获取cookie]
	 * @param  {String} name [cookie]
	 * @return {String}      [description]
	 */
	get:function(name){
		var res = '';

		// 获取能访问的所有cookie
		var cookies = document.cookie;

		// 判断是否存在cookie
		if(!cookies.length){
			return res;
		}

		// cookie字符串拆成数组
		cookies = cookies.split('; ');

		// 遍历数组，找出name对应cookie值
		for(var i=0;i<cookies.length;i++){
			// 拆分cookie名和cookie值
			var arr = cookies[i].split('=');
			if(arr[0] === name){
				res = arr[1];
				break;
			}
		}

		return res;
	}
}

// Cookie.set('username','laoxie',now,'/');
// Cookie.remove('username','/');
// Cookie.get('username');//laoxie
// document.getElementById()