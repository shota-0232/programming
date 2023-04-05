$(function() {

    $('.js-keyup-valid-email').on('keyup', function(e) {
        var $that = $(this)

        $.ajax({
            type: 'post',
            url: 'ajax.php',
            dataType: 'json',
            data: {
                email: $(this).val()
            }
        }).then(function(data){
            console.log(data)

            if(data) {
                if(data.errorFlg) {
                    $('.js-set-msg-email').addClass('is-error')
                    $('.js-set-msg-email').removeClass('is-success')
                    $that.addClass('is-error')
                    $that.removeClass('is-success')
                } else {
                    $('.js-set-msg-email').addClass('is-success')
                    $('.js-set-msg-email').removeClass('is-error')
                    $that.addClass('is-success')
                    $that.removeClass('is-error')
                }
                $('.js-set-msg-email').text(data.msg)
            }
        })
    })
})