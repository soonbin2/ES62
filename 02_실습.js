function displayProduct({ producer = "아무개", width = 10, height = 20, items = [] }) {
    console.log(`${producer} ${width} ${height}`);
    console.log(`items : ${items}`);
}



displayProduct(exampleProduct);

//만약 exampleProduct 객체에 width와 height 속성이 추가되면, displayProduct 함수는 어떻게 동작할까요? 예를 들어, exampleProduct 객체에 width를 15, height를 25로 설정한 경우 결과를 예시로 보여주세요.
let exampleProduct = {
    items: ["Coffee", "Donut"],
    producer: "신사임당",
    width: 15,
    height: 25
};
//exampleProduct 객체에 width와 height 속성을 추가하면, 함수는 전달된 값으로 이 속성들을 사용합니다. 예를 들어, exampleProduct 객체를 다음과 같이 수정한 경우:
//displayProduct(exampleProduct)를 호출하면 출력 결과는 다음과 같습니다:
// 신사임당 15 25
// items : Coffee,Donut

