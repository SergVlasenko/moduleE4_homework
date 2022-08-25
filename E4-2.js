//Создаём объект-прототип для использования в задачах
const person = {
    lastname: 'Ivanov',
  }
  
  
  //На основании прототипа создаём оригинальный объект для использования в задачах
  const person1 = Object.create(person)
  person1.name = 'Sergey';
  person1.age = 45;
  person1['married'] = true;
  person1.marriedText = function(){
    let txt;
    if (person1.married) {
        txt =`${person1.name} женат`
    } else {
        txt =`${person1.name} холост`
    }
    return txt;
  }


/*----------------------- Задание Е4-2--------------------------------
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем.
Функция должна возвращать true или false.*/

function cheсkObjProperty(obj, str) {
    if (typeof(obj) !== 'object' && typeof(str) !== 'string'){
        console.log('Получены некорректные аргументы!')
    } else {
        if (str in obj){
            console.log(`В объекте ${obj} есть свойство ${str}`);
            return true;
        } else {
            console.log(`В объекте ${obj} нет свойства ${str}`);
            return false;
        }
    }
  }
  
  
  cheсkObjProperty(person1, "lastname");
  