if (navigator.cookieEnabled){

  document.cookie = 'name5=stamp5';
  console.log("stamp5を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
