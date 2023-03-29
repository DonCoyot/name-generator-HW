let GENDER_MALE = 'Мужчина';
let GENDER_FEMALE = 'Женщина';

randomGender = function() {
    return Math.random() < 0.5 ? GENDER_MALE : GENDER_FEMALE
 };
 alert(randomGender())
