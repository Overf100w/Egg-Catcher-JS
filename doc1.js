var x = 50;
var score = 0;

$(function() {
    gen();
    document.onkeypress = function(event){
        switch (event.charCode){
            case 97:  
            if(x > 2) {
                x-=2;
                $('.player').css('left', x + '%'); 
            };
                break;
            case 100: 
            if(x < 90) {
                x+=2;
                $('.player').css('left', x + '%');
            };
        }
    }
})

var gen = function(){
    var heg1 = -60;
    var heg2 = -40;
    var heg3 = -20;
    var heg4 =   0;

    var wid1 = Math.floor(Math.random() * (96 - 5)) + 5;
    var wid2 = Math.floor(Math.random() * (96 - 5)) + 5;
    var wid3 = Math.floor(Math.random() * (96 - 5)) + 5;
    var wid4 = Math.floor(Math.random() * (96 - 5)) + 5;

    $('.field').prepend('<div style="left:'+wid4+'%; top:'+heg4+'%" class="egg egg4"></div>');
    $('.field').prepend('<div style="left:'+wid3+'%; top:'+heg3+'%" class="egg egg3"></div>');
    $('.field').prepend('<div style="left:'+wid2+'%; top:'+heg2+'%" class="egg egg2"></div>');
    $('.field').prepend('<div style="left:'+wid1+'%; top:'+heg1+'%" class="egg egg1"></div>');

    setInterval(function(){
            heg1++;
            heg2++;
            heg3++;
            heg4++;
            $('.egg1').css('top', heg1 + '%');
            $('.egg2').css('top', heg2 + '%');   
            $('.egg3').css('top', heg3 + '%');   
            $('.egg4').css('top', heg4 + '%');   
   
        if(heg1 == 93 && wid1 >= x - 8 && wid1 <= x + 8){
            heg1 = -60;
            wid1 = Math.floor(Math.random() * (96 - 5)) + 5;
            $('.egg1').css('left', wid1 + '%');
            $('.egg1').css('top', heg1 + '%');
            score++;
        }
        if(heg2 == 87 && wid2 >= x - 8 && wid2 <= x + 8){
            heg2 = -60;
            wid2 = Math.floor(Math.random() * (96 - 5)) + 5;
            $('.egg2').css('left', wid2 + '%');
            $('.egg2').css('top', heg2 + '%');
            score++;
        }
        if(heg3 == 83 && wid3 >= x - 8 && wid3 <= x + 8){
            heg3 = -60;
            wid3 = Math.floor(Math.random() * (96 - 5)) + 5;
            $('.egg3').css('left', wid3 + '%');
            $('.egg3').css('top', heg3 + '%');
            score++;
        }
        if(heg4 == 78 && wid4 >= x - 8 && wid4 <= x + 8){
            heg4 = -60;
            wid4 = Math.floor(Math.random() * (96 - 5)) + 5;
            $('.egg4').css('left', wid4 + '%');
            $('.egg4').css('top', heg4 + '%');
            score++;
        }
        if(heg1 >= 100){
            alert('you Lost!');
            location.reload();
        }
        if(heg2 >= 98){
            alert('you Lost!');
            location.reload();
        }
        if(heg3 >= 87){
            alert('you Lost!');
            location.reload();
        }
        if(heg4 >= 81){
            alert('you Lost!');
            location.reload();
        }
    }, 100)
}