$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Hello em người yêu của tui ❤️️❤️️❤️️❤️❤️️️',
        text: 'Chúc em ngày mới vui vẻ nha !!!😘',
        imageUrl: './img/cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff',
        imageAlt: 'Custom image',
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('../sound/duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('../sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = "Hihihihi";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('../sound/tick.mp3');
    audio.play();
    Swal.fire({
        title: 'Món QUÀ  bé tí không ai khác chính là tui đây hihi!',
        html: true,
        width: 900,
        padding: '3em',
        html: "<img src=\"./img/thatim.jpg\">",
        background: '#fff',
        // backdrop: `
        //       rgba(0,0,123,0.4)
        //       url("../img/giphy2.gif")
        //       left top
        //       no-repeat
        //     `,
        showCancelButton: true,
        cancelButtonText: "Thôi hông thèm",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Yeahhhh yêu anh'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Thả tim',
                background: '#fff',
                title: 'Tuy quà này hiện tại chưa ship đến cho em được nhưng khi hết giãn cách nó sẽ ship đến cho em liền luôn nha 😍',
                html: true,
                html: "<img src=\"./img/thatim2.jpg\">",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://www.facebook.com/binhho1099/';
                  }
            })
        }
    })
})