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
function onYouTubeIframeAPIReady() {

  // 2-1
  ytiti = new YT.Player(
    'ninoiti', // 埋め込む場所の指定
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
  // 2-2
  ytni = new YT.Player(
    'ninoni', // 埋め込む場所の指定
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
  // 2-3
  ytsann = new YT.Player(
    'ninosann', // 埋め込む場所の指定
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
  // 2-4
  ytyonn = new YT.Player(
    'ninoyonn', // 埋め込む場所の指定
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
  // 2-5
  ytgo = new YT.Player(
    'ninogo', // 埋め込む場所の指定
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
  // 2-6
  ytroku = new YT.Player(
    'ninoroku', // 埋め込む場所の指定
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
  // 2-7
  ytnana = new YT.Player(
    'ninonana', // 埋め込む場所の指定
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
  // 2-8,9
  ythati = new YT.Player(
    'ninohati', // 埋め込む場所の指定
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

}

// 読み込み時
// 2-1 フルスクリーンボタン
function oniti(event) {
  var ytiti = event.target;
  iframeiti = $('#ninoiti');
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
// 2-2 フルスクリーンボタン
function onni(event) {
  var ytni = event.target;
  iframeni = $('#ninoni');
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
// 2-3 フルスクリーンボタン
function onsann(event) {
  var ytsann = event.target;
  iframesann = $('#ninosann');
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
// 2-4 フルスクリーンボタン
function onyonn(event) {
  var ytyonn = event.target;
  iframeyonn = $('#ninoyonn');
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
// 2-5 フルスクリーンボタン
function ongo(event) {
  var ytgo = event.target;
  iframego = $('#ninogo');
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
// 2-6 フルスクリーンボタン
function onroku(event) {
  var ytroku = event.target;
  iframeroku = $('#ninoroku');
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
// 2-7 フルスクリーンボタン
function onnana(event) {
  var ytnana = event.target;
  iframenana = $('#ninonana');
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
// 2-8,9 フルスクリーンボタン
function onhati(event) {
  var ythati = event.target;
  iframehati = $('#ninohati');
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

// cookie書き込みエラー文
var nocookie = " あれれ...？　\n cookieが許可されてないからスタンプが記録できないみたいだよ! \n cookieを許可してからもういっかい試してね! ";

// 2-1プレーヤーの状態が変更されたとき
function iti(event) {
  // 現在のプレーヤーの状態を取得
  var ytsiti = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsiti == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){
      document.cookie = 'name10=stamp10';
      console.log("stamp10を記録");

    }else{
      alert(nocookie);
    }

    ytiti.playVideo();

  }
}

// 2-2プレーヤーの状態が変更されたとき
function ni(event) {
  // 現在のプレーヤーの状態を取得
  var ytsni = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsni == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name11=stamp11';
      console.log("stamp11を記録");

    }else{
      alert(nocookie);
    }

    ytni.playVideo();
  }
}

// 2-3プレーヤーの状態が変更されたとき
function sann(event) {
  // 現在のプレーヤーの状態を取得
  var ytssann = event.target.getPlayerState();
  // 再生終了したとき
  if (ytssann == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name12=stamp12';
      console.log("stamp12を記録");

    }else{
      alert(nocookie);
    }

    ytsann.playVideo();
  }
}

// 2-4プレーヤーの状態が変更されたとき
function yonn(event) {
  // 現在のプレーヤーの状態を取得
  var ytsyonn = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsyonn == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name13=stamp13';
      console.log("stamp13を記録");

    }else{
      alert(nocookie);
    }

    ytyonn.playVideo();
  }
}

// 2-5プレーヤーの状態が変更されたとき
function go(event) {
  // 現在のプレーヤーの状態を取得
  var ytsgo = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsgo == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name14=stamp14';
      console.log("stamp14を記録");

    }else{
      alert(nocookie);
    }

    ytgo.playVideo();
  }
}

// 2-6プレーヤーの状態が変更されたとき
function roku(event) {
  // 現在のプレーヤーの状態を取得
  var ytsroku = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsroku == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name15=stamp15';
      console.log("stamp15を記録");

    }else{
      alert(nocookie);
    }

    ytroku.playVideo();
  }
}

// 2-7プレーヤーの状態が変更されたとき
function nana(event) {
  // 現在のプレーヤーの状態を取得
  var ytsnana = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsnana == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name16=stamp16';
      console.log("stamp16を記録");

    }else{
      alert(nocookie);
    }

    ytnana.playVideo();
  }
}

// 2-8,9プレーヤーの状態が変更されたとき
function hati(event) {
  // 現在のプレーヤーの状態を取得
  var ytshati = event.target.getPlayerState();
  // 再生終了したとき
  if (ytshati == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name17=stamp17';
      console.log("stamp17を記録");

    }else{
      alert(nocookie);
    }

    ythati.playVideo();
  }
}
