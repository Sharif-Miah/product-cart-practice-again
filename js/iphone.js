
document.getElementById('iphone-incre-value').addEventListener('click', function () {
    const iphoneQun = getInputElelment(true, 'iphone-input-field');
    getParse('iphone-input-field', iphoneQun);
    textField('iphone-price', iphoneQun);
    calculateAllTotal()
})

document.getElementById('iphone-incre-decreses').addEventListener('click', function () {
    const iphoneQunMinus = getInputElelment(false, 'iphone-input-field');
    getParse('iphone-input-field', iphoneQunMinus);
    textField('iphone-price', iphoneQunMinus);
    calculateAllTotal();
})