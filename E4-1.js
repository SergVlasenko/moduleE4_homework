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
  
  
  /*----------------------- Задание Е4-1--------------------------------
  Написать, функцию, которая принимает в качестве аргумента объект
  и выводит в консоль все ключи и значения только собственных свойств.
  Данная функция не должна возвращать значение.*/
  
  function showOwnKey(obj){
    if (typeof(obj) === 'object'){
        for (let key in obj){
            if (obj.hasOwnProperty(key)){
                console.log(`Ключ '${key}': ${obj[key]}`);
            }
        }
    } else {
        console.log('В функцию поступил не ОБЪЕКТ')
    }
  }
  
  showOwnKey(person1);
  