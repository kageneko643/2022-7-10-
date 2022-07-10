if (navigator.cookieEnabled){

  document.cookie = 'name3=stamp3';
  console.log("stamp3を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
