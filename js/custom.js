document.addEventListener("DOMContentLoaded", function(){
    var ll = $('.ladi-section-background, .ladi-image-background, .ladi-button-background, .ladi-headline, .ladi-video-background, .ladi-overlay, .ladi-countdown-background, .ladi-box, .ladi-frame-background, .ladi-banner, .ladi-form-item-background, .ladi-gallery-view-item, .ladi-gallery-control-item, .ladi-spin-lucky-screen, .ladi-spin-lucky-start, .ladi-list-paragraph ul li');
    var lh = []
    var wscroll = 0;
    var wh = $(window).height();
    
    // ll.addClass("loaded");

    function update_offsets(){
      ll.each(function(){
        var x = $(this).offset().top;
        lh.push(x);
      });
    };
    
    function lazy() {
      wscroll = $(window).scrollTop();
      for(i = 0; i < lh.length; i++){
        if(lh[i] <= wscroll + (wh - 200)){
          ll.eq(i).addClass('loaded');
        };
      };
    };
    
    // Page Load
    update_offsets();
    lazy();
    
    $(window).on('scroll',function(){
      lazy();
    });

    // Countdown
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }
    
    function initializeClock(id, endtime) {
      var clock = document.getElementById(id);
      // var daysSpan = clock.querySelector(".days");
      var hoursSpan = clock.querySelector(".hours");
      var minutesSpan = clock.querySelector(".minutes");
      var secondsSpan = clock.querySelector(".seconds");
    
      function updateClock() {
        var t = getTimeRemaining(endtime);
    
        if (t.total <= 0) {
          clearInterval(timeinterval);
          var deadline = new Date(Date.parse(new Date()) + 60 * 15 * 1000);
          initializeClock("countdown", deadline);
          initializeClock("countdown1", deadline);
          initializeClock("countdown2", deadline);
          initializeClock("countdown3", deadline);
        }
    
        // daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
      }
    
      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    }
    
    var deadline = new Date(Date.parse(new Date()) + 60 * 15 * 1000);
    initializeClock("countdown", deadline);
    initializeClock("countdown1", deadline);
    initializeClock("countdown2", deadline);
    initializeClock("countdown3", deadline);
    
});