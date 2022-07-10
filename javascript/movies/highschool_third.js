// I am GOD!
// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var iframeiti, ifreameni, ifreamsann, ifreamyonn, ifreamgo, ifreamgosabu, ifreamroku, ifreamnana, ifreamhati, ifreamkyuu, ifreamzyuu, ifreamzyuuiti;
var $ = document.querySelector.bind(document);

// YouTubeの埋め込み
var ytiti;
var ytni;
var ytsann;
var ytyonn;
var ytgo;
var ytgosabu;
var ytroku;
var ytnana;
var ythati;
var ytkyuu;
var ytzyuu;
var ytzyuuiti;
function onYouTubeIframeAPIReady() {

  // 3-1
  ytiti = new YT.Player(
    'sannnoiti', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'xLOzM8wtdcw', // YouTubeのID
      playerVars: {
        modestbranding:1,
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': oniti,
        'onStateChange': iti
      }
    }
  );
  // 3-2
  ytni = new YT.Player(
    'sannnoni', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'HLJG8-Cxzro', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': onni,
        'onStateChange': ni
      }
    }
  );
  // 3-3
  ytsann = new YT.Player(
    'sannnosann', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'HLJG8-Cxzro', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': onsann,
        'onStateChange': sann
      }
    }
  );
  // 3-4
  ytyonn = new YT.Player(
    'sannnoyonn', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'iFGP_mjiP9Q', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': onyonn,
        'onStateChange': yonn
      }
    }
  );
  // 3-5
  ytgo = new YT.Player(
    'sannnogo', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: '-COrYwE9MG4', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': ongo,
        'onStateChange': go
      }
    }
  );
  // 3-5(有志)
  ytgosabu = new YT.Player(
    'sannnogosabu', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: '-COrYwE9MG4', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': ongosabu,
        'onStateChange': gosabu
      }
    }
  );
  // 3-6
  ytroku = new YT.Player(
    'sannnoroku', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'wBJBhWUlrPk', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': onroku,
        'onStateChange': roku
      }
    }
  );
  // 3-7
  ytnana = new YT.Player(
    'sannnonana', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'wBJBhWUlrPk', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': onnana,
        'onStateChange': nana
      }
    }
  );
  // 3-8
  ythati = new YT.Player(
    'sannnohati', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'wBJBhWUlrPk', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': onhati,
        'onStateChange': hati
      }
    }
  );
  // 3-9
  ytkyuu = new YT.Player(
    'sannnokyuu', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'wBJBhWUlrPk', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': onkyuu,
        'onStateChange': kyuu
      }
    }
  );
  // 3-10
  ytzyuu = new YT.Player(
    'sannnozyuu', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'wBJBhWUlrPk', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': zyuu,
        'onStateChange': zyuu
      }
    }
  );
  // 3-11
  ytzyuuiti = new YT.Player(
    'sannnozyuuiti', // 埋め込む場所の指定
    {
      width: 640, // プレーヤーの幅
      height: 480, // プレーヤーの高さ
      videoId: 'wBJBhWUlrPk', // YouTubeのID
      playerVars: {
        rel: 0,
        controls: 0
      },
      events: {
        'onReady': onzyuuiti,
        'onStateChange': zyuuiti
      }
    }
  );

}

// 読み込み時
// 3-1 フルスクリーンボタン
function oniti(event) {
  var ytiti = event.target;
  iframeiti = $('#sannnoiti');
  setupListeneriti();
}

function setupListeneriti (){
$('#ytfsiiti').addEventListener('click', playFullscreeniti);
}

function playFullscreeniti (){
  ytiti.playVideo();
  var requestFullScreeniti = iframeiti.requestFullScreen || iframeiti.mozRequestFullScreen || iframeiti.webkitRequestFullScreen;
  if (requestFullScreeniti) {
    requestFullScreeniti.bind(iframeiti)();
  }
}
// 3-2 フルスクリーンボタン
function onni(event) {
  var ytni = event.target;
  iframeni = $('#sannnoni');
  setupListenerni();
}

function setupListenerni (){
$('#ytfsini').addEventListener('click', playFullscreenni);
}

function playFullscreenni (){
  ytni.playVideo();
  var requestFullScreenni = iframeni.requestFullScreen || iframeni.mozRequestFullScreen || iframeni.webkitRequestFullScreen;
  if (requestFullScreenni) {
    requestFullScreenni.bind(iframeni)();
  }
}
// 3-3 フルスクリーンボタン
function onsann(event) {
  var ytsann = event.target;
  iframesann = $('#sannnosann');
  setupListenersann();
}

function setupListenersann (){
$('#ytfsisann').addEventListener('click', playFullscreensann);
}

function playFullscreensann (){
  ytsann.playVideo();
  var requestFullScreensann = iframesann.requestFullScreen || iframesann.mozRequestFullScreen || iframesann.webkitRequestFullScreen;
  if (requestFullScreensann) {
    requestFullScreensann.bind(iframesann)();
  }
}
// 3-4 フルスクリーンボタン
function onyonn(event) {
  var ytyonn = event.target;
  iframeyonn = $('#sannnoyonn');
  setupListeneryonn();
}

function setupListeneryonn (){
$('#ytfsiyonn').addEventListener('click', playFullscreenyonn);
}

function playFullscreenyonn (){
  ytyonn.playVideo();
  var requestFullScreenyonn = iframeyonn.requestFullScreen || iframeyonn.mozRequestFullScreen || iframeyonn.webkitRequestFullScreen;
  if (requestFullScreenyonn) {
    requestFullScreenyonn.bind(iframeyonn)();
  }
}
// 3-5 フルスクリーンボタン
function ongo(event) {
  var ytgo = event.target;
  iframego = $('#sannnogo');
  setupListenergo();
}

function setupListenergo (){
$('#ytfsigo').addEventListener('click', playFullscreengo);
}

function playFullscreengo (){
  ytgo.playVideo();
  var requestFullScreengo = iframego.requestFullScreen || iframego.mozRequestFullScreen || iframego.webkitRequestFullScreen;
  if (requestFullScreengo) {
    requestFullScreengo.bind(iframego)();
  }
}
// 3-5(有志) フルスクリーンボタン
function ongosabu(event) {
  var ytgosabu = event.target;
  iframegosabu = $('#sannnogosabu');
  setupListenergosabu();
}

function setupListenergosabu (){
$('#ytfsigosabu').addEventListener('click', playFullscreengosabu);
}

function playFullscreengosabu (){
  ytgosabu.playVideo();
  var requestFullScreengosabu = iframegosabu.requestFullScreen || iframegosabu.mozRequestFullScreen || iframegosabu.webkitRequestFullScreen;
  if (requestFullScreengosabu) {
    requestFullScreengosabu.bind(iframegosabu)();
  }
}
// 3-6 フルスクリーンボタン
function onroku(event) {
  var ytroku = event.target;
  iframeroku = $('#sannnoroku');
  setupListenerroku();
}

function setupListenerroku (){
$('#ytfsiroku').addEventListener('click', playFullscreenroku);
}

function playFullscreenroku (){
  ytroku.playVideo();
  var requestFullScreenroku = iframeroku.requestFullScreen || iframeroku.mozRequestFullScreen || iframeroku.webkitRequestFullScreen;
  if (requestFullScreenroku) {
    requestFullScreenroku.bind(iframeroku)();
  }
}
// 3-7 フルスクリーンボタン
function onnana(event) {
  var ytnana = event.target;
  iframenana = $('#sannnonana');
  setupListenernana();
}

function setupListenernana (){
$('#ytfsinana').addEventListener('click', playFullscreennana);
}

function playFullscreenronana (){
  ytnana.playVideo();
  var requestFullScreennana = iframenana.requestFullScreen || iframenana.mozRequestFullScreen || iframenana.webkitRequestFullScreen;
  if (requestFullScreennana) {
    requestFullScreennana.bind(iframenana)();
  }
}
// 3-8 フルスクリーンボタン
function onhati(event) {
  var ythati = event.target;
  iframehati = $('#sannnohati');
  setupListenerhati();
}

function setupListenerhati (){
$('#ytfsihati').addEventListener('click', playFullscreenhati);
}

function playFullscreenhati (){
  ythati.playVideo();
  var requestFullScreenhati = iframehati.requestFullScreen || iframehati.mozRequestFullScreen || iframehati.webkitRequestFullScreen;
  if (requestFullScreenhati) {
    requestFullScreenhati.bind(iframehati)();
  }
}
// 3-9 フルスクリーンボタン
function onkyuu(event) {
  var ytkyuu = event.target;
  iframekyuu = $('#sannnokyuu');
  setupListenerkyuu();
}

function setupListenerkyuu (){
$('#ytfsikyuu').addEventListener('click', playFullscreenkyuu);
}

function playFullscreenkyuu (){
  ytkyuu.playVideo();
  var requestFullScreenkyuu = iframekyuu.requestFullScreen || iframekyuu.mozRequestFullScreen || iframekyuu.webkitRequestFullScreen;
  if (requestFullScreenkyuu) {
    requestFullScreenkyuu.bind(iframekyuu)();
  }
}
// 3-10 フルスクリーンボタン
function onzyuu(event) {
  var ytzyuu = event.target;
  iframezyuu = $('#sannnozyuu');
  setupListenerzyuu();
}

function setupListenerzyuu (){
$('#ytfsizyuu').addEventListener('click', playFullscreenzyuu);
}

function playFullscreenzyuu (){
  ytzyuu.playVideo();
  var requestFullScreenzyuu = iframezyuu.requestFullScreen || iframezyuu.mozRequestFullScreen || iframezyuu.webkitRequestFullScreen;
  if (requestFullScreenzyuu) {
    requestFullScreenzyuu.bind(iframezyuu)();
  }
}
// 3-11 フルスクリーンボタン
function onzyuuiti(event) {
  var ytzyuuiti = event.target;
  iframezyuuiti = $('#sannnozyuuiti');
  setupListenerzyuuiti();
}

function setupListenerzyuuiti (){
$('#ytfsizyuuiti').addEventListener('click', playFullscreenzyuuiti);
}

function playFullscreenzyuuiti (){
  ytzyuuiti.playVideo();
  var requestFullScreenzyuuiti = iframezyuuiti.requestFullScreen || iframezyuuiti.mozRequestFullScreen || iframezyuuiti.webkitRequestFullScreen;
  if (requestFullScreenzyuuiti) {
    requestFullScreenzyuuiti.bind(iframezyuuiti)();
  }
}

// cookie書き込みエラー文
var nocookie = " あれれ...？　\n cookieが許可されてないからスタンプが記録できないみたいだよ! \n cookieを許可してからもういっかい試してね! ";

// 3-1プレーヤーの状態が変更されたとき
function iti(event) {
  // 現在のプレーヤーの状態を取得
  var ytsiti = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsiti == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){
      document.cookie = 'name18=stamp18';
      console.log("stamp18を記録");

    }else{
      alert(nocookie);
    }

    ytiti.playVideo();

  }
}

// 3-2プレーヤーの状態が変更されたとき
function ni(event) {
  // 現在のプレーヤーの状態を取得
  var ytsni = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsni == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name19=stamp19';
      console.log("stamp19を記録");

    }else{
      alert(nocookie);
    }

    ytni.playVideo();
  }
}

// 3-3プレーヤーの状態が変更されたとき
function sann(event) {
  // 現在のプレーヤーの状態を取得
  var ytssann = event.target.getPlayerState();
  // 再生終了したとき
  if (ytssann == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name20=stamp20';
      console.log("stamp20を記録");

    }else{
      alert(nocookie);
    }

    ytsann.playVideo();
  }
}

// 3-4プレーヤーの状態が変更されたとき
function yonn(event) {
  // 現在のプレーヤーの状態を取得
  var ytsyonn = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsyonn == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name21=stamp21';
      console.log("stamp21を記録");

    }else{
      alert(nocookie);
    }

    ytyonn.playVideo();
  }
}

// 3-5プレーヤーの状態が変更されたとき
function go(event) {
  // 現在のプレーヤーの状態を取得
  var ytsgo = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsgo == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name22=stamp22';
      console.log("stamp22を記録");

    }else{
      alert(nocookie);
    }

    ytgo.playVideo();
  }
}

// 3-5(有志)プレーヤーの状態が変更されたとき
function gosabu(event) {
  // 現在のプレーヤーの状態を取得
  var ytsgosabu = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsgosabu == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name22=stamp22';
      console.log("stamp22を記録");

    }else{
      alert(nocookie);
    }

    ytgosabu.playVideo();
  }
}

// 3-6プレーヤーの状態が変更されたとき
function roku(event) {
  // 現在のプレーヤーの状態を取得
  var ytsroku = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsroku == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name23=stamp23';
      console.log("stamp23を記録");

    }else{
      alert(nocookie);
    }

    ytroku.playVideo();
  }
}

// 3-7プレーヤーの状態が変更されたとき
function nana(event) {
  // 現在のプレーヤーの状態を取得
  var ytsnana = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsnana == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name24=stamp24';
      console.log("stamp24を記録");

    }else{
      alert(nocookie);
    }

    ytnana.playVideo();
  }
}

// 3-8プレーヤーの状態が変更されたとき
function hati(event) {
  // 現在のプレーヤーの状態を取得
  var ytshati = event.target.getPlayerState();
  // 再生終了したとき
  if (ytshati == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name25=stamp25';
      console.log("stamp25を記録");

    }else{
      alert(nocookie);
    }

    ythati.playVideo();
  }
}

// 3-9プレーヤーの状態が変更されたとき
function kyuu(event) {
  // 現在のプレーヤーの状態を取得
  var ytskyuu = event.target.getPlayerState();
  // 再生終了したとき
  if (ytskyuu == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name26=stamp26';
      console.log("stamp26を記録");

    }else{
      alert(nocookie);
    }

    ytkyuu.playVideo();
  }
}

// 3-10プレーヤーの状態が変更されたとき
function zyuu(event) {
  // 現在のプレーヤーの状態を取得
  var ytszyuu = event.target.getPlayerState();
  // 再生終了したとき
  if (ytszyuu == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name27=stamp27';
      console.log("stamp27を記録");

    }else{
      alert(nocookie);
    }

    ytzyuu.playVideo();
  }
}

// 3-11プレーヤーの状態が変更されたとき
function zyuuiti(event) {
  // 現在のプレーヤーの状態を取得
  var ytszyuuiti = event.target.getPlayerState();
  // 再生終了したとき
  if (ytszyuuiti == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name28=stamp28';
      console.log("stamp28を記録");

    }else{
      alert(nocookie);
    }

    ytzyuuiti.playVideo();
  }
}
