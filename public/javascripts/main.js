const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const productName = document.querySelectorAll('.product-name')


search.addEventListener('keyup', () => {

    productName.forEach(el => {
        if(search.value[0] != undefined) {
            if (search.value[0] != el.innerText[0]) {
                el.classList.remove('visible')
            } else {
                el.classList.add('visible')
            }
        }
        if(search.value[0] == undefined) {
            el.classList.add('visible')
        }
    })
})

