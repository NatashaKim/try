
 function tweenPosition(angle, rayLength, zoom){
   var c = Math.cos(angle);
   var s = Math.sin(angle);
   return       { scale: zoom, x: rayLength * c * zoom, y:rayLength * s * zoom };
 }

function galaxyTween(galaxyName, angleDeg, zoom){
  return TweenMax.fromTo(galaxyName, 1,
    tweenPosition(angleDeg / 180 * 3.1415,400*zoom,0.1),
    tweenPosition(angleDeg / 180 * 3.1415,400*zoom,1)
  );
}



// Зафиксировать окно
let controller = new ScrollMagic.Controller()

let mainScene = new ScrollMagic.Scene({
  duration: 63000
});
mainScene.setPin('#wrapper_2');
mainScene.addTo(controller);

// Анимация текста
var subName = document.getElementById("sub_name");
var subInfo = document.getElementById("sub_info");
var mainName = document.getElementById("main_name");
var mainInfo = document.getElementById("main_info");

var tween = TweenMax.to(".sky", 1, {scale:0.000001, ease:Linear.easeNone});

let path = anime.path('#curve')
let svgMotion = anime({
  targets: '.map .slider',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 63000,
  autoplay: false
})


// var tween1 = galaxyTween(".objects1",135,2);
// var tween2 = galaxyTween(".objects2",45,1);
// var tween3 = galaxyTween(".objects3",-90,0.7);
//
// var scene1 = new ScrollMagic.Scene({  duration: 14000}).setTween(tween1).addTo(controller);
// var scene2 = new ScrollMagic.Scene({  duration: 14000}).setTween(tween2).addTo(controller);
// var scene3 = new ScrollMagic.Scene({  duration: 14000}).setTween(tween3).addTo(controller);
//
// var tween = TweenMax.fromTo(".sky", 1,  { scale: 0.1 }, { scale: 0.1, ease:Quad.easeOut});

// build scene
var scene = new ScrollMagic.Scene({
  duration: 63000
});

        scene.on("progress", function (e) {

        svgMotion.seek(svgMotion.duration * e.progress);

        if(e.progress < 0.14286){
          subName.innerText = "0.000000";
          subInfo.innerText = "СИНГУЛЯРНОСТЬ";
          mainName.innerHTML = "10 <span class = \"index1\">-9</span>  секунд";
          mainInfo.innerText = "ЧАСТИЦЫ И СИЛЫ";
        }
        else if(e.progress < 0.28571){
          subName.innerHTML = "10 <span class = \"index2\">-9</span>  секунд";
          subInfo.innerText = "ЧАСТИЦЫ И СИЛЫ";
          mainName.innerText = "1 секунда";
          mainInfo.innerText = "АТОМНЫЕ ЯДРА";
        }
        else if(e.progress < 0.42857){
          subName.innerText = "1 секунда";
          subInfo.innerText = "АТОМНЫЕ ЯДРА";
          mainName.innerText = "380 000 лет";
          mainInfo.innerText = "ФОНОВОЕ ИЗЛУЧЕНИЕ";
        }
        else if(e.progress < 0.57143){
          subName.innerText = "380 000 лет";
          subInfo.innerText = "ФОНОВОЕ ИЗЛУЧЕНИЕ";
          mainName.innerText = "1 млрд лет";
          mainInfo.innerText = "БОЛЬШИЕ СТРУКТУРЫ";
        }
        else if(e.progress < 0.71429){
          subName.innerText = "1 млрд лет";
          subInfo.innerText = "БОЛЬШИЕ СТРУКТУРЫ";
          mainName.innerText = "5 млрд лет";
          mainInfo.innerText = "КЛАСТЕРЫ ГАЛАКТИК";
        }
        else if(e.progress < 0.85714){
          subName.innerText = "5 млрд лет";
          subInfo.innerText = "КЛАСТЕРЫ ГАЛАКТИК";
          mainName.innerText = "13,7 млрд лет";
          mainInfo.innerText = "ВСЕЛЕННАЯ СЕГОДНЯ";
        }
        else if(e.progress < 1){
          subName.innerText = "13,7 млрд лет";
          subInfo.innerText = "ВСЕЛЕННАЯ СЕГОДНЯ";
          mainName.innerText = "Будущее";
          mainInfo.innerText = "ХОЛОДНЫЙ КОСМОС";
        }

      });
        scene.setTween(tween);
        scene.addTo(controller);
