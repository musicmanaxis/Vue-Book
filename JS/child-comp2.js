export default{
    // 부모가(12-Porps.html에서) 넘겨준 데이터(임의의 이름->:msg='hello' name='마종호')를 받아온다.
  props:{ 
    msg:String,    //정의한 이름:데이터 타입
    name:String,
  },
  template:
    `<h1>{{msg}}, {{name}} </h1>   
    `
  //받아온 데이터를 이렇게 사용한다.
}