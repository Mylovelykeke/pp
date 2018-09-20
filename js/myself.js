$(function() {
//	$(".header").load("header.html")
//	$(".footer").load("footer.html")
		//
		//	var canvas = $("#canvas")[0]
		//	canvas.width = $(window).width();
		//	canvas.height = $(window).height();
		//	//创建绘图环境
		//	var ctx = canvas.getContext("2d");
		//
		//	//监听页面
		//
		//	$(window).on('resize', function() {
		//		canvas.width = $(window).width();
		//		canvas.height = $(window).height();
		//		//绘制矩形  x y width height
		//		ctx.fillRect(0, 0, canvas.width, 400);
		//
		//		ctx.fillStyle = "#000"
		//	})
		//
		//	ctx.fillStyle = '#000'
		//
		//	ctx.fillRect(0, 0, canvas.width, 400);
		//
		//	var listFire = [];
		//	var listFirework = [];
		//	var fireNumber = 10;
		//	var center = {
		//		x: canvas.width / 2,
		//		y: 400 / 2
		//	};
		//	var range = 100;
		//	for(var i = 0; i < fireNumber; i++) {
		//		var fire = {
		//			x: Math.random() * range / 2 - range / 4 + center.x,
		//			y: Math.random() * range * 2 + 400,
		//			size: Math.random() + 0.5,
		//			fill: "#fd1",
		//			vx: Math.random() - 0.5,
		//			vy: -(Math.random() + 4),
		//			ax: Math.random() * 0.02 - 0.01,
		//			far: Math.random() * range + (center.y - range)
		//		};
		//		fire.base = {
		//			x: fire.x,
		//			y: fire.y,
		//			vx: fire.vx
		//		};
		//		listFire.push(fire)
		//		//颜色随机
		//		}	
		//		function randColor() {
		//			var r = Math.floor(Math.random() * 256);
		//			var g = Math.floor(Math.random() * 256);
		//			var b = Math.floor(Math.random() * 256);
		//			var color = 'rgb($r, $g, $b)';
		//			color = color.replace('$r', r);
		//			color = color.replace('$g', g);
		//			color = color.replace('$b', b);
		//			return color;
		//		}
		//		//
		//		(function loop() {
		//			requestAnimationFrame(loop);
		//			update();
		//			draw();
		//		})()
		//
		//		function update() {
		//			for(var i = 0; i < listFire.length; i++) {
		//				var fire = listFire[i];
		//				if(fire.y <= fire.far) {
		//					var color = randColor();
		//					for(var i = 0; i < fireNumber * 5; i++) {
		//						var firework = {
		//							x: fire.x,
		//							y: fire.y,
		//							size: Math.random() + 1.5,
		//							fill: color,
		//							vx: Math.random() * 5 - 2.5,
		//							vy: Math.random() * -5 + 1.5,
		//							ay: 0.05,
		//							alpha: 1,
		//							life: Math.round(Math.random() * range / 2 )+ range/2
		//						};
		//						firework.base = {
		//							life: firework.life,
		//							size: firework.size
		//						};
		//						listFirework.push(firework);
		//					}
		//					//rest
		//					fire.y = fire.base.y;
		//					fire.x = fire.base.x;
		//					fire.vx = fire.base.vx;
		//					fire.ax = Math.random() * 0.02 - 0.01;
		//				}
		//				//
		//				fire.x += fire.vx;
		//				fire.y += fire.vy;
		//				fire.vx += fire.ax;
		//			}
		//			//
		//			for(var i = listFirework.length - 1; i >= 0; i--) {
		//				var firework = listFirework[i];
		//
		//				if(firework) {
		//					firework.x += firework.vx;
		//					firework.y += firework.vy;
		//					firework.vy += firework.ay;
		//					firework.alpha = firework.life / firework.base.life;
		//					firework.size = firework.alpha * firework.base.size;
		//					firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
		//					
		//					firework.life--;
		//					if(firework.life<=0) {
		//						listFirework.splice(i,1);
		//					}
		//				}
		//			}
		//			//
		//
		//		}
		//		function draw(){
		//			ctx.globalCompositeOperation = "source-over";
		//			ctx.globalAlpha = 0.18;
		//			ctx.fillStyle ="#000";
		//			ctx.fillRect(0,0,canvas.width,400);
		//			
		//			//draw
		//			ctx.globalCompositeOperation = "screen";
		//			ctx.globalAlpha =1;
		//			for(var i=0;i<listFire.length; i++){
		//				 var fire = listFire[i];
		//				 ctx.beginPath();
		//				 ctx.arc(fire.x,fire.y,fire.size,0,Math.PI*2);
		//				 ctx.closePath();
		//				 ctx.fillStyle = fire.fill;
		//				 ctx.fill();
		//			}
		//			for( var i=0; i<listFirework.length;i++){
		//				var firework = listFirework[i];
		//				ctx.globalAlpha = firework.alpha;
		//				ctx.beginPath();
		//				ctx.arc(firework.x,firework.y,firework.size,0,Math.PI*2);
		//				ctx.closePath();
		//				ctx.fillStyle = firework.fill;
		//				ctx.fill();
		//			
		//		}
		//
		//		//
		//	}
		//字体
		! function(window) {
			Math.Tau = Math.PI * 2;
			//window.requestAnimationFrame() 方法告诉浏览器您希望执行动画并请求浏览器在下一次重绘之前调用指定的函数来更新动画。该方法使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。
			var request = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
				function(cb) {
					return setTimeout(cb, 40)
				};
			var Teamkill = function() {
				var text = 'welcome to Soul';
				var font = '"Helvetica Neue","Microsoft YaHei UI Light",sans-serif';
				var fontSize = 100;
				var compositionAtop = 'welcome to solul';
				var compositionNormal = 'source-over';
				var canvas = document.getElementById('canvas');
				var engine = canvas.getContext('2d');
				var canvasData = null;
				var patternCanvas = document.createElement('canvas');
				var patternEngine = patternCanvas.getContext('2d');
				var pixels = [];
				var pixelStops = [];
				var moveSpeed = 2;
				var speedTicker = 1;
				var targetLook = 1;
				var targetLookReverse = targetLook * 2;
				var drawMode = false;
				var speed = 1;
				var speedX = 1;
				var speedY = 1;
				var sensitivity = 3;
				//pixelcount:  window.innerWidth * window.innerHeight / (sensitivity ^ 2)
				var pixelMultiplier = 1;
				var pixelSize = 2;
				//zurzeit wird dies ignoriert, dass pixel manuel geschrieben werden (performancegründe)
				var highlightTickerStart = 0;
				var highlightTicker = highlightTickerStart;
				var highlightTickerMax = 60 * 3;
				var color = '#070B1F';
				//#FFD700
				var gradient = null;
				var changeTime = 8000;
				var textBound = {
					left: 0,
					top: 0,
					width: 0,
					height: 0
				};
				this.run = function() {
					setTimeout(changeDrawMode, 3000);
					//添加指定属性
					canvas.setAttribute('width', 1300);
					canvas.setAttribute('height', 300);
					patternCanvas.setAttribute('width', 1300);
					patternCanvas.setAttribute('height', 300);
					patternEngine.fillStyle = '#fff';
					patternEngine.font = 'italic bold '.concat(fontSize).concat('px ').concat(font);
					gradient = engine.createLinearGradient(0, 0, window.innerWidth, 0);
					for(var i = 0,
							max = 10,
							color = null; i < max; i++) {
						color = 'hsl('.concat(360 / max * i).concat(', 50%, 50%)');
						gradient.addColorStop(i / max || 0, color);
					}
					setup();
					tick();
				};
				var setup = function() {
					prepareText();
					generatePixels();
				};
				var changeDrawMode = function() {
					speedTicker = 1;
					drawMode = !drawMode;
					if(drawMode) {
						highlightTicker = highlightTickerStart;
						for(var i = 0; i < pixels.length; i++) {
							pixels[i].moveX = 0;
							pixels[i].moveY = 0;
						}
					}
				};
				var prepareText = function() {
					pixelStops = [];
					var m = patternEngine.measureText(text);
					patternEngine.clearRect(0, 0, window.innerWidth, window.innerHeight);
					patternEngine.fillText(text, window.innerWidth / 2 - m.width / 2, window.innerHeight / 2 - fontSize / 2);
					var imgData = patternEngine.getImageData(0, 0, window.innerWidth, window.innerHeight);
					textBound.left = window.innerWidth / 2 - m.width / 2;
					textBound.top = window.innerHeight / 2 - fontSize / 2 - fontSize;
					textBound.width = m.width;
					textBound.height = fontSize;
					for(var y = 0; y < window.innerHeight; y += sensitivity) {
						for(var x = 0; x < window.innerWidth; x += sensitivity) {
							if(imgData.data[4 * (y * window.innerWidth + x)] != 0) {
								pixelStops.push({
									x: x,
									y: y,
									color: 'hsl(' + (360 / textBound.width * x - textBound.left) + ', 50%, 50%)'
								});
							}
						}
					}
				};
				var generatePixels = function() {
					pixels = [];
					for(var i = 0,
							max = Math.ceil(pixelStops.length * pixelMultiplier); i < max; i++) {
						var speed = Math.random() * 10;
						var split = Math.random();
						var speedX = (0.5 - Math.random()) < 0 ? split * speed : 0 - split * speed;
						var speedY = (0.5 - Math.random()) < 0 ? (1 - split) * speed : 0 - (1 - split) * speed;
						pixels.push({
							x: Math.random() * window.innerWidth,
							y: Math.random() * window.innerHeight,
							dirX: speedX,
							dirY: speedY,
							split: split,
							oldX: 0,
							oldY: 0,
							moveX: 0,
							moveY: 0
						});
					}
				};
				var tick = function() {
					engine.clearRect(0, 0, window.innerWidth, window.innerHeight);
					if(drawMode) {
						speedTicker += 0.01;
						speed = moveSpeed + speedTicker;
						speedX = window.innerWidth / 400 * speed;
						speedY = window.innerWidth / 400 * speed;
					}
					engine.fillStyle = color;
					var moving = false;
					for(var i = 0; i < pixels.length; i++) {
						if(i < pixelStops.length) {
							engine.fillStyle = pixelStops[i].color;
							//engine.fillStyle = 'hsl(150, 50%, 50%)';
						} else {
							engine.fillStyle = color;
						}
						//engine.fillStyle = 'hsl(' + (360 / window.innerWidth * pixels[i].x) + ', 50%, 50%)';
						if(drawMode) {
							if(i < pixelStops.length) {
								if(drawText(i)) {
									moving = true;
								}
							} else {
								drawNormal(pixels[i]);
							}
						} else {
							drawNormal(pixels[i]);
						}
					}
					if(drawMode && !moving) {
						drawHighlight();
					}
					request(tick);
				};
				var drawHighlight = function() {
					highlightTicker++;
					if(highlightTicker > 0 && highlightTicker <= highlightTickerMax) {
						engine.globalCompositeOperation = compositionAtop;
						engine.fillStyle = '#fff';
						var w = 10;
						var left = textBound.left - 20 + ((textBound.width + 40) / highlightTickerMax * highlightTicker);
						engine.fillRect(left, textBound.top - 20, w, textBound.height + 40);
						engine.fillRect(left + w + 5, textBound.top - 20, 5, textBound.height + 40);
						engine.globalCompositeOperation = compositionNormal;
						if(highlightTicker == highlightTickerMax) {
							setTimeout(changeDrawMode, 1000);
							setTimeout(changeDrawMode, changeTime);
						}
					}
				};
				var drawText = function(pixelIterator) {
					arc(pixels[pixelIterator].x, pixels[pixelIterator].y);
					engine.fill();
					return textMoving(pixelIterator);
				};
				var range = function(pixel, target, dim) {
					return Math.abs(pixel[dim] - target[dim]);
				};
				var textMoving = function(pixelIterator) {
					var moving = false;
					var target = pixelStops[pixelIterator];
					var pixel = pixels[pixelIterator];
					//redundant, in loop klatschen
					if(target.x == pixel.x) {
						//do nothing
					} else if(range(pixel, target, 'x') < targetLookReverse) {
						pixel.x = target.x;
					} else {
						if(pixel.x > target.x) {
							if(pixel.moveX > 0) {
								pixel.moveX -= targetLookReverse;
							} else {
								pixel.moveX -= targetLook;
							}
						} else {
							if(pixel.moveX < 0) {
								pixel.moveX += targetLookReverse;
							} else {
								pixel.moveX += targetLook;
							}
						}
						moving = true;
						pixel.x += pixel.moveX;
					}
					if(target.y == pixel.y) {
						//do nothing
					} else if(range(pixel, target, 'y') < targetLookReverse) {
						pixel.y = target.y;
					} else {
						if(pixel.y > target.y) {
							if(pixel.moveY > 0) {
								pixel.moveY -= targetLookReverse;
							} else {
								pixel.moveY -= targetLook;
							}
						} else {
							if(pixel.moveY < 0) {
								pixel.moveY += targetLookReverse;
							} else {
								pixel.moveY += targetLook;
							}
						}
						moving = true;
						pixel.y += pixel.moveY;
					}
					return moving;
				};
				var drawNormal = function(pixel) {
					move(pixel);
					bound(pixel);
					arc(pixel.x, pixel.y);
					engine.fill();
				};
				var arc = function(x, y) {
					x = x | 0;
					y = y | 0;
					engine.fillRect(x, y, pixelSize, pixelSize);
				};
				var move = function(pixel) {
					pixel.x += pixel.dirX;
					pixel.y += pixel.dirY;
				};
				var bound = function(pixel) {
					if(pixel.x < 0) {
						pixel.dirX = Math.abs(pixel.dirX);
					} else if(pixel.x > window.innerWidth) {
						pixel.dirX = 0 - pixel.dirX;
					}
					if(pixel.y < 0) {
						pixel.dirY = Math.abs(pixel.dirY);
					} else if(pixel.y > window.innerHeight) {
						pixel.dirY = 0 - pixel.dirY;
					}
				};
			};
			var tk = new Teamkill();
			tk.run();
		}(window);

})