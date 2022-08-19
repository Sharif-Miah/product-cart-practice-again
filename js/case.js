document.getElementById('btn-iphone-case-incre').addEventListener('click', function () {
    const iphoneCaseQun = getInputElelment(true, 'iphone-case-Field');
    getParse('iphone-case-Field', iphoneCaseQun);
    textFieldCase('case-price', iphoneCaseQun);
    calculateAllTotal()
})

document.getElementById('btn-iphone-case-decre').addEventListener('click', function () {
    const iphoneCaseDecres = getInputElelment(false, 'iphone-case-Field');
    getParse('iphone-case-Field', iphoneCaseDecres);
    textFieldCase('case-price', iphoneCaseDecres)
    calculateAllTotal()
})