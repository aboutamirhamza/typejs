// Type js code start here
let typejs = document.querySelectorAll(".typejs");
let typejsConvert = Array.from(typejs);

typejsConvert.map((type)=>{
    let count = 0;
    let wordDivide = type.innerHTML.split("");
    let typed = ()=>{
        if (count == type.dataset.text.length) {
            wordDivide.pop();
            type.innerHTML = wordDivide.join("");
            if (wordDivide.length == 0) {
                type.innerHTML += type.dataset.text.charAt(count);
                count = 0;
            }
        }else{
            type.innerHTML += type.dataset.text.charAt(count);
            wordDivide = type.innerHTML.split("");
            count++;
        }
    }
    let typecount = setInterval(() => {
        typed();
    }, type.dataset.time);
})
// Type js code end here