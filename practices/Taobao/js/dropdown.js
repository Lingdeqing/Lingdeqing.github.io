function getByClass(parentId, cls) {
	var oParent = document.getElementById(parentId),
		res = [];
	for(var i = oParent.childNodes.length-1; i >= 0; i--){
		if(oParent.childNodes[i].className && oParent.childNodes[i].className.indexOf(cls) != -1)
			res.unshift(oParent.childNodes[i]);
	}
	return res[0];
}

function dropdownHandle(dropdownId){
	var dropDownToggle = getByClass(dropdownId, 'dropdown-toggle'),
		dropDownMenu = getByClass(dropdownId, 'dropdown-menu');

	dropDownToggle.onclick = function(event){
		dropDownMenu.style.display = 'block';
		event.stopPropagation();
	}

	var dropDownItems = dropDownMenu.getElementsByTagName('a');
	for(var i = dropDownItems.length-1; i>=0; i--){
		dropDownItems[i].onclick = dropdownSel;
	}

	function dropdownSel(event){
		dropDownToggle.innerHTML = this.innerHTML+" <span class='caret'></span>";
	}
	
	return dropDownMenu;
}

window.onload = function(){
	var dropdownMenus = [];
	dropdownMenus.push(dropdownHandle('my-dropdown-1'));
	dropdownMenus.push(dropdownHandle('my-dropdown-2'));
	dropdownMenus.push(dropdownHandle('my-dropdown-3'));

	document.addEventListener('click', function(){
		for(var i = dropdownMenus.length-1; i>=0; i--){
			dropdownMenus[i].style.display = 'none';
		}
	})
}