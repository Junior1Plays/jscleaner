let captchavalue = window.document.getElementById('captcha-captchavalue')
let captchauserinput = window.document.getElementById('captcha-userinput')

const options = ['Maça', 'Pera', 'Jaca', 'Melancia', 'Morango', 'Melão', 'Manga', 'Abacaxi', 'Tomate', 'Limão', 'Banana', 'Abacate', 'Acerola', 'Açaí', 'Amora', 'Carambola', 'Cereja', 'Cajá', 'Cacau', 'Biribá', 'Bacaba', 'Araticum', 'Caqui', 'Cidra', 'Uva', 'Coco', 'Cupuaçu', 'Figo']
const resultado = options[Math.floor(Math.random() * options.length)];

captchavalue.innerText = resultado

function captchaverify() {
    if (captchauserinput.value == resultado) {
        //insira uma ação aqui.
    } else {
        window.alert("Você errou o captcha! Tente novamente.")
        location.reload()
    }
}





