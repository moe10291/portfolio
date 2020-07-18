
$(document).ready(function() {
    $('.submit').click(function(event){
        // event.preventDefault()
        console.log('Its working');

        let name= $('.name').val();
        let mailFrom= $('.email').val();
        let subject= $('.subject').val();
        let message= $('.message').val();
        let statusElm=$('.status')
        statusElm.empty();

        if(mailFrom.length > 5 && mailFrom.includes('@') && mailFrom.includes('.')){
            statusElm.append('<div>email is valid</div>')
        } else {
            statusElm.append('<div>email is not valid</div>')
        };

        if(message.length > 10){
            statusElm.append('<div>Message is valid</div>')
        } else {
            statusElm.append('<div>Message is not valid</div>')
        }

        if(name.length > 3){
            statusElm.append('<div>Name is valid</div>')
        } else {
            statusElm.append('<div>Name is not valid</div>')
        }

        if(subject.length > 3){
            console.log('<div>Name is valid</div>')
        } else {
            console.log('<div>Name is not valid</div>')
        }


    });
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-100
        }, 1500);
       
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
    });
    
    });
