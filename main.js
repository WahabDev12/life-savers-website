const option = document.getElementById("options");
const gaUneven = new Audio("/audio/uneven-ga.mp4");
const noparkHausa = new Audio("/audio/no-parking-hausa.mp4")

const changeLanguage = (selected) =>{
    var selected = option.value;
    if(selected === "Ga"){
        gaUneven.play()
    }
    if(selected === "Hausa"){
        noparkHausa.play()
    }
    
}

const playAudio = ()=>{
    if(selected === "Ga"){
        gaUneven.play()
    }
    if(selected === "Hausa"){
        noparkHausa.play()
    }
}