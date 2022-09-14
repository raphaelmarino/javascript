function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res'); 

    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!');

    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img'); //comando para criar elemento via JS, mesma coisa que criar na mão uma img no HTML
        img.setAttribute('id', 'foto');//comando para criar elemento via JS, mesma coisa que criar na mão uma img no HTML
        if(fsex[0].checked){
            var genero = 'homem';
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança menino.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem homem.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto homem.jpg');
            }else{
                //idoso
                img.setAttribute('src', 'idoso homem.jpg');
            }
        }else{
            genero = 'mulher';
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança menina.jpg');
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem mulher.jpg');
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto mulher.jpg');
            }else{
                //idoso
                img.setAttribute('src', 'idoso mulher.jpg');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); //faz mais um conteúdo aparecer (que não tinha sido criado).
    }
}