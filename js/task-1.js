function makeTransaction(quantity, pricePerDroid) {
    const fullPrice = quantity * pricePerDroid;
    console.log(`You ordered ${quantity} droids worth ${fullPrice} credits!`)
};

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500); 