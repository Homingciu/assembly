//利用闭包，私有化变量
var jalousieInit = (function () {
	var jalousie = document.getElementsByTagName("ul")[0],
		jalousieContentCollection = jalousie.getElementsByTagName("div"),
		len = jalousieContentCollection.length,
		alternateTimer;

	function alternateMove(elemCollection) {
		var count = 0;
		alternateTimer = setInterval(function () {
			count % 2 == 0 ? toMove(elemCollection, {"top":"-30"}): toMove(elemCollection, {"top":"0"});
			count++;
			// console.log(count);
		}, 2400)
	}		

	function toMove(elemCollection, distance) {
		var i = 0,
			moveTimer = null;
		moveTimer = window.setInterval(function () {
			if(i == len -1) {
				clearInterval(moveTimer);
			}
			startMove(elemCollection[i], distance);
			i++;
		}, 100)	
	}


	var init = function () {
		alternateMove(jalousieContentCollection);
	}

	return init;

}());


jalousieInit();