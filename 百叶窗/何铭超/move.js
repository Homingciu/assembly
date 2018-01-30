			function startMove(elem, json, func) {
				clearInterval(elem.timer)
				var iSpeed;
				var iCur;
				elem.timer = setInterval(function () {
					var bStop = true;
					for(var attr in json) {
						if(attr === "opacity") {
							iCur = parseFloat(getStyle(elem, attr)) * 100;
						}else {
							iCur = parseInt(getStyle(elem, attr));
						}
						iSpeed = (json[attr] - iCur) / 7;
						if(iSpeed > 0) {
							iSpeed = Math.ceil(iSpeed);
						}else {
							iSpeed = Math.floor(iSpeed);
						}
						if(attr === "opacity"){
							elem.style[attr] = (iCur + iSpeed) / 100;
						}else {
							elem.style[attr] = iCur + iSpeed + "px";
						}
						if(iCur !== json[attr]) {
							bStop = false;
						}
					}	
					if(bStop) {
						clearInterval(elem.timer);
						func();
					}
				}, 30)
			}

			function getStyle(elem, attr) {
				if(elem.currentStyle) {
					return elem.currentStyle[attr];
				}else {
					return window.getComputedStyle(elem)[attr];
				}
			}