function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 22 (para forçar a hora no sistema)
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = './images/manhã.jpg';
        document.body.style.background = '#e2cd9f';
    } else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = './images/tarde.jpg';
        document.body.style.background = '#b9846f';
    }else{
        //BOA NOITE
        img.src = './images/noite.jpg';
        document.body.style.background = '#515154';
    }
}
