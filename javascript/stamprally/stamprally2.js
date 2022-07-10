if (navigator.cookieEnabled){

  document.cookie = 'name2=stamp2';
  console.log("stamp2を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
