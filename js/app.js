const endDate = " 18 January 2024 05:50 PM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")



function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    
    if(diff < 0) return;
    console.log(diff);
    // convert into days:
    inputs[0].value = Math.floor(diff / 3600 /24);
    // console.log(Math.floor(diff / 3600) % 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //  console.log(Math.floor(diff / 60) % 60);
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60 ;
}

//initial call
clock()


// 1 day = 24 Her 
// 1 hr - 60 minus 
// 60 min = 3600 sec

setInterval(
    ()=>{
        clock()
    }, 1000
)