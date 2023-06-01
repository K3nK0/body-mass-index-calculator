const blocMetric = document.querySelector('.unit-metric')
const blocImperial = document.querySelector('.unit-imperial')
const inputMetric = document.getElementById('metric')
const inputImperial = document.getElementById('imperial')
const choiceUnits = document.querySelector('.choice-units')

const resultBmi = document.getElementById('result')
const resultBmiText = document.querySelector('.bmi-result-description')
const titleBmi = document.getElementById('title-bmi')

const cm = document.getElementById('cm')
const kg = document.getElementById('kg')

const feet = document.getElementById('feet')
const inch = document.getElementById('inch')
const stone = document.getElementById('stone')
const livre = document.getElementById('livre')

function activeBlockUnit() {
    if (inputMetric.checked) {
        blocMetric.classList.add('active')
        kg.addEventListener('input', () => {
            calculBmiMetric(kg.value, cm.value/100)
        })
    } else {
        blocMetric.classList.remove('active')
    }
    if (inputImperial.checked) {
        blocImperial.classList.add('active')
        livre.addEventListener('input', () => {
            convertion(stone.value, livre.value, feet.value, inch.value)
        })
    } else {
        blocImperial.classList.remove('active')
    }
}

choiceUnits.addEventListener('click', ()=> {
    activeBlockUnit()
    startCalculate()
})

activeBlockUnit()


function calculBmiMetric(weight, height) {

    let result = (weight / Math.pow(height,2)).toFixed(1)

    if(!(result === "")){
        let minWeight = (18.5 * Math.pow(height,2)).toFixed(1)
        let maxWeight = (24.9 * Math.pow(height,2)).toFixed(1)
        titleBmi.innerHTML = "Your BMI is ..."
        resultBmi.innerHTML = result
        if(result < 18.5){
            resultBmiText.innerHTML = `Your BMI suggests you're underweight.
            Your ideal weight is between <span>${minWeight}kgs - ${maxWeight}kgs</span>.`
        }
        else if(result >= 18.5 && result <= 24.9){
            resultBmiText.innerHTML = `Your BMI suggests you're healthy weight.
            Your ideal weight is between <span>${minWeight}kgs - ${maxWeight}kgs</span>.`
        }
        else if(result >= 25 && result <= 29.9){
            resultBmiText.innerHTML = `Your BMI suggests you're overweight.
            Your ideal weight is between <span>${minWeight}kgs - ${maxWeight}kgs</span>.`
        }
        else {
            resultBmiText.innerHTML = `Your BMI suggests you're obese.
            Your ideal weight is between <span>${minWeight}kgs - ${maxWeight}kgs</span>.`
        }
    }
}


function calculBmiImperial(weight, height) {

    let result = (weight / Math.pow(height,2)).toFixed(1)

    if(!(result === "")){
        let minWeight = (18.5 * Math.pow(height,2)).toFixed(1)
        let maxWeight = (24.9 * Math.pow(height,2)).toFixed(1)

        let minStone = Math.floor(minWeight / 6.35029)
        let minPound = Math.round((minWeight / 6.35029 - minStone) * 14)
        let maxStone = Math.floor(maxWeight / 6.35029)
        let maxPound = Math.round((maxWeight / 6.35029 - maxStone) * 14)

        titleBmi.innerHTML = "Your BMI is ..."
        resultBmi.innerHTML = result
        if(result < 18.5){
            resultBmiText.innerHTML = `Your BMI suggests you're underweight.
            Your ideal weight is between <span>${minStone}st ${minPound}lbs - ${maxStone}st ${maxPound}lbs</span>.`
        }
        else if(result >= 18.5 && result <= 24.9){
            resultBmiText.innerHTML = `Your BMI suggests you're healthy weight.
            Your ideal weight is between <span>${minStone}st ${minPound}lbs - ${maxStone}st ${maxPound}lbs</span>.`
        }
        else if(result >= 25 && result <= 29.9){
            resultBmiText.innerHTML = `Your BMI suggests you're overweight.
            Your ideal weight is between <span>${minStone}st ${minPound}lbs - ${maxStone}st ${maxPound}lbs</span>.`
        }
        else {
            resultBmiText.innerHTML = `Your BMI suggests you're obese.
            Your ideal weight is between <span>${minStone}st ${minPound}lbs - ${maxStone}st ${maxPound}lbs</span>.`
        }
    }
}


function convertion(st, lbs, ft, inch) {
    let conversionWeight = (st*6.35029) + (lbs*0.453592)
    let conversionHeight = ((ft*30.48) + (inch*2.54))/100
    calculBmiImperial(conversionWeight, conversionHeight)
}


function startCalculate() {
    titleBmi.innerHTML = "Welcome!"
    resultBmi.innerHTML = ""
    resultBmiText.innerHTML = "Enter your height and weight and you’ll see your BMI result here"
    cm.value = ""
    kg.value = ""
    feet.value = ""
    inch.value = ""
    stone.value = ""
    livre.value = ""
}



