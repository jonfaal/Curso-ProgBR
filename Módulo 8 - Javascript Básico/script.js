// Exercício 01
var ex01n1 = document.querySelector('#ex01n1');
var ex01n2 = document.querySelector('#ex01n2');
var res01 = document.querySelector('div#rEx01');

function funcEx01(n1, n2){
    let rfunc01;

    if(n1 > n2){
        rfunc01 = n1
    } else{
        rfunc01 = n2
    }
    
    res01.innerHTML = `O maior valor é ${rfunc01}.`;
}

// Exercício 02
var ex02n1 = document.querySelector('#ex02n1');
var ex02n2 = document.querySelector('#ex02n2');
var ex02n3 = document.querySelector('#ex02n3');
var res02 = document.querySelector('#rEx02');

function funcEx02(n1,n2,n3){
    let arr02 = [n1, n2, n3];
    arr02.sort();
    res02.innerHTML = `A ordem crescente é ${arr02[0]}, ${arr02[1]}, ${arr02[2]}.`;
}

// Execício 03
var ex03n1 = document.querySelector('#ex03n1');
var ex03n2 = document.querySelector('#ex03n2');
var ex03n3 = document.querySelector('#ex03n3');
var ex03n4 = document.querySelector('#ex03n4');
var ex03n5 = document.querySelector('#ex03n5');
var res03 = document.querySelector('#rEx03');

function funcEx03(n1, n2, n3, n4, n5){
    let arr03 = [n1, n2, n3, n4 ,n5];
    arr03.sort()
    res03.innerHTML = `O maior valor é ${arr03[arr03.length -1]}.`
}

// Execício 04
var ex04n1 = document.querySelector('#ex04n1');
var ex04n2 = document.querySelector('#ex04n2');
var ex04n3 = document.querySelector('#ex04n3');
var ex04n4 = document.querySelector('#ex04n4');
var ex04n5 = document.querySelector('#ex04n5');
var res04 = document.querySelector('#rEx04');

function funcEx04(n1, n2, n3, n4, n5){
    let arr04 = [n1, n2, n3, n4 ,n5];
    let m = 0
    let i = 0
    while(i < arr04.length){
        m += Number(arr04[i]);
        i++;
    }
    res04.innerHTML = `A média dos valores é ${m/arr04.length}.`
}

// Exercício 05
var ex05n1 = document.querySelector('#ex05n1');
var res05 = document.querySelector('#rEx05');
function funcEx05(){
    if(ex05n1.value%2 == 0){
        res05.innerHTML = `O número é par.`;
    } else{
        res05.innerHTML = `O número é impar`;
    }
}

// Exercício 06
var res06 = document.querySelector('#rEx06');

function funcEx06(){
    let res;
    res06.innerHTML = '';
    for(let i = 0; i <= 100; i++){
        if(i % 4 == 0 && i != 0){
            res = "pi, ";
        } else{
            res = `${i}, `;
        }
        res06.innerHTML += res;
    }
    
}

//Exercício 08
var res08 = document.querySelector('#rEx08');
var data = Date();
var dataArray = [];

function gerarData(){

    dataArray.dia = data[0]+data[1]+data[2];
    dataArray.data = data[8]+data[9];
    dataArray.mes = data[4]+data[5]+data[6];
    dataArray.ano = data[11]+data[12]+data[13]+data[14];
    dataArray.hora = data[16]+data[17];
    dataArray.minuto = data[19]+data[20];

    switch(dataArray.dia){
        case 'Sun':
            dataArray.dia = 'Domingo';
            break
        case 'Mon':
            dataArray.dia = 'Segunda'
            break
        case 'Tue':
            dataArray.dia = 'Terça'
            break
        case 'Wed':
            dataArray.dia = 'Quarta'
            break
        case 'Thr':
            dataArray.dia = 'Quinta'
            break
        case 'Fri':
            dataArray.dia = 'Sexta'
            break
        case 'Sat':
            dataArray.dia = 'Sábado'
            break
    }
    switch(dataArray.mes){
        case 'Jan':
            dataArray.mes = 'Janeiro';
            break
        case 'Feb':
            dataArray.mes = 'Fevereiro'
            break
        case 'Mar':
            dataArray.mes = 'Março'
            break
        case 'Apr':
            dataArray.mes = 'Abril'
            break
        case 'May':
            dataArray.mes = 'Maio'
            break
        case 'Jun':
            dataArray.mes = 'Junho'
            break
        case 'Jul':
            dataArray.mes = 'Julho'
            break
        case 'Aug':
            dataArray.mes = 'Agosto'
            break
        case 'Sep':
            dataArray.mes = 'Setembro'
            break
        case 'Oct':
            dataArray.mes = 'Outubro'
            break
        case 'Nov':
            dataArray.mes = 'Novembro'
            break
        case 'Dec':
            dataArray.mes = 'Dezembro'
            break
    }

    res08.innerHTML = `Hoje é ${dataArray.dia}, dia ${dataArray.data} de ${dataArray.mes} de ${dataArray.ano}. ${dataArray.hora} horas e ${dataArray.minuto} minutos.`;
};

console.log(data);

//Exercício 09
var ex09n1 = document.querySelector('#ex09n1');
var ex09i1 = document.querySelector('#ex09i1');
var ex09a1 = document.querySelector('#ex09a1');
var regNome = document.querySelector('#ex09RegNome');
var regIdade = document.querySelector('#ex09RegIdade');
var regAltura = document.querySelector('#ex09RegAltura');
var res09 = document.querySelector('#rEx09');
var ex09Nomes = [];
var ex09Idades = [];
var ex09Alturas = [];

function funcEx09Gerar(){
    let nomesGerador = ['Cebolinha', 'Magali', 'Cascão', 'Chico Bento', 'Monica', 'Penadinho', 'Horácio', 'Piteco', 'Titi', 'Rolo'];

    ex09n1.value = nomesGerador[Number.parseInt(Math.random()*10)];
    ex09i1.value = Number.parseInt(Math.random()*50+5);
    ex09a1.value = Number.parseInt(Math.random()*50+100);
};

function funcEx09Cadastrar(){
    if(ex09Nomes.length > 4){
        window.alert('Não é possivel cadastrar mais pessoas.');
    } else{
        ex09Nomes.push(ex09n1.value);
    let cadNome = document.createElement('option');
    cadNome.text = ex09Nomes[ex09Nomes.length - 1];
    regNome.appendChild(cadNome);

    ex09Idades.push(ex09i1.value);
    let cadIdade = document.createElement('option');
    cadIdade.text = ex09Idades[ex09Idades.length - 1];
    regIdade.appendChild(cadIdade);

    ex09Alturas.push(ex09a1.value);
    let cadAltura = document.createElement('option');
    cadAltura.text = ex09Alturas[ex09Alturas.length - 1];
    regAltura.appendChild(cadAltura);
    }

    
};

function maiorAltura(){
    let ordem = [];
    let index = 0
    for(let i = 0; i < ex09Alturas.length; i++){
        
        ordem.push(ex09Alturas[i]);
    }

    ordem.sort();

    for(let i = 0; ex09Alturas[i] !== ordem[ordem.length - 1]; i++){
        index ++;
    }
    
    return index;
    
};

function menorAltura(){
    let ordem = [];
    let index = 0
    for(let i = 0; i < ex09Alturas.length; i++){
        
        ordem.push(ex09Alturas[i]);
    }

    ordem.sort();

    for(let i = 0; ex09Alturas[i] !== ordem[0]; i++){
        index ++;
    }
    
    return index;
    
};

function mediaIdades(){
    let soma = 0;
    let i = 0; 

    while(i < ex09Idades.length){
        soma += Number(ex09Idades[i]);
        i++
    };
    
    return Number.parseInt(soma / ex09Idades.length);
    
};

function funcEx09(){
    
    if(ex09Nomes.length <= 0){
        window.alert('Cadastre uma pessoa.');
    } else {
        res09.innerHTML = `A pessoa mais alta é ${ex09Nomes[maiorAltura()]} e a mais baixa ${ex09Nomes[menorAltura()]}.<br>  A média de idades é de ${mediaIdades()} anos.`;
    }
};


//Exercício 10
var ex10n1 = document.querySelector('#ex10n1');
var res10 = document.querySelector('#rEx10');
function funcEx10(){
    let res = '';
    res10.innerHTML = '';
    for(let i = 0; i <= ex10n1.value; i++){
        
        res += '* ';
        res10.innerHTML += `${res}<br>`;
    }
    
}