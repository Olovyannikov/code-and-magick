'use strict';

let names = [
    'Иван ',
    'Хуан Себастьян ',
    'Мария ',
    'Кристоф ',
    'Виктор ',
    'Юлия ',
    'Люпита ',
    'Вашингтон '
];
let surnames = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
];

const getFullName = (firstName, lastName) => {
    let charName = firstName[Math.floor(Math.random()*firstName.length)];
    let charSurname = lastName[Math.floor(Math.random()*lastName.length)];

    let fullName = charName + charSurname;
    return fullName;
}

let coatsColors = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

const getCoatColor = (colorList) => {
    return colorList[Math.floor(Math.random() * colorList.length)];
}

let eyeColor = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
];

const getEyesColor = (eyeColorList) => {
    return eyeColorList[Math.floor(Math.random() * eyeColorList.length)];
}

var WIZARD_NAMES = [getFullName(names, surnames), getFullName(names, surnames), getFullName(names, surnames), getFullName(names, surnames)];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


var wizards = [
    {
        name: WIZARD_NAMES[0],
        coatColor: getCoatColor(coatsColors),
        eyesColor: getEyesColor(eyeColor)
    },
    {
        name: WIZARD_NAMES[1],
        coatColor: getCoatColor(coatsColors),
        eyesColor: getEyesColor(eyeColor)
    },
    {
        name: WIZARD_NAMES[2],
        coatColor: getCoatColor(coatsColors),
        eyesColor: getEyesColor(eyeColor)
    },
    {
        name: WIZARD_NAMES[3],
        coatColor: getCoatColor(coatsColors),
        eyesColor: getEyesColor(eyeColor)
    }
];


var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');