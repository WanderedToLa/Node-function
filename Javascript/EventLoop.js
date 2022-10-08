function oneMore(){
    console.log('one more')
}
function run(){
    console.log('run')

    setTimeout(() => {
        console.log('setTimeout')
    } , 0)

    new Promise((res) => {
        res('hi')
    })
    .then(console.log)
    oneMore()
}
setTimeout(run , 5000)

//Promise의 then/catch 나 process.nexTick 은 setTimeout보다 태스크 큐에서의 우선순위가 높음