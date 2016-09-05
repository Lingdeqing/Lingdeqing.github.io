window.onload = function  () {
	addressEventBind();
	pageEventBind();
	hLineExtend();
}

//sec-7 横线特效
function hLineExtend(){
	var getById = document.getElementById.bind(document),
		lines = [getById('h-line-0'), getById('h-line-1'), getById('h-line-2')];
	for(var i = lines.length-1; i>=0; i--){
		lines[i].timer = null;
		lines[i].onmouseover = function(){
			easing(this, 160);
			
		}

		lines[i].onmouseout = function(){
			easing(this, 34)
		}
	}

	function easing(_this, target){
		var speed = target-_this.offsetWidth > 0 ? 6 : -6;
		clearInterval(_this.timer);
		var _this = _this;
		_this.timer = setInterval(move, 30)

		function move(){
			if(speed >= 0 ? _this.offsetWidth >= target : _this.offsetWidth <= target){
				_this.style.width = target+'px';
				clearInterval(_this.timer);
			} else {
				_this.style.width  = _this.offsetWidth + speed + 'px';
			}
		}
	}
}

function getByClass(cls, parentId){
	var parent = document.getElementById(parentId) || document,
		result = [],
		arr = parent.getElementsByTagName('*');
	for(var i = arr.length-1; i>=0; i--){
		if(arr[i].className == cls){
			result.push(arr[i]);
		}
	}
	return result;
}

//sec-6翻页按钮事件处理函数
function pageEventBind(){
	var pageBtns = document.getElementById('page-div').getElementsByTagName('a');

	for(var i = pageBtns.length-1; i>=0; i--){
		pageBtns[i].index = i;
		pageBtns[i].onclick = choose;
	}
	function choose(){
		for(var i = pageBtns.length-1; i>=0; i--){
			var oDiv = document.getElementById('paper-'+i);
			if(i == this.index){
				oDiv.style.display = 'block';
			} else {
				oDiv.style.display = 'none';
			}
 			pageBtns[i].style.backgroundColor = '#fff';
		}
		this.style.backgroundColor = '#919192';
	}

}

//sec-4地址填写控件事件处理函数
function addressEventBind(){
	var oAddrForm = document.getElementById('address-form'),
		oAddrInput = oAddrForm.getElementsByTagName('input'),
		oUl = oAddrForm.getElementsByTagName('ul');

	//添加打开下拉菜单事件
	for(var i = oAddrInput.length - 1; i>=0 ;i--){
		if(oAddrInput[i].type == 'text'){
			oAddrInput[i].index = i;
			oAddrInput[i].onclick = showMenu;
		}
	}
	
	//添加选择菜单事件
	for(var i = oUl.length - 1; i>=0 ;i--){
		oUl[i].index = i;
		oUl[i].onclick = chooseMenu;
	}

	//添加关闭下拉菜单事件
	document.onclick = hideMenu;

	function hideMenu(){
		for(var i = oUl.length - 1; i>=0 ;i--){
			oUl[i].style.display = 'none';
		}
	}

	function showMenu(event){
		var event = event || window.event;
		if(event.stopPropagation){
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
		hideMenu();
		oUl[this.index].style.display = 'block';
	}

	function chooseMenu(event){
		var event = event || window.event;
		oAddrInput[this.index].value = event.target.innerHTML;
	}
}