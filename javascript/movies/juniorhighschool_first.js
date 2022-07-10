// I am GOD!
// IFrame Player API の読み込み
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var iframeiti, ifreameni, ifreamsann;
var $ = document.querySelector.bind(document);

// YouTubeの埋め込み
var ytiti;
var ytni;
var ytsann;
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
  // 中学1年生
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
// 中学1年生 フルスクリーンボタン
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

// cookie書き込みエラー文
var nocookie = " あれれ...？　\n cookieが許可されてないからスタンプが記録できないみたいだよ! \n cookieを許可してからもういっかい試してね! ";

// 1-1プレーヤーの状態が変更されたとき
function iti(event) {
  // 現在のプレーヤーの状態を取得
  var ytsiti = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsiti == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){
      document.cookie = 'name29=stamp29';
      console.log("stamp29を記録");

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

      document.cookie = 'name30=stamp30';
      console.log("stamp30を記録");

    }else{
      alert(nocookie);
    }

    ytni.playVideo();
  }
}

// 中学1年生プレーヤーの状態が変更されたとき
function sann(event) {
  // 現在のプレーヤーの状態を取得
  var ytssann = event.target.getPlayerState();
  // 再生終了したとき
  if (ytssann == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){

      document.cookie = 'name31=stamp31';
      console.log("stamp31を記録");

    }else{
      alert(nocookie);
    }

    ytsann.playVideo();
  }
}
