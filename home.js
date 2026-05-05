var winWidth = window.innerWidth;
const sLayer = document.querySelector('.snowLayer');
function snowStorm(){
    
    for(var i = 0; i < 100;i++){
        const rand = Math.floor(Math.random() *11)
        if(rand > 2){
            spawnSnow();
        }
    }
}
function spawnSnow(){
const img = document.createElement("img");
img.src = "/assets/snow.png";
img.className = "snow";
const WH = randomWH();
img.style.width = WH + "px";
img.style.height = WH + "px";
const randomLeft = startRandom();
img.style.left = randomLeft + "px";
sLayer.appendChild(img);
document.documentElement.style.setProperty(
    "--snow-travel",
    `${document.documentElement.scrollHeight - 40}px`
);
}

function randomWH(){
    const num = Math.floor(Math.random() *11 + 5);
    return num;
}
function startRandom(){
    const area = Math.floor(Math.random() * (winWidth - 50));
    return area;
}
setInterval(spawnSnow, 200);










