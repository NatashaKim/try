// Аудио

let audio = null;
let current_audio_id = null;

function play(audio_id) {

  if (audio != null) {
        audio.pause();
        audio = null;

        if(current_audio_id == audio_id)
          return;
  }

  audio = document.getElementById(audio_id);
  audio.play();
  current_audio_id = audio_id;
}



// Анимация курсора

let cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x +"px";
  cursor.style.top = y +"px";
})


// Анимация фона

let red = anime({
  targets: '.red',
  duration: 2000,
  opacity: [0],
  easing: 'linear',
  autoplay: true,
  loop: true,
  direction: 'alternate'
})



//  function tweenPosition(angle, rayLength, zoom){
//    var c = Math.cos(angle);
//    var s = Math.sin(angle);
//    return       { scale: zoom, x: rayLength * c * zoom, y:rayLength * s * zoom };
//  }
//
// function galaxyTween(galaxyName, angleDeg, zoom){
//   return TweenMax.fromTo(galaxyName, 1,
//     tweenPosition(angleDeg / 180 * 3.1415,400*zoom,0.1),
//     tweenPosition(angleDeg / 180 * 3.1415,400*zoom,1)
//   );
// }



// Для того, чтобы ближние "кнопки" не закрывали дальние

function setChildsDisplay(elementId, display){
  d = document.getElementById(elementId);
  d.style.display=display;
  for(i=0; i < d.childNodes.length; i++) {
    e = d.childNodes[i];
    if(e.tagName=="IMG") e.style.display=display;
  }
}



// Зафиксировать окно

let controller = new ScrollMagic.Controller()

let mainScene = new ScrollMagic.Scene({
  duration: 21000
});
mainScene.setPin('#wrapper_2');
mainScene.addTo(controller);



// Анимация текста

var subName = document.getElementById("sub_name");
var subInfo = document.getElementById("sub_info");
var mainName = document.getElementById("main_name");
var mainInfo = document.getElementById("main_info");



// Анимация слайдера

let path = anime.path('#curve')
let svgMotion = anime({
  targets: '.map .slider',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 21000,
  autoplay: false
})



// Появление картинок

// Большой взрыв

new ScrollMagic.Scene({ offset:0, duration:9000})
.setTween(TweenMax.fromTo(".big_bang", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.addTo(controller);

new ScrollMagic.Scene({ offset:0, duration:9000})
.setTween(TweenMax.fromTo("#big_bang_button", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.on("enter", function (event) { setChildsDisplay('big_bang_button','block'); })
.on("leave", function (event) { setChildsDisplay('big_bang_button','none'); })
.addTo(controller);

// Атомы

new ScrollMagic.Scene({ offset:2900, duration:4000})
.setTween(TweenMax.fromTo(".atom", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.addTo(controller);

new ScrollMagic.Scene({ offset:2900, duration:4000})
.setTween(TweenMax.fromTo("#atom_button", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.on("enter", function (event) { setChildsDisplay('atom_button','block'); })
.on("leave", function (event) { setChildsDisplay('atom_button','none'); })

//  Большие структуры

new ScrollMagic.Scene({ offset:5900, duration:4000})
.setTween(TweenMax.fromTo(".relict", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.addTo(controller);

new ScrollMagic.Scene({ offset:5900, duration:4000})
.setTween(TweenMax.fromTo("#relict_button", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.on("enter", function (event) { setChildsDisplay('relict_button','block'); })
.on("leave", function (event) { setChildsDisplay('relict_button','none'); })
.addTo(controller);

//  Кластеры галактик

new ScrollMagic.Scene({ offset:8900, duration:4000})
.setTween(TweenMax.fromTo(".planet", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.addTo(controller);

new ScrollMagic.Scene({ offset:8900, duration:4000})
.setTween(TweenMax.fromTo("#planet_button", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.on("enter", function (event) { setChildsDisplay('planet_button','block'); })
.on("leave", function (event) { setChildsDisplay('planet_button','none'); })
.addTo(controller);

//  Вселенная сегодня

new ScrollMagic.Scene({ offset:11900, duration:4000})
.setTween(TweenMax.fromTo(".galaxy", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.addTo(controller);

new ScrollMagic.Scene({ offset:11900, duration:4000})
.setTween(TweenMax.fromTo("#galaxy_button", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.on("enter", function (event) { setChildsDisplay('galaxy_button','block'); })
.on("leave", function (event) { setChildsDisplay('galaxy_button','none'); })
.addTo(controller);



//  Вселенная сегодня

new ScrollMagic.Scene({ offset:15000, duration:5000})
.setTween(TweenMax.fromTo(".cloud", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.addTo(controller);

new ScrollMagic.Scene({ offset:15000, duration:5000})
.setTween(TweenMax.fromTo("#cloud_button", 1,  { scale: 1.0 }, { scale: 0.0, ease:Quad.easeOut}))
.on("enter", function (event) { setChildsDisplay('cloud_button','block'); })
.on("leave", function (event) { setChildsDisplay('cloud_button','none'); })
.addTo(controller);



// Анимация текста

var scene = new ScrollMagic.Scene({
  duration: 21000
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

        scene.addTo(controller);
