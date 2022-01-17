const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const productName = document.querySelectorAll('.product-name')


search.addEventListener('keyup', () => {

    let lowSearch = search.value.toUpperCase()
    productName.forEach(el => {
        if(lowSearch[0] != undefined) {
            if (lowSearch[0] != el.innerText[0]) {
                el.classList.remove('visible')
            } else {
                el.classList.add('visible')
            }
        }
        if(lowSearch[0] == undefined) {
            el.classList.add('visible')
        }
    })
})
