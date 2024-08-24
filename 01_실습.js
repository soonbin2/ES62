// 상품명과 색상, 가격을 프로퍼티를 가지는 객체
let shirt = {
    productName: "캐주얼 셔츠",
    color: "파란색",
    price: 25000
};

// 구조 분해 할당을 이용해 변수에 값을 할당합니다.
let { productName, color, price } = shirt;

console.log(productName); // 출력: ?
console.log(color); // 출력: ?
console.log(price); // 출력: ?

// 변수의 이름을 바꿔서 구조 분해 할당을 다시 합니다.
let { color: shirtColor, price: shirtPrice, productName: shirtName } = shirt;

console.log(shirtName); // 출력: ?
console.log(shirtPrice); // 출력: ?
console.log(shirtColor); // 출력: ?

// 문제 1) 아래의 코드에서 shirt 객체의 프로퍼티 중 price만 추출하여 itemPrice라는 변수에 할당하고, 나머지 프로퍼티를 별도의 변수에 할당하는 구조 분해 할당을 작성하십시오.

// let { price: itemPrice, ...otherProps } = shirt;
// console.log(itemPrice); // 출력: ?
// console.log(otherProps); // 출력: ?

let { price: itemPrice, ...otherProps } = shirt;
console.log(itemPrice); // 출력: 25000
console.log(otherProps); // 출력: { productName: '캐주얼 셔츠', color: '파란색' }

// shirt 객체에서 price를 itemPrice라는 변수에 할당하고 나머지 프로퍼티를 otherProps라는 객체에 할당하려면 다음과 같이 구조 분해 할당을 작성할 수 있습니다:
// itemPrice는 price 프로퍼티의 값, 즉 25000이 되고, otherProps는 나머지 프로퍼티들로 구성된 객체입니다.