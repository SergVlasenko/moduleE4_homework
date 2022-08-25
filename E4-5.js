/*----------------------- Задание Е4-5-------------------------------- 
Переписать консольное приложение из предыдущего юнита на классы
*/

//Счетчик потребляемой мощности
let totalPower = 0;

//Общий класс для всех электронных устройств
class ElectroDevice {
    constructor(name, power) {
      this.name = name;
      this.power = power;
      this.plugged = false;
    }
  
    //Метод включения устройства
    turnOn(){
      if (!this.plugged){
        this.plugged = true;
        totalPower += this.power;
        console.log(`${this.name} включен. Общее потребление мощности в электросети = ${totalPower} Вт`);
      } else {
        console.log(`${this.name} уже включен`)
      }
    }
  
    //Метод выключения устройства
    turnOff(){
      if (this.plugged) {
        this.plugged = false;
        totalPower -= this.power;
        console.log(`${this.name} выключен. Общее потребление мощности в электросети = ${totalPower} Вт`);
      } else {
        console.log(`Прибор ${this.name} уже выключен`)
      }
    }
  }
  
  
  //Класс Телевизор
  class TV extends ElectroDevice {
    constructor(name, power, supportSmart, supportWiFi) {
      super(name, power);
      this.supportSmart = supportSmart  || false;
      this.supportWiFi = supportWiFi || false;
    }
  
    //Метод включения Wi-Fi
    turnOnWiFi(){
      if (this.supportWiFi && this.plugged){
        console.log(`На устройстве ${this.name} включен Wi-Fi`);
      } else (
        console.log(`Устройство ${this.name} выключен или не поддерживает Wi-Fi`)
      )
    }
  
    //Метод выключения Wi-Fi
    turnOffWiFi(){
      console.log(`На устройстве ${this.name} выключен Wi-Fi`);
    }
  }
  
  
  //Клас Чайник
  class Teapot extends ElectroDevice {
    constructor(name, power, water) {
      super(name, power);
      this.water = water || false;
    }
  
    //Метод заполнения чайника водой
    waterFull(){
      this.water = true;
      console.log(`В ${this.name} налили воды`);
    }
  
    //Метод включения чайника
    turnOn(){
      if (this.water && !this.plugged) {
        this.plugged = true;
        totalPower += this.power;
        console.log(`${this.name} включен. Общее потребление мощности в электросети = ${totalPower} Вт`); 
      } else if (!this.water && !this.plugged){
        console.log(`В чайнике нет воды. Включить ${this.name} невозможно!`);
      } else {
        console.log(`${this.name} уже включен`)
      }
    }
  }
  
  let tvbox2 = new TV('Телевизор', 300, true, true);
  console.log(tvbox2);
  let teapot2 = new Teapot('Чайник', 1000);
  console.log(teapot2);
  tvbox2.turnOn();
  teapot2.turnOn();
  teapot2.waterFull();
  teapot2.turnOn();
  tvbox2.turnOn();
  tvbox2.turnOnWiFi();
  tvbox2.turnOffWiFi();
  teapot2.turnOn();
  tvbox2.turnOff();
  teapot2.turnOff();
  tvbox2.turnOff();
  teapot2.turnOff();
  