const images = ["1.jpg", "2.jpg", "3.jpg"]

const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${chosenImg}`;

document.body.appendChild(bgimg);
console.log(bgimg)

