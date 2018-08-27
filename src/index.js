/* ДЗ 6 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунду

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */
function delayPromise(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов пожно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
function loadAndSortTowns() {
  var req = new XMLHttpRequest();

  return new Promise((resolve) => {
    req.open('GET', 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);
    req.responseType = 'JSON';
    req.send();

    req.addEventListener('load', () => {
      var newArray = [];

      JSON.parse(req.response, (key, value) => {
        if(key === 'name'){
          newArray.push(value);
        }
      });
      resolve(newArray.sort());
    });
  });

}
loadAndSortTowns();
// export {
//     delayPromise,
//     loadAndSortTowns
// };
