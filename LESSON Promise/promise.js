let drink = 0;

function shoot(arrow) {
    console.log('вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
           }, 3000);
   });

   return promise;
};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBerr() : giveMoney();
}

function giveMoney() {
    console.log('Вам заплатили')
}

function loose() {
    console.log('Вы проиграли')
}

shoot({})
    .then(mark =>  console.log('Вы попали в цель!'))
    .then(win)
    .catch(loose)