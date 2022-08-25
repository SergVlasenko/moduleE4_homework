/*----------------------- Задание Е4-4--------------------------------
Реализовать консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два. 
Выбрав прибор, подумайте, какими свойствами он обладает.

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
Создать экземпляры каждого прибора.
*/

//Счетчик потребляемой мощности
let totalPower = 0;

//Родительская функция 
function ElectroDeviceOperate() {
    this.plugged = false
}

//Дополняем родительскую функцию методом включения устройства
ElectroDeviceOperate.prototype.deviceOn = function() {
    if (!this.plugged){
        this.plugged = true;
        totalPower += this.power;
        console.log(`${this.name} включен. Общее потребление мощности в электросети = ${totalPower} Вт`);
      } else {
        console.log(`${this.name} уже включен`);
      }
}

//Дополняем родительскую функцию методом выключения устройства
ElectroDeviceOperate.prototype.deviceOff = function() {
    if (this.plugged) {
        this.plugged = false;
        totalPower -= this.power;
        console.log(`${this.name} выключен. Общее потребление мощности в электросети = ${totalPower} Вт`);
      } else {
        console.log(`${this.name} уже выключен`);
      }
}


function createDevice(name, power) {
    this.name = name,
    this.power = +power
}

//Связываем создаваемое устройство с родительской функцией
createDevice.prototype = new ElectroDeviceOperate();


//Создаём экземпляры нужных устройств
const tvbox = new createDevice('Телевизор', 300);
const teapot = new createDevice('Чайник', 1000);


//Дополняем созданные устройства функционалом
tvbox.supportWiFi = true;

tvbox.wiFiOn = function(){
    if (this.supportWiFi && this.plugged){
        console.log(`На телевизоре включен Wi-Fi`);
      } else (
        console.log(`Телевизор выключен или не поддерживает Wi-Fi`)
      )
}

tvbox.wiFiOff = function(){
    console.log(`На телевизоре выключен Wi-Fi`);
}

teapot.water = false;

teapot.waterFull = function(){
    this.water = true;
    console.log(`В чайник налили воды`);
}

//Оперируем созданными устройствами
tvbox.deviceOn();
tvbox.wiFiOn();
tvbox.wiFiOff();
teapot.waterFull();
teapot.deviceOn();
tvbox.deviceOff();
teapot.deviceOff();
