export default{
  props:{   //부모가 넘겨준 데이터를 이런식으로 정의하고 받아온다.
    msg:String,
    name:String,
  },
  template:
    `<h1>{{msg}}, {{name}} </h1>   
    `
  //받아온 데이터를 이렇게 사용한다.
}