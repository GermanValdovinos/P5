//  * Titulo Pestaña
let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = `¡No te vayas! Regresa 😭`
})

window.addEventListener('focus', () => {
    document.title = previousTitle
})

// * Efecto 3D
const el = document.getElementById('poster')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt) => {
    const { layerX, layerY } = evt

    const yRotation = (
        (layerX - width / 2) / width
    ) * 10

    const xRotation = (
        (layerY - height / 2) / height
    ) * 10

    const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`

    el.style.transform = string
})

el.addEventListener('mouseout', () => {
    el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)`
})