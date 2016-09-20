window.onload = function () {
	banner();

	var shopClass1 = document.getElementById('shop-class-1');
	var dlList = shopClass1.getElementsByTagName('dl');
	for(var i = 0; i < dlList.length; i++){
		dlList[i].index = i+1;

		dlList[i].onmouseover = show;
		dlList[i].onmouseout = hide;

		var shopClass2 = document.getElementById('shop-class-2-'+ dlList[i].index);
		shopClass2.onmouseover = function(){
			this.style.display = 'block';
		}
		shopClass2.onmouseout = function(){
			this.style.display = 'none';
		}
	}
	function show(event){
		var shopClass2 = document.getElementById('shop-class-2-'+ this.index)
		if(shopClass2){
			shopClass2.style.display = 'block';
		}
	}
	function hide(event){
		var shopClass2 = document.getElementById('shop-class-2-'+ this.index)
		if(shopClass2){
			shopClass2.style.display = 'none';
		}
	}
};

//banner轮播特效
function banner(){
	var oImgList = document.getElementById('banner-img-list'),
		arrImg = oImgList.getElementsByTagName('img'),
		imgWidth = arrImg[0].offsetWidth,
		imgWholeWidth = imgWidth*arrImg.length,
		arrImgNum = document.getElementById('banner-img-a').getElementsByTagName('a');

	oImgList.style.width = imgWholeWidth*2+'px';
	oImgList.innerHTML += oImgList.innerHTML;


	oImgList.timer = null;

	//选择图片imgNum样式设置
	function selectImg(imgNum){
		imgNum = (imgNum >= 2 || imgNum < 0)? 0 : imgNum;
		for(var i = 0; i < arrImgNum.length; i++){
			arrImgNum[i].style.backgroundColor = '#fff';
		}
		
		arrImgNum[imgNum].style.backgroundColor = '#f70';
	}

	//选择图片imgList的滚动效果
	function moveImg(imgNum){
		var iLeft = oImgList.offsetLeft;
		if(iLeft <= -imgWidth*2){
			oImgList.style.left = '0px';
		}

		var step = 20,
			dis = 0,
			target = -imgNum * imgWidth;
		clearInterval(oImgList.timer);
		clearInterval(oImgList.timer2);

		oImgList.timer = setInterval(function(){
			iLeft = oImgList.offsetLeft;
			if(iLeft <= target){
				clearInterval(oImgList.timer);
				
				oImgList.style.left = target+'px';
				selectImg(imgNum);


				imgNum = (imgNum+1 >= 3 || imgNum < 0)? 1 : imgNum+1;
				oImgList.timer2 = setTimeout(function(){
					moveImg(imgNum);
				}, 2000);
			} else {
				oImgList.style.left = (iLeft - step)+'px';
			}
		}, 30);

		return (imgNum+1 >= 3 || imgNum < 0)? 1 : imgNum+1;
	}

	
	setTimeout(function(){
		moveImg(1);
	}, 2000);

}