//script para las resoluciones de pantallas automaticamente
const sharp = requiere("sharp");
sharp("icon.png")
    .trim()
    .resize(30, 30, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha :0}
    })
    .toFile("logo2.png")
    .then(info => console.log('Exitoso:', info))
    .catch(err => console.error(err));
    //ve haciendo el body mira esta pagina apologs.com esa me gusto
//script