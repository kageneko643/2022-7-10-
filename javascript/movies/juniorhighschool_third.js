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

// cookie書き込みエラー文
var nocookie = " あれれ...？　\n cookieが許可されてないからスタンプが記録できないみたいだよ! \n cookieを許可してからもういっかい試してね! ";

// 3-1プレーヤーの状態が変更されたとき
function iti(event) {
  // 現在のプレーヤーの状態を取得
  var ytsiti = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsiti == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){
      document.cookie = 'name33=stamp33';
      console.log("stamp33を記録");

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

      document.cookie = 'name34=stamp34';
      console.log("stamp34を記録");

    }else{
      alert(nocookie);
    }

    ytni.playVideo();
  }
}
