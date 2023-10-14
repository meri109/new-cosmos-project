const sun = document.querySelector('#sun')

const sunX = 700
const sunY = 350


const px = (n) => n + 'px'
const rad = (deg, speed) => deg * speed / 180

sun.style.left = px(sunX) 
sun.style.top = px(sunY) 

function setPlanet(id, radius, speed,startDeg=0, direction='noclock' ) {
    let deg = startDeg
    const planet = document.querySelector('#' + id)
    const increment = direction == 'noclock' ? -1 : 1

    setInterval(() => {
        const x = sunX + radius * Math.cos(rad(deg, speed))
        const y = sunY + radius * Math.sin(rad(deg, speed))
        planet.style.left = px(x)
        planet.style.top = px(y)
        deg+=increment
    }, 10); 
}

function setSatellite(id, planetId, radius, speed, startDeg=0, direction='noclock' ) {
    let deg = startDeg
    const satellite = document.querySelector('#' + id)
    const increment = direction == 'noclock' ? -1 : 1
    const planet = document.querySelector('#' + planetId)

    setInterval(() => {
        const planetX = Number(planet.style.left.slice(0, -2))
        const planetY = Number(planet.style.top.slice(0, -2))

        const x = planetX + radius * Math.cos(rad(deg, speed))
        const y = planetY + radius * Math.sin(rad(deg, speed))
        satellite.style.left = px(x)
        satellite.style.top = px(y)
        deg+=increment
    }, 10); 
}

setPlanet('mercury',80, 4, 30);
setPlanet('venus',115, 3.5, 150);
setPlanet('earth', 160, 2.8, 50);
setPlanet('mars', 200, 2.5, 80);
setPlanet('jupiter', 250, 2, 90);
setPlanet('saturn', 320, 1.5, 20);
setPlanet('uranus', 380, 1.2, 150);
setPlanet('neptune', 430, 1, 70);
// setPlanet('pluto', 480, 0.8, 160);
setSatellite('moon','earth', 25, 5.8 , 200, 'clock' )

screenWidth = window.innerWidth 
screenHeight = window.innerHeight

for (let i = 0; i < 350; i++){
    const star = document.createElement('div')
    star.classList.add('star')
    const x = Math.round(Math.random() * screenWidth)
    const y = Math.round(Math.random() * screenHeight)
    const delay = Math.round((Math.random() * 200)) / 100
    const size = Math.floor(1 + Math.random() * 3)

    star.style.left = px(x)
    star.style.top = px(y)
    star.style.width = px(size)
    star.style.height = px(size)
    star.style.animationDelay = delay + 's'
    document.body.append(star)
}

setTimeout(() => {
    const meteor = document.querySelector('.meteor')
    meteor.classList.add('meteor-action')
}, 3000);
