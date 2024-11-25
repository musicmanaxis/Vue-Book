export default{
  props:{   // 구조1(props): 부모가 넘겨준 데이터를 이런식으로 정의하고 받아온다.
    msg:String,
    name:String,
  },
  // 구조2(template):부모 페이지에 들어갈 태그들
  template:` 
    <h1>{{msg}}, {{name}} </h1>   <br>
    <button @click='change'> Click Who? </button>
    `,
    //구조3(setup): emit을 이용한 자식컴포넌트에서 부모컴포넌트로 데이터 전달 
  setup(props, {emit}){
    function change(){
      emit('response', 'Tom')  //('이벤트', 이밴트에 걸린함수의 인자)
      //response -> 13-Emits.html에서 작성한 <child-comp @response="WhoAmI> 부분
    }  // emit('response', 'Tom')  -> 부모 컴포넌트 reponse이벤트에 걸린 WhoAmI함수에 인자로 'Tom' 데이터를 넘겨준다.
    return{
      change
    }
  }
}