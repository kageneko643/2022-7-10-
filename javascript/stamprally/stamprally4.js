if (navigator.cookieEnabled){

  document.cookie = 'name4=stamp4';
  console.log("stamp4を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
