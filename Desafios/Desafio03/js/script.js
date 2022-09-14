function contar(){
    let ini = document.getElementById('texti');
    let fim = document.getElementById('textf');
    let passo = document.getElementById('textp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('[ERRO] Faltam dados!');
        res.innerHTML = 'Impossível contar!';
    }else{
        res.innerHTML = 'Contando...';
        let i = Number(ini.value); 
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p >= 0){
            alert('Passo inválido! Considerando passo 1');
            p = 1;
        }

        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c +=p){
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }else {
            //contagem refressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}       