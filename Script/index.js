const height = document.querySelector(".monitor__height")
const waist = document.querySelector(".monitor__waist")
const whtrElement = document.querySelector(".monitor__whtr")

let valueHight , valueWaist;

height.addEventListener("change" , (e)  => {
    valueHight = e.target.value
})

const whtr = (waist , height) => {
    const res = (waist / height)
    return res.toFixed(2)
}

const showWhtr = ()=>{
    if(valueWaist && valueHight){
        whtrElement.innerHTML = whtr(valueWaist , valueHight)
    }else{
        whtrElement.innerHTML = '0.00'
    }
}

waist.addEventListener("input" , (e)  => {
    valueWaist = e.target.value
    showWhtr()

})









