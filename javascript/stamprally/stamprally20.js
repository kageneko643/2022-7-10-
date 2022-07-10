if (navigator.cookieEnabled){

  document.cookie = 'name20=stamp20';
  console.log("stamp20を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
