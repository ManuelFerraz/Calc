var nome = window.prompt('Qual seu nome?')
     window.alert ("Seja Bem vindo " + nome + "!")

function calcular(){
            
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var tn3 = document.getElementById('txtn3')
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    var media = (n1 + n2) /2
    
    

    if(media >= 7){
        res.innerHTML = `A media das duas notas é <strong> ${media} </strong>  Você passou por média, parabéns`;
        res2.innerHTML =''; 
    }
    else if(media < 7 && media >= 4){

        var mediaf = (media + n3) /2
        res.innerHTML = `A media das duas notas é <strong> ${media} </strong>  Você foi para a final`;
        
        if(mediaf >= 5){
            res.innerHTML += `<strong>  Você passou na final - Média final ${mediaf} </strong>`;
            res2.innerHTML =`<strong> Você passou na final - Média final ${mediaf} </strong>`;
        }
        else {
            res.innerHTML += ` ||  Você reprovou na final - Média final <strong> ${mediaf} </strong>`;
            res2.innerHTML = `Você passou na final - Média final <strong> ${mediaf} </strong>`;
        }

    }
    else 
        res.innerHTML = `A media das duas notas é <strong> ${media} </strong>  Você está reprovado`;
        res2.innerHTML =''; 
}