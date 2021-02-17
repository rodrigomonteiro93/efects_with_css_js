//black friday
const black = document.querySelector('.black')
window.onmousemove = function (e){
    const x = e.clientX
    black.style.left = `${x}px`
}
window.onload = function (e){
    crateTextOpacity()
    setTimeout(closeLoading, 5000)
}

function closeLoading(){
    const loading = document.querySelector('#loading')
    const body = document.querySelector('body')
    loading.style.display = 'none'
    body.style.overflow = 'auto'
}
function crateTextOpacity(){
    const textOpacity = document.querySelector('#text-opacity p')
    let htmlTextOpacity = ''
    for (let i = 0;i < 15000; i++){
        htmlTextOpacity += '01'
    }
    textOpacity.innerHTML = htmlTextOpacity
}