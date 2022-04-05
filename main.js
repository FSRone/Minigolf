let level = {
    "Level 1" : {
        "Loch" : {
            "x" : "50%",
            "y" : "25%"
        },
        "Ball" : {
            "x" : "0px",
            "y" : "0px"
        }
    }
}



function geschlagen(vxi, vyi){
    return new Promise(function(res, rej){
        let 
        b = document.querySelector('.ball'),
        vx = vxi / 30, 
        vy = vyi / 30,
        r = b.offsetWidth / 2,
        x = parseInt(b.style.left.slice(0, -2)),
        y = parseInt(b.style.top.slice(0, -2)),
        s = document.querySelector('.spielfeld'),
        sx = s.offsetWidth,
        sy = s.offsetHeight,
        h = document.querySelector('.loch'),
        hr = h.offsetWidth / 2,
        hx = parseInt(window.getComputedStyle(h,null).getPropertyValue("left").slice(0, -2)),
        hy = parseInt(window.getComputedStyle(h,null).getPropertyValue("top").slice(0, -2))

        let schlag = setInterval(function(){
            if(Math.abs(vx) > 0.1 && Math.abs(vy) > 0.1){
                if(x + vx > sx - r * 2 || x + vx < r){
                    vx *= -1
                }
                if(y + vy > sy - r * 2 || y + vy < r){
                    vy *= -1
                }
                if(x > hx && x < hx + hr && y > hy && y < hy + hr){
                    clearInterval(schlag)
                    res("Loch")
                }
                x += vx
                y += vy
                b.style.left = x + "px"
                b.style.top = y + "px"
                vx *= 0.98
                vy *= 0.98
            }else{
                clearInterval(schlag);
                res("Vorbei")
            }
        },33)
    })
}

function schlag(e){
    e.setAttribute("onclick", "")
    geschlagen(130,130)
    .then(function(res){
        e.setAttribute("onclick", "schlag(this)")
        console.log(res)
    })
}

