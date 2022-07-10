if (navigator.cookieEnabled){

  document.cookie = 'name11=stamp11';
  console.log("stamp11を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
