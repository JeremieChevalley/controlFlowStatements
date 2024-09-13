const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
    if (numbers.some(numbers => numbers >51)){ // Aidé de ChatGPT
        break;
    }
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }
if (numbers.length<10) {
    console.log(`Nombre d'opérations évitées : ${10 - numbers.length}`);
}