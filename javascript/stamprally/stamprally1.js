

if (navigator.cookieEnabled){
  document.cookie = 'name1=stamp1';
  console.log("stamp1を記録");

}else{
  alert(" あれれ...？　\n cookieが許可されてないみたいだよ! \n cookieを許可してからもういっかい試してね! ");
}
