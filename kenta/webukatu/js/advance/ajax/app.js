$(function () {
  $('.js-formArea').on('submit',function(e) {
    e.preventDefault();

    $.ajax({
      type: 'post',
      url: 'ajax_txt.txt',
      dataType: 'text',
      data:{
        name: $('.js-get-val-name').val(),
        age: $('.js-get-val-age').val()
      }
    }).done(function(data, status) {
      console.log(data);
      console.log(status);
      // var name = data.name;
      // var age = data.age;
      // $('.js-set-name').text(name);
      // $('.js-set-age').text(age);
      $('.js-set-html').html(data);
    });
  });

});