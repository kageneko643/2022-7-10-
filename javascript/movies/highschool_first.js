// I am GOD!
// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var iframeiti, ifreameni, ifreamsann, ifreamyonn, ifreamgo, ifreamroku, ifreamnana, ifreamhati, ifreamkyuu;
var $ = document.querySelector.bind(document);

// YouTubeの埋め込み
var ytiti;
var ytni;
var ytsann;
var ytyonn;
var ytgo;
var ytroku;
var ytnana;
var ythati;
var ytkyuu;
function onYouTubeIframeAPIReady() {

  // 1-1
  ytiti = new YT.Player(
    'itinoiti', // 埋め込む場所の指定
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
  // 1-2
  ytni = new YT.Player(
    'itinoni', // 埋め込む場所の指定
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
  // 1-3
  ytsann = new YT.Player(
    'itinosann', // 埋め込む場所の指定
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
  // 1-4
  ytyonn = new YT.Player(
    'itinoyonn', // 埋め込む場所の指定
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
  // 1-5
  ytgo = new YT.Player(
    'itinogo', // 埋め込む場所の指定
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
  // 1-6
  ytroku = new YT.Player(
    'itinoroku', // 埋め込む場所の指定
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
  // 1-7
  ytnana = new YT.Player(
    'itinonana', // 埋め込む場所の指定
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
  // 1-8
  ythati = new YT.Player(
    'itinohati', // 埋め込む場所の指定
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
  // 1-9,10
  ytkyuu = new YT.Player(
    'itinokyuu', // 埋め込む場所の指定
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

}

// 読み込み時
// 1-1 フルスクリーンボタン
function oniti(event) {
  var ytiti = event.target;
  iframeiti = $('#itinoiti');
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
// 1-2 フルスクリーンボタン
function onni(event) {
  var ytni = event.target;
  iframeni = $('#itinoni');
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
// 1-3 フルスクリーンボタン
function onsann(event) {
  var ytsann = event.target;
  iframesann = $('#itinosann');
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
// 1-4 フルスクリーンボタン
function onyonn(event) {
  var ytyonn = event.target;
  iframeyonn = $('#itinoyonn');
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
// 1-5 フルスクリーンボタン
function ongo(event) {
  var ytgo = event.target;
  iframego = $('#itinogo');
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
// 1-6 フルスクリーンボタン
function onroku(event) {
  var ytroku = event.target;
  iframeroku = $('#itinoroku');
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
// 1-7 フルスクリーンボタン
function onnana(event) {
  var ytnana = event.target;
  iframenana = $('#itinonana');
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
// 1-8 フルスクリーンボタン
function onhati(event) {
  var ythati = event.target;
  iframehati = $('#itinohati');
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
// 1-9,10 フルスクリーンボタン
function onkyuu(event) {
  var ytkyuu = event.target;
  iframekyuu = $('#itinokyuu');
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

// cookie書き込みエラー文
var nocookie = " あれれ...？　\n cookieが許可されてないからスタンプが記録できないみたいだよ! \n cookieを許可してからもういっかい試してね! ";

// 1-1プレーヤーの状態が変更されたとき
function iti(event) {
  // 現在のプレーヤーの状態を取得
  var ytsiti = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsiti == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){
      document.cookie = 'name1=stamp1';
      console.log("stamp1を記録");

    }else{
      alert(nocookie);
    }

    ytiti.playVideo();

  }
}

// 1-2プレーヤーの状態が変更されたとき
function ni(event) {
  // 現在のプレーヤーの状態を取得
  var ytsni = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsni == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name2=stamp2';
      console.log("stamp2を記録");

    }else{
      alert(nocookie);
    }

    ytni.playVideo();
  }
}

// 1-3プレーヤーの状態が変更されたとき
function sann(event) {
  // 現在のプレーヤーの状態を取得
  var ytssann = event.target.getPlayerState();
  // 再生終了したとき
  if (ytssann == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name3=stamp3';
      console.log("stamp3を記録");

    }else{
      alert(nocookie);
    }

    ytsann.playVideo();
  }
}

// 1-4プレーヤーの状態が変更されたとき
function yonn(event) {
  // 現在のプレーヤーの状態を取得
  var ytsyonn = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsyonn == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name4=stamp4';
      console.log("stamp4を記録");

    }else{
      alert(nocookie);
    }

    ytyonn.playVideo();
  }
}

// 1-5プレーヤーの状態が変更されたとき
function go(event) {
  // 現在のプレーヤーの状態を取得
  var ytsgo = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsgo == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name5=stamp5';
      console.log("stamp5を記録");

    }else{
      alert(nocookie);
    }

    ytgo.playVideo();
  }
}

// 1-6プレーヤーの状態が変更されたとき
function roku(event) {
  // 現在のプレーヤーの状態を取得
  var ytsroku = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsroku == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name6=stamp6';
      console.log("stamp6を記録");

    }else{
      alert(nocookie);
    }

    ytroku.playVideo();
  }
}

// 1-7プレーヤーの状態が変更されたとき
function nana(event) {
  // 現在のプレーヤーの状態を取得
  var ytsnana = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsnana == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name7=stamp7';
      console.log("stamp7を記録");

    }else{
      alert(nocookie);
    }

    ytnana.playVideo();
  }
}

// 1-8プレーヤーの状態が変更されたとき
function hati(event) {
  // 現在のプレーヤーの状態を取得
  var ytshati = event.target.getPlayerState();
  // 再生終了したとき
  if (ytshati == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name8=stamp8';
      console.log("stamp8を記録");

    }else{
      alert(nocookie);
    }

    ythati.playVideo();
  }
}

// 1-9,10プレーヤーの状態が変更されたとき
function kyuu(event) {
  // 現在のプレーヤーの状態を取得
  var ytskyuu = event.target.getPlayerState();
  // 再生終了したとき
  if (ytskyuu == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name9=stamp9';
      console.log("stamp9を記録");

    }else{
      alert(nocookie);
    }

    ytkyuu.playVideo();
  }
}
