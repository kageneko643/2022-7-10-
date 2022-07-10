if (navigator.cookieEnabled){

  document.cookie = 'name10=stamp10';
  console.log("stamp10を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
