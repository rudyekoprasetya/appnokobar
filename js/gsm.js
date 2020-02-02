var url_base = 'http://japfafoundation.org/public/';
var jumlah_tampil_1 = 0;
var jumlah_tampil_2 = 0;

var myApp = new Framework7({
    modalTitle: 'Message',
    // Enable Material theme
    material: true,
    template7Pages: true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {});


// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
/*$$(document).on('ajaxStart', function(e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.showPreloader();
});
$$(document).on('ajaxComplete', function(e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.hidePreloader();
});*/

// Callbacks for specific pages when it initialized
myApp.onPageInit('home', function(page) {
  
  $('#cnl_3').focus();


document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 49) {
        mainView.router.loadPage('view_tv.html');
    }
    if (evt.keyCode == 50) {
        mainView.router.loadPage('view_tv_rcti.html');
    }
    if (evt.keyCode == 51) {
        mainView.router.loadPage('view_tv_global.html');
    }
    if (evt.keyCode == 52) {
        mainView.router.loadPage('view_tv_tvri.html');
    }
    if (evt.keyCode == 53) {
        mainView.router.loadPage('view_tv_inews.html');
    }
    //tombol kiri
    if (evt.keyCode == 37) {
       $(":focus").each(function() {
            if(this.id=="cnl_1"){
              $('#cnl_5').focus();
            }
            if(this.id=="cnl_2"){
              $('#cnl_1').focus();
            }
            if(this.id=="cnl_3"){
              $('#cnl_2').focus();
            }
            if(this.id=="cnl_4"){
              $('#cnl_3').focus();
            }
            if(this.id=="cnl_5"){
              $('#cnl_4').focus();
            }
        });
    }

    //tombol atas 
    if (evt.keyCode == 38) {
       $(":focus").each(function() {
            if(this.id=="cnl_1"){
              $('#cnl_5').focus();
            }
            if(this.id=="cnl_2"){
              $('#cnl_1').focus();
            }
            if(this.id=="cnl_3"){
              $('#cnl_2').focus();
            }
            if(this.id=="cnl_4"){
              $('#cnl_3').focus();
            }
            if(this.id=="cnl_5"){
              $('#cnl_4').focus();
            }
        });
    }

    //tombol kanan
    if (evt.keyCode == 39) {
       $(":focus").each(function() {
            if(this.id=="cnl_1"){
              $('#cnl_2').focus();
            }
            if(this.id=="cnl_2"){
              $('#cnl_3').focus();
            }
            if(this.id=="cnl_3"){
              $('#cnl_4').focus();
            }
            if(this.id=="cnl_4"){
              $('#cnl_5').focus();
            }
            if(this.id=="cnl_5"){
              $('#cnl_1').focus();
            }
        });
    }

      if (evt.keyCode == 40) {
       $(":focus").each(function() {
            if(this.id=="cnl_1"){
              $('#cnl_2').focus();
            }
            if(this.id=="cnl_2"){
              $('#cnl_3').focus();
            }
            if(this.id=="cnl_3"){
              $('#cnl_4').focus();
            }
            if(this.id=="cnl_4"){
              $('#cnl_5').focus();
            }
            if(this.id=="cnl_5"){
              $('#cnl_1').focus();
            }
        });
    }

  };


particle('particles-js');
akordion();
Slider(true,2500); 
});




myApp.onPageInit('view_tv', function(page) {

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 49) {
        mainView.router.loadPage('view_tv.html');
    }
    if (evt.keyCode == 50) {
        mainView.router.loadPage('view_tv_rcti.html');
    }
    if (evt.keyCode == 51) {
        mainView.router.loadPage('view_tv_global.html');
    }
    if (evt.keyCode == 52) {
        mainView.router.loadPage('view_tv_tvri.html');
    }
    if (evt.keyCode == 53) {
        mainView.router.loadPage('view_tv_inews.html');
    }
    //tombol kiri
    if (evt.keyCode == 37) {
       mainView.router.loadPage('view_tv_inews.html');
    }

    //tombol atas 
    if (evt.keyCode == 38) {
       mainView.router.loadPage('view_tv_inews.html');
    }

    //tombol kanan
    if (evt.keyCode == 39) {
       mainView.router.loadPage('view_tv_rcti.html');
    }

      if (evt.keyCode == 40) {
      mainView.router.loadPage('view_tv_rcti.html');
    }
    
  };


var chanel=$$('#id_chanel_view_tv').val();

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 49) {
        mainView.router.loadPage('view_tv.html');
    }
    if (evt.keyCode == 50) {
        mainView.router.loadPage('view_tv_rcti.html');
    }
    if (evt.keyCode == 51) {
        mainView.router.loadPage('view_tv_global.html');
    }
    if (evt.keyCode == 52) {
        mainView.router.loadPage('view_tv_tvri.html');
    }
    if (evt.keyCode == 53) {
        mainView.router.loadPage('view_tv_inews.html');
    }
    //tombol kiri
    if (evt.keyCode == 37) {
       mainView.router.loadPage('view_tv_inews.html');
    }

    //tombol atas 
    if (evt.keyCode == 38) {
       mainView.router.loadPage('view_tv_inews.html');
    }

    //tombol kanan
    if (evt.keyCode == 39) {
       mainView.router.loadPage('view_tv_rcti.html');
    }

      if (evt.keyCode == 40) {
      mainView.router.loadPage('view_tv_rcti.html');
    }
    
  };
var user = 'Guest';
chat(chanel, user);
particle('particles-js2');
akordion();
chat_view(chanel);
//setInterval(chat_view_reload(chanel),1000);
setInterval(function(){
chat_view_reload(chanel);
},5000);
});

myApp.onPageInit('channel_lain', function(page) {
particle('particles-js3');
akordion();
});

myApp.onPageInit('view_tv_rcti', function(page) {

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 49) {
        mainView.router.loadPage('view_tv.html');
    }
    if (evt.keyCode == 50) {
        mainView.router.loadPage('view_tv_rcti.html');
    }
    if (evt.keyCode == 51) {
        mainView.router.loadPage('view_tv_global.html');
    }
    if (evt.keyCode == 52) {
        mainView.router.loadPage('view_tv_tvri.html');
    }
    if (evt.keyCode == 53) {
        mainView.router.loadPage('view_tv_inews.html');
    }
    //tombol kiri
    if (evt.keyCode == 37) {
       mainView.router.loadPage('view_tv.html');
    }

    //tombol atas 
    if (evt.keyCode == 38) {
       mainView.router.loadPage('view_tv.html');
    }

    //tombol kanan
    if (evt.keyCode == 39) {
       mainView.router.loadPage('view_tv_global.html');
    }

      if (evt.keyCode == 40) {
      mainView.router.loadPage('view_tv_global.html');
    }
    
  };

var chanel=$$('#id_chanel_view_rcti').val();
var user = 'Guest';
chat(chanel, user);
particle('particles-js4');
akordion();
chat_view(chanel);
setInterval(function(){
chat_view_reload(chanel);
},5000);
});

myApp.onPageInit('view_tv_global', function(page) {

   document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 49) {
        mainView.router.loadPage('view_tv.html');
    }
    if (evt.keyCode == 50) {
        mainView.router.loadPage('view_tv_rcti.html');
    }
    if (evt.keyCode == 51) {
        mainView.router.loadPage('view_tv_global.html');
    }
    if (evt.keyCode == 52) {
        mainView.router.loadPage('view_tv_tvri.html');
    }
    if (evt.keyCode == 53) {
        mainView.router.loadPage('view_tv_inews.html');
    }
    //tombol kiri
    if (evt.keyCode == 37) {
       mainView.router.loadPage('view_tv_rcti.html');
    }

    //tombol atas 
    if (evt.keyCode == 38) {
       mainView.router.loadPage('view_tv_rcti.html');
    }

    //tombol kanan
    if (evt.keyCode == 39) {
       mainView.router.loadPage('view_tv_tvri.html');
    }

      if (evt.keyCode == 40) {
      mainView.router.loadPage('view_tv_tvri.html');
    }
    
  };

  var chanel=$$('#id_chanel_view_tv').val();
 /*$$('#enter_global').on('click', function () {    
    // proses input komentar
    alert(tekan);
  });*/

/* $("#enter_global").keypress(function(e){
  if(e.which == 13){alert('enter-press');
}});*/
var chanel=$$('#id_chanel_view_global').val();
var user = 'Guest';
chat(chanel, user);
particle('particles-js5');
akordion();
chat_view(chanel);
setInterval(function(){
chat_view_reload(chanel);
},5000);
});

myApp.onPageInit('view_tv_tvri', function(page) {

   document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 49) {
        mainView.router.loadPage('view_tv.html');
    }
    if (evt.keyCode == 50) {
        mainView.router.loadPage('view_tv_rcti.html');
    }
    if (evt.keyCode == 51) {
        mainView.router.loadPage('view_tv_global.html');
    }
    if (evt.keyCode == 52) {
        mainView.router.loadPage('view_tv_tvri.html');
    }
    if (evt.keyCode == 53) {
        mainView.router.loadPage('view_tv_inews.html');
    }
    //tombol kiri
    if (evt.keyCode == 37) {
       mainView.router.loadPage('view_tv_global.html');
    }

    //tombol atas 
    if (evt.keyCode == 38) {
       mainView.router.loadPage('view_tv_global.html');
    }

    //tombol kanan
    if (evt.keyCode == 39) {
       mainView.router.loadPage('view_tv_inews.html');
    }

      if (evt.keyCode == 40) {
      mainView.router.loadPage('view_tv_inews.html');
    }
    
  };


var chanel=$$('#id_chanel_view_tvri').val();
var user = 'Guest';
chat(chanel, user);
particle('particles-js6');
akordion();
chat_view(chanel);
setInterval(function(){
chat_view_reload(chanel);
},5000);
});

myApp.onPageInit('view_tv_inews', function(page) {
   document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 49) {
        mainView.router.loadPage('view_tv.html');
    }
    if (evt.keyCode == 50) {
        mainView.router.loadPage('view_tv_rcti.html');
    }
    if (evt.keyCode == 51) {
        mainView.router.loadPage('view_tv_global.html');
    }
    if (evt.keyCode == 52) {
        mainView.router.loadPage('view_tv_tvri.html');
    }
    if (evt.keyCode == 53) {
        mainView.router.loadPage('view_tv_inews.html');
    }
    
    //tombol kiri
    if (evt.keyCode == 37) {
       mainView.router.loadPage('view_tv_tvri.html');
    }

    //tombol atas 
    if (evt.keyCode == 38) {
       mainView.router.loadPage('view_tv_tvri.html');
    }

    //tombol kanan
    if (evt.keyCode == 39) {
       mainView.router.loadPage('view_tv.html');
    }

      if (evt.keyCode == 40) {
      mainView.router.loadPage('view_tv.html');
    }
    
  };

var chanel=$$('#id_chanel_view_inews').val();
var user = 'Guest';
chat(chanel, user);
particle('particles-js7');
akordion();
chat_view(chanel);
setInterval(function(){
chat_view_reload(chanel);
},5000);
});

function Slider(status,auto) {
 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: auto,
        autoplayDisableOnInteraction: false,
        loop: status
    });
};
function particle(id){
	/* config dom id (optional) + config particles params */
particlesJS(id, {
  particles: {
    color: '#fff',
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: 0.5,
    size: 4,
    size_random: true,
    nb: 90,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity:0.7,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 250
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: 'grab',
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove" (particles)
        nb: 4
      }
    } 
  },
  /* Retina Display Support */
  retina_detect: true
});
	}



function akordion() {
 
    activeItem = $("#accordion li:first");
    $(activeItem).addClass('active');
 
    $("#accordion li").hover(function(){
        $(activeItem).animate({width: "50px"}, {duration:300, queue:false});
        $(this).animate({width: "450px"}, {duration:300, queue:false});
        activeItem = this;
    });
 

}

function tanggalsimpan() {
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;
    var tgl = year +'-'+months[month]+'-'+day;
    return tgl;
}

function waktusimpan() {
    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = today.getMinutes();
    var curr_second = today.getSeconds();
    var jam = "";
    var menit = "";
    var detik = "";
        jam = curr_hour;
    if(curr_minute.length<2){
        menit = "0"+curr_minute; 
    }else{
        menit = curr_minute;
    }
    if(curr_second.length<2){
        detik = "0"+curr_second; 
    }else{
        detik  = curr_second;
    }

    var waktu_tampil = jam +':'+menit;
    return waktu_tampil;
}



function chat(chanel_tv, user_tv) {
// Conversation flag
var conversationStarted = false;
 
// Init Messages
var myMessages = myApp.messages('.messages', {
  autoLayout:true
});
 
// Init Messagebar
var myMessagebar = myApp.messagebar('.messagebar');
// Handle message
$$('.messagebar .link').on('click', function () {
  // Message text
  var messageText = myMessagebar.value().trim();
  // Exit if empy message
  if (messageText.length === 0) return;
 
  // Empty messagebar
  myMessagebar.clear()
 
  // Random message type
  var messageType = (['sent', 'received'])[1];
 
  // Avatar and name for received message
  var avatar, name;
  if(messageType === 'received') {
    avatar = 'img/icon.png';
    name = user_tv;
  }
  // Add message
  myMessages.addMessage({
    // Message text
    text: messageText,
    // Random message type
    type: messageType,
    // Avatar and name:
    avatar: avatar,
    name: name,
    // Day
    day: !conversationStarted ? 'Today' : false,
    time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
  })
 
  // Update conversation flag
  conversationStarted = true;

  /*alert(chanel_tv+","+messageText+","+user_tv);*/

  komentar_func(chanel_tv,messageText,user_tv);
});

 $(".enter_tv").keypress(function(e){
  if(e.which == 13){
  // Message text
  var messageText = myMessagebar.value().trim();
  // Exit if empy message
  if (messageText.length === 0) return;
 
  // Empty messagebar
  myMessagebar.clear()
 
  // Random message type
  var messageType = (['sent', 'received'])[1];
 
  // Avatar and name for received message
  var avatar, name;
  if(messageType === 'received') {
    avatar = 'img/icon.png';
    name = user_tv;
  }
  // Add message
  myMessages.addMessage({
    // Message text
    text: messageText,
    // Random message type
    type: messageType,
    // Avatar and name:
    avatar: avatar,
    name: name,
    // Day
    day: !conversationStarted ? 'Today' : false,
    time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
  })
 
  // Update conversation flag
  conversationStarted = true;

  /*alert(chanel_tv+","+messageText+","+user_tv);*/

  komentar_func(chanel_tv,messageText,user_tv);

}});


};
function komentar_func(chanel,text_komen,user) {
    var tampung_koment = "";
    var waktu_simpan = waktusimpan();
    var tanggal = tanggalsimpan();
    var time = tanggal+' '+waktu_simpan;
   /* alert(chanel+","+text_komen+","+user+","+time);*/
    $$.ajax({
        url: url_base+'tivi/tivi_add_komen?chanel='+chanel+'&waktu='+time+'&komen='+text_komen+'&user='+user+'',
        dataType: 'json',
        success: function(data) {
            if(data=="berhasil"){
                    /*myApp.alert('berhasil Kirim Komentar');*/
            }else{
                    myApp.alert('Gagal Kirim Komentar');
            }                
        },
        error: function() {
            myApp.hideIndicator();
        }
    });
}

function chat_view(chanel_tv) {
  var conversationStarted = false;
 
// Init Messages
var myMessages = myApp.messages('.messages', {
  autoLayout:true
});

$$.ajax({
          url: url_base+'tivi/tivi_view_komen?chanel='+chanel_tv+'',
          dataType: 'json',
         success: function(data) {
            $$.each(data , function(k, v) {
                  //alert(v.komentar);
                  jumlah_tampil_1=Number(jumlah_tampil_1)+1;
                    var messageType = "";
 
                    // Avatar and name for received message
                    var avatar, name;
                    messageType='sent';
                      avatar = 'img/icon.png';
                      name = 'Guest';
                    
                    // Add message
                    myMessages.addMessage({
                      // Message text
                      text: v.komentar,
                      // Random message type
                      type: messageType,
                      // Avatar and name:
                      avatar: avatar,
                      name: name,
                      // Day
                      day: !conversationStarted ? 'Today' : false,
                      time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
                    });

                });
             },
            error: function() {
              myApp.hideIndicator();
           }
     });
  };

  function chat_view_reload(chanel_tv) {
    //alert("testy");
  var conversationStarted = false;
 
// Init Messages
var myMessages = myApp.messages('.messages', {
  autoLayout:true
});

$$.ajax({
          url: url_base+'tivi/tivi_view_komen?chanel='+chanel_tv+'',
          dataType: 'json',
         success: function(data) {
            $$.each(data , function(k, v) {
                  //alert(v.komentar);
                  jumlah_tampil_2=Number(jumlah_tampil_2)+1;
                   
                });
             },
            error: function() {
              myApp.hideIndicator();
           }
     });


  /*jeson reloas*/
  if(jumlah_tampil_2>jumlah_tampil_1){
  var tampung_jumalah1=jumlah_tampil_1;
  var tampung_jumalah2=jumlah_tampil_2;

  jumlah_tampil_1=0;
  jumlah_tampil_2=0;
  $$.ajax({
          url: url_base+'tivi/tivi_view_komen_reload?chanel='+chanel_tv+'&bawah='+tampung_jumalah1+'&atas='+tampung_jumalah2+'',
          dataType: 'json',
         success: function(data) {
            $$.each(data , function(k, v) {
                  //alert(v.komentar);
                  jumlah_tampil_1=Number(jumlah_tampil_1)+1;
                    var messageType = "";
 
                    // Avatar and name for received message
                    var avatar, name;
                    messageType='sent';
                      avatar = 'img/icon.png';
                      name = 'Guest';
                    
                    // Add message
                    myMessages.addMessage({
                      // Message text
                      text: v.komentar,
                      // Random message type
                      type: messageType,
                      // Avatar and name:
                      avatar: avatar,
                      name: name,
                      // Day
                      day: !conversationStarted ? 'Today' : false,
                      time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
                    });
                });
             },
            error: function() {
              myApp.hideIndicator();
           }
     });
}
/*akhir jes0n reload*/

  };



/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function() {
    $$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-left').on('close', function() {
    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});

mainView.router.loadPage('home.html');
