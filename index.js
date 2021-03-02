const fs = require('fs')
const path = require('path')
const { createCanvas, loadImage, registerFont } = require("canvas")
const Font1 = registerFont(path.join(__dirname, '.', '/', 'assets', 'fonts', 'oldengl.ttf'), { family: 'oldengl' });
const Font2 = registerFont(path.join(__dirname, '.', '/', 'assets', 'fonts', 'Pinky Cupid.otf'), { family: 'Pinky Cupid' });

async function Welcomer(){
    const canvas = createCanvas(480, 200)
    const ctx = canvas.getContext("2d")
    const background = await loadImage("./assets/images/Discord-WELCOME-AICON.png")
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#eb62d5"; // Inline Image Border
    ctx.lineWidth = 10; 
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    let size1 = 25;
    let size2 = 25;

    const name = `User#1000`;
    do {
        ctx.font = `${size1 -= 5}px oldengl`;
        ctx.fillStyle = "#dd0d54"; // Font Colour
    } while (ctx.measureText(name).width > canvas.width - 225);
    ctx.fillText(name, 15, 140)
    
    const joined = "Joined At : " + "Feb 28, 2021";
    do {
        ctx.font = `${size2 -= 5}px oldengl`;
        ctx.fillStyle = "#dd0d54"; // Font Colour
    } while (ctx.measureText(joined).width > canvas.width - 225);
    ctx.fillText(joined, 15, 170)


    // Circle control
    const radius = parseInt("45") // Higher number - smaller size
    const circleLR = parseInt("171") // Zero to center the circle [LEFT/RIGHT] [Minus to Right]
    const circleUB  = parseInt("36") // Zero to center the circle [UP/BOTTOM] [Minus to Bottom]
    // Icon Control
    const ImageSize = parseInt("120") // Image size
    const rightLeft = parseInt("230")
    const upBottom = parseInt("100")
    // Config Circle
    const x = canvas.width/2-circleLR; // Left&Right
    const y = canvas.height/2-circleUB; // Up&Bottom
    const r = canvas.height/2-radius; // Radius
    const sA = 0;
    const eA = Math.PI*2;
    const aC = true;
    // Config Icon
    const dx = canvas.width/2-rightLeft; // To right
    const dy = canvas.height/2-upBottom; // To Left
    const dw = ImageSize; // Width
    const dh = ImageSize; // Height

    // Circle
    const avatarICON = "./assets/images/avatar.jpg"
    ctx.beginPath();
    ctx.arc(x, y, r, sA, eA, aC);
    ctx.lineWidth = 2
    ctx.strokeStyle = "#ff0c98" // Black : FF0000
    ctx.stroke()
    ctx.closePath();
    ctx.clip();
    // Icon
    const avatar = await loadImage(avatarICON)
    ctx.drawImage(avatar, dx, dy, dw, dh);

    // Save the image
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./image.png', buffer)
} Welcomer().catch(err => console.log(`Hey, Please fix your code! there's an error in index.js: ${err}`))