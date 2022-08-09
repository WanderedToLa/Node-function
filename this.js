console.log(this); // global?
console.log(this === module.exports);
// 노드의 전역 this는 빈 객체를 가르킴

function a() {
    console.log(this === global);
}
a();