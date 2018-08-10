/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (var i = 0; i < array.length; i++){
    fn(array[i], i, array);
  }
}
forEach([1,2,3,4,5]);

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  for (var i = 0; i < array.length; i++){
    fn(array[i], i, array);
  }
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  var i = 0;

  if (initial === undefined){
    initial == array[0];
    i = 1;
  }

  for (var i = 0; i < array.length; i++){
    fn(initial, array[i], i, array);
  }

  return initial;

}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  var array =[];

  for (var key in obj){
    key = key.toUpperCase();
    array.push(key);
  }

  return array;
}


/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
  newArray = [];

  if (from === undefined) {
    from = 0;
  } 
  if (to === undefined) {
    to = array.length;
  }
  if (to > array.length) {
    to = array.length;
  }
  if (to < 0){
    to = array.length + to;
  }
  if (from < 0 && from >= -array.length) {
    from = array.length + from;
  }
  if (from < 0 && from < -array.length) {
    from = 0;
  }
  for (var i = from; i < to; i++){
    newArray.push(array[i]);
  }

  return newArray;
 
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  let proxy = new Proxy(obj, {
    set(target, prop, value){
      target[prop] = Math.pow(value, 2);
      
      return true;
    }
  });
  return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
