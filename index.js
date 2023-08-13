$(document).ready(function () {

    let target = 0;
    let number_chances = 0;
    let max_num = 0;



    let timeLeft = 45; // زمان بازی به ثانیه
    let timer = setInterval(function () {
        timeLeft--;
        $('.timer').text(timeLeft + 's') ;
        if (timeLeft == 0) {
            clearInterval(timer);
            setTimeout(function () {
                location.reload();
            }, 1000); // بعد از 1 ثانیه بازی را راه‌اندازی مجدد کنید
        }
    }, 1000);

    function restartGame() {
        // برای راه‌اندازی مجدد بازی
        $('.start_btn').click(function () {


            max_num = Number($('.input_num').val());
            $('.max_num').text(max_num);
    
            if (max_num < 10) {
                $('.text_erro').show()
            } else {
                $(".step1").hide()
                $(".step2").show()
                target = Math.floor((Math.random() * max_num) + 1)
                number_chances = Math.floor(Math.log2(max_num))
                $('.number_chances').text(number_chances);
            }
        })
    
    }


    $('.start_btn').click(function () {


        max_num = Number($('.input_num').val());
        $('.max_num').text(max_num);

        if (max_num < 10) {
            $('.text_erro').show()
        } else {
            $(".step1").hide()
            $(".step2").show()
            target = Math.floor((Math.random() * max_num) + 1)
            number_chances = Math.floor(Math.log2(max_num))
            $('.number_chances').text(number_chances);
        }
    })

    $('.guess_btn').click(function () {
        let my_guess = Number($('.guess_input').val());
        $('.guess_input').val('');

        if (my_guess > 0 && my_guess <= max_num) {
            number_chances--;
            $('.number_chances').text(number_chances);

            if (my_guess < target) {

                let my_span = $('<span class="text-danger px-2"> </span>');
                my_span.text(my_guess)
                $('.guess_list').append(my_span)

            } else if (my_guess > target) {

                let my_span = $('<span class="text-primary px-2"> </span>');
                my_span.text(my_guess)
                $('.guess_list').append(my_span)

            } else if (my_guess == target) {
                $('.step2').hide();
                $('.win_msg').show();
                $('.target_msg').text(target)

            }

            if (number_chances == 0) {
                $('.step2').hide();
                $('.los_msg').show();
                $('.target_msg').text(target)

            } else if (number_chances == 1) {
                alert('!!!حواست باشه فقط یک فرصت دیگه داری')
            }

        } else {
            alert('عدد درست و داخل بازه مناسب انتخاب کنید');
        }





    });







    $('.btn_reset').click(function () {
        location.reload();
    });




















});