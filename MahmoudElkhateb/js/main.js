$(function () {
  "use strict";
  //creating new vue instance
  var app = new Vue({
    //name of the app
    el: "#bebo-app",
    // data inside the app
    data: {
      formErrors: [],
      message: null,
      maxChars: 20,
    },
    methods: {
      validateText: function (e) {
        this.formErrors = []; // Empty Errors to start Fresh
        //validate Message
        if (this.message && this.message.length < this.maxChars) {
          this.formErrors.push("Message Is Too Short");
        }
        // if no error found return true
        if (!this.formErrors.length) {
          return true;
        }
        e.preventDefault();
      },
    },
  });
  // geting data from json file
  $.getJSON("Testi_Data.json", function (data) {
    console.log(data);
    var content = "";
    //looping on Data
    for (var x in data) {
      //showing data in HTML
      content +=
        "<div class= bebo>" +
        "<h4>" +
        data[x].first_name +
        " " +
        data[x].last_name +
        "</h4>" +
        "<span>" +
        data[x].date +
        "</span>" +
        "<p>" +
        data[x].opinion +
        "</p>" +
        "</div>";
    }
    $(".testi-content").html(content);
  });

  $('.Testimonials button').click(function(){
    $('body, html').animate({
            
        // scrollTop = divId.offset().top
        
        scrollTop : $('.our-form').offset().top
        
    }, 1500);
  });
  //triger MixItUp

  $("#container").mixItUp();

  //add class active wihle clicking

  $(".about-us .bebo li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // hide placeholder on focus and show it on blur
  var placeAttr = "";
  $("[placeholder]")
    .focus(function () {
      placeAttr = $(this).attr("placeholder");

      $(this).attr("placeholder", "");
    })
    .blur(function () {
      $(this).attr("placeholder", placeAttr);
    });

     // scroll to top button 

     var scrollBottom = $("#scroll-top");
        $(window).scroll(function () {
        if ($(this).scrollTop() >= 700) {
            scrollBottom.show();
        } else {
            scrollBottom.hide();
        }
    });
    scrollBottom.click(function () {
        'use strict';
        $("html,body").animate({scrollTop: 0}, 1000);
            
    });
});
