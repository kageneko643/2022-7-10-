if (navigator.cookieEnabled){

  document.cookie = 'name32=stamp32';
  console.log("stamp32を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
