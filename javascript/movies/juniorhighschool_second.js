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

  // 中学2年生
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

}

// 読み込み時
// 中学2年生 フルスクリーンボタン
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

// cookie書き込みエラー文
var nocookie = " あれれ...？　\n cookieが許可されてないからスタンプが記録できないみたいだよ! \n cookieを許可してからもういっかい試してね! ";

// 中学2年生プレーヤーの状態が変更されたとき
function iti(event) {
  // 現在のプレーヤーの状態を取得
  var ytsiti = event.target.getPlayerState();
  // 再生終了したとき
  if (ytsiti == YT.PlayerState.ENDED) {
    if (navigator.cookieEnabled){
      document.cookie = 'name32=stamp32';
      console.log("stamp32を記録");

    }else{
      alert(nocookie);
    }

    ytiti.playVideo();

  }
}
