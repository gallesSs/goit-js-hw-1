function getShippingMessage(country, price, deliveryFee) {
    const fullFee = price + deliveryFee;
    console.log(`Shipping to ${country} will cost ${fullFee} credits`);
}

getShippingMessage(`Australia`, 120, 50);
getShippingMessage(`Germany`, 80, 20);
getShippingMessage(`Sweden`, 100, 20);
