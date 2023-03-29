const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Василиса",
            "id_2": "Татьяна",
            "id_3": "София",
            "id_4": "Гера",
            "id_5": "Афина",
            "id_6": "Персея",
            "id_7": "Ария",
            "id_8": "Изабелла",
            "id_9": "Клеопатра",
            "id_10": "Нефертити"
        }
    }`,
    
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Андрее",
            "id_2": "Сергее",
            "id_3": "Анатолье",
            "id_4": "Егорье",
            "id_5": "Никито",
            "id_6": "Артемо",
            "id_7": "Ивано",
            "id_8": "Данило",
            "id_9": "Игоре",
            "id_10": "Дмитрие"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE
     },

    randomFirstName: function() {
        if (this.person.gender === 'Мужчина'){
        return this.randomValue(this.firstNameMaleJson)
    }
    else {
        return this.randomValue(this.firstNameFemaleJson)
    }
    },

     randomSurname: function() {
        if (this.person.gender === 'Мужчина'){
        return this.randomValue(this.surnameJson)
    }
       else {
        return this.randomValue(this.surnameJson) + 'a'

       }
    },

    randomAge: function(min, max) {
         return Math.floor(Math.random() * (max - min) + min)
    },

    randomPatronymic: function() {
        if (this.person.gender === 'Мужчина'){
            return this.randomValue(this.patronymicJson) + 'вич'
        }
           else {
            return this.randomValue(this.patronymicJson) + 'внa'
    
           }
    },
    
    getPerson: function () {
        this.person = {};
        this.person.age = this.randomAge(1917, 2023)
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        return this.person;
    }
};
