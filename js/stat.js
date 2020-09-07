'use strict';

// Константы облака
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

// Константы гистрограммы
var INITIAL_X = CLOUD_WIDTH / 2 + 15;
var INITIAL_Y = 20;
var HISTOGRAM_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var COLUMN_INDENT = 50;

// Константы игроков
var USER_NAME = 'Вы';
var USER_COLUMN_COLOR = 'rgba(255, 0, 0, 1)'; // = Красный


var getRandomBlueColor = function () {
  return 'rgba(0, 0, 255, ' + (Math.random() * 0.8 + 0.2) + ')'; // = Синий с рандомной прозрачностью
};

// Поиск максимального значаения, для отображения пропорциональных столбцов
function findMaxValue(times) {
  var max = times[0];
  for (var i = 1; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}

window.renderStatistics = function (ctx, names, times) {

  // Объявление облака
  function renderRect(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  }
  // Оставил всего один параметр (color), для читаемости, плюс в этой задаче все цвета простые

  // Объявление сообщения о победе
  function renderHeadlineMessage() {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2 + 30, 40);
    ctx.fillText('Список результатов:', CLOUD_WIDTH / 2 + 20, 60);
  }

  var SCORE = HISTOGRAM_HEIGHT / findMaxValue(times);

  // Объявление гисторгаммы
  function renderHistogram() {
    for (var j = 0; j < times.length; j++) {

      // Окрашивание столбцов
      if (names[j] === USER_NAME) {
        ctx.fillStyle = USER_COLUMN_COLOR;
      } else {
        ctx.fillStyle = getRandomBlueColor();
      }

      // Создание столбцов
      ctx.fillRect(INITIAL_X + COLUMN_INDENT * j, 270 - times[j] * SCORE - INITIAL_Y, COLUMN_WIDTH, times[j] * SCORE);
      ctx.fillStyle = '#000';
      ctx.fillText(names[j], INITIAL_X + COLUMN_INDENT * j, 270);
      ctx.fillText(Math.floor(parseInt(times[j], 10)), INITIAL_X + COLUMN_INDENT * j, 90);
    }
  }

  // Отрисовка тени облака со статистикой
  renderRect('rgba(0, 0, 0, 0.7)', 110, 20);

  // Отрисовка облака со статистикой
  renderRect('rgba(256, 256, 256, 1)', 100, 10);

  // Отрисовка сообщения о победе
  renderHeadlineMessage();

  // Отрисовка гистограммы
  renderHistogram();
};