'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = 0;
  var min = -2;

  for (var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
    if (time < min) {
    	min = time;
    }
  }
  
  var histoHeight = 150;
  var histoX = 40;
  var step = histoHeight / (max - min);
  var columnIndent = 50;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * (time-min);

    ctx.fillText(time.toFixed(0), 150 + (histoX + columnIndent) * i, 70 + histoHeight - height);
    if (name === 'Вы') {
    	ctx.fillStyle = 'rgba (255, 0, 0, 1)';
    } else {
    	ctx.fillStyle = 'rgba(0, 0, ', ((Math.random() * 5) *50).toFixed(0),', 1 )';
    }

    ctx.fillRect(150 + (histoX + columnIndent) * i, 80 + histoHeight-height, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, 150+ (histoX + columnIndent) * i, 80 + histoHeight + 20);
  }
};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Петр', 'Олег', 'Вы','Юрий'], [100.32, 52.15, 75, 456, ]);

