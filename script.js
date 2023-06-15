// console.log('hello')
// 4.95 pentru euro si 4.7 pentru dolar

const firstSentence = 'Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing';
const secondSentence = 'Ion castiga 1000 euro/luna din salariu, 2000 euro/an bonus si 500 usd/luna din freelancing';

const firstList= firstSentence.split(' ');
console.log(firstList)
let sum1=0;
let elem=0;
for(let i=0; i<=firstList.length; i++){
    if(!isNaN(firstList[i])){
        elem=parseFloat(firstList[i]);
        if(firstList[i+1]==='lei/luna'){
            sum1=sum1+elem*12;
        }
        if(firstList[i+1]==='lei/an'){
            sum1=sum1+elem;
    }
    }
}
console.log(sum1)



const secondList= secondSentence.split(' ');
console.log(secondList)
let sum2=0;
let element=0;
for(let i=0; i<= secondList.length; i++){
    if(!isNaN(secondList[i])){
        element=parseFloat(secondList[i]);
        if(secondList[i+1]==='euro/luna'){
            sum2=sum2+element*12*4.95;
        }
        if(secondList[i+1]==='usd/luna'){
            sum2=sum2+element*12*4.7;
        }
        if(secondList[i+1]==='euro/an'){
            sum2=sum2+element*4.95;
        }
    }
}
console.log(sum2);