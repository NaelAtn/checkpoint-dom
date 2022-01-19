console.log("hello")
// declaration 
var counter = Array.from(document.querySelectorAll(".counter"));
var counterprice = Array.from(document.querySelectorAll(".counter2"));
var plus = Array.from(document.querySelectorAll(".incr"));
var moin = Array.from(document.querySelectorAll(".decr"));
var total = Array.from(document.querySelectorAll(".totalprice"));



for (let nn of plus){
    nn.addEventListener("click", function(){  
        var count = 0
        console.log(count)
    count++
    counter.innerHTML = count


})
}

