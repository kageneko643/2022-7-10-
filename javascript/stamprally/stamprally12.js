if (navigator.cookieEnabled){

  document.cookie = 'name12=stamp12';
  console.log("stamp12を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
