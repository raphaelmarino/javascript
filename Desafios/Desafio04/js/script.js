function tabuada(){
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if(num.value.length == 0){ //teste para o usuário não deixar espaço em branco
        alert('Por favor, digite um número!');
    }else{
        let n = Number(num.value);
        let c = 1
        tab.innerHTML = '' // limpa a tabuada ao calcular uma nova, para não aparecer uma embaixo da outra

        while(c <= 10){
            let item = document.createElement('option'); //comando para criar elemento no html através do js
            item.text = `${n} x ${c} = ${n*c}`; //essa linha é o texto que vai aparecer dentro das opções do 'option', já fazendo as contas
            tab.appendChild(item);
            c++;
        }
    }
}