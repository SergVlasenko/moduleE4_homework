/*----------------------- Задание Е4-3--------------------------------
Написать функцию, которая создает пустой объект, но без прототипа. */

const createEmptyObject = function(){
    const obj = Object.create(null);
    return obj;
  }
  
  console.log('Создан пустой объект:')
  console.log(createEmptyObject());
  