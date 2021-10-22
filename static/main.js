// SOUNDS OF SIGNS
const option = document.getElementById("options");
const gaUneven = new Audio("/static/audio/uneven-ga.mp4");
const noparkHausa = new Audio("/static/audio/no-parking-hausa.mp4");
const hausaUneven = new Audio("/static/audio/uneven-hausa.mp4");
const noparkGa = new Audio("/static/audio/nopark-ga.mp4");
const humpGa = new Audio("/static/audio/hump-road-ga.mp4");
const humpHausa = new Audio("/static/audio/hump-hausa.mp4");
const stopHausa = new Audio("/static/audio/no-stop-hausa.mp4");
const stopGa = new Audio("/static/audio/no-stop-ga.mp4");
const looseGa = new Audio("/static/audio/loose-ga.mp4");
const looseHausa = new Audio("/static/audio/loose-gravel-hausa.mp4");
const roadWorkHausa = new Audio("/static/audio/road-work-hausa.mp4");
const roadWorkGa = new Audio("/static/audio/road-work-ga.ogg");
const unevenTwi = new Audio("/static/audio/uneven-twi.ogg");
const noParkTwi = new Audio("/static/audio/no-park-twi.ogg");
const humpTwi = new Audio("/static/audio/hump-twi.ogg");
const noStopTwi = new Audio("/static/audio/no-stopping-twi.ogg");
const looseTwi = new Audio("/static/audio/loose-gravels-twi.ogg");


// UNEVEN ROAD
const changeLanguage = (selected) =>{
    var selected = option.value; 
    
    if(selected === "Ga"){
        gaUneven.play()
    }
    else if(selected === "Hausa"){
        hausaUneven.play()
    }
    else if(selected === "Twi"){
        unevenTwi.play()
    }
    else if(selected === "Select your language"){
        alert("Please select a language 🙏🏼")
    }
    
}

// NO PARKING

const changeLanguage_2 = (selected) => {
   var selected = option.value;
    if(selected === "Ga"){
        noparkGa.play()
    }
    if(selected === "Hausa"){
        noparkHausa.play()
    } 
    else if(selected === "Twi"){
        noParkTwi.play()
    }
    else if(selected === "Select your language"){
        alert("Please select a language 🙏🏼")
    }  
}


// HUMP ROAD
const changeLanguage_3 = (selected)=>{
    var selected = option.value;
    if(selected === "Ga"){
        humpGa.play()
    }
    if(selected === "Hausa"){
        humpHausa.play()
    } 
    else if(selected === "Twi"){
        humpTwi.play();
    }
    else if(selected === "Select your language"){
        alert("Please select a language 🙏🏼")
    }   
}

// NO STOPPING
const changeLanguage_4 = (selected)=>{
    var selected = option.value;
    if(selected === "Ga"){
        stopGa.play()
    }
    if(selected === "Hausa"){
        stopHausa.play()
    }
    else if(selected === "Twi"){
        noStopTwi.play()
    }
    else if(selected === "Select your language"){
        alert("Please select a language 🙏🏼")
    }    
}


// LOOSE GRAVELS
const changeLanguage_5 = (selected)=>{
    var selected = option.value;
    if(selected === "Ga"){
        looseGa.play()
    }
    if(selected === "Hausa"){
        looseHausa.play()
    }  
    else if(selected === "Twi"){
        looseTwi.play()
    } 
    else if(selected === "Select your language"){
        alert("Please select a language 🙏🏼")
    } 
}

const changeLanguage_6 = (selected)=>{
    var selected = option.value;
    if(selected === "Ga"){
        roadWorkGa.play()
    }
    if(selected === "Hausa"){
        roadWorkHausa.play()
    }   
    else if(selected === "Select your language"){
        alert("Please select a language 🙏🏼")
    }    
}













// const playAudio = ()=>{
//     if(selected === "Ga"){
//         gaUneven.play()
//     }
//     if(selected === "Hausa"){
//         noparkHausa.play()
//     }
// }