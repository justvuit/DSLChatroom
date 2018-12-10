$(function() {

  var socket = io();

  $('form').submit(function() {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });

  $('.l').click(function() {
    socket.emit('chat message', $(this).attr('src'));
    return false;
  });

  socket.on('chat message', function image(from) {
    console.log(from)
    if (from.length < 1) {
      return;
    }
    if (from.startsWith("https")) {
      $('#messages').append($('<li>').append($('<b>'),
        '<img src="' + from + '"/>'));
      $('#m').css('background', "url('" + from + "') no-repeat");
    } else {
      $('#messages').append($('<li>').text(from));
    }
    document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
  });
});
