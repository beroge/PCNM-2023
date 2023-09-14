jQuery(document).ready(function() {

  jQuery('.trigger').hover(handleMouseOver, handleMouseOut);

      const originalContent = jQuery('.target').html();
      const targetContent = {
        1: '<h3>Performance Computers, LLC is a leading computer repair business dedicated to providing exceptional services to individuals and businesses alike. With a team of highly skilled technicians, we offer reliable and efficient solutions to address all your computer-related issues.</h3>',
        2: '<h3>At Performance Computers, LLC, we specialize in providing efficient and reliable tablet and smartphone repair services. Our skilled technicians are equipped to handle a wide range of issues, ensuring that your devices are swiftly restored to their optimal performance. Trust us to deliver exceptional customer service and top-notch repairs, keeping your tablets and smartphones running smoothly.</h3>',
        3: '<h3>Performance Computers, LLC takes pride in offering expert laptop repair services. As a trusted name in the industry, we understand the value of your device and the urgency of getting it back in shape. Our dedicated team of technicians is well-versed in diagnosing and resolving various laptop issues, providing quick and effective solutions to keep your device running at its best. Experience reliable and professional laptop repairs tailored to meet your needs with us.</h3>',
        4: '<h4>At Performance Computers, LLC, we excel in providing top-tier gaming console repair services to keep your gaming experience uninterrupted. Our skilled technicians are passionate about gaming and well-versed in fixing a wide range of console issues. Whether it\'s hardware glitches or connectivity problems, we have the expertise to tackle them all. Trust us to revive your gaming console efficiently, so you can immerse yourself back into the gaming world with confidence. Your satisfaction is our priority, and we are committed to delivering exceptional gaming console repair solutions at Performance Computers, LLC.</h4>',
        5: '<h4>Our ultrasonic cleaning solution is here to save the day</h4><hr><h4>With the power of high frequency sound waves, our ultrasonic cleaner can deep clean even the toughest to reach crevices in your electronics. Whether it\'s coffee stains on your laptop, sticky residue on your phone, or greasy fingerprints on your tablet, our cleaner will effectively remove all impurities</h4><hr><h4>Not only is our solution quick and effective, but it\'s also safe and gentle on all types of electronics. Our ultrasonic cleaner is non-abrasive and non-toxic, ensuring that your devices are protected while they get a deep clean</h4>',
        6: '<h2>We repair:</h2><ul><li>Audio Jack Replacements or Repairs</li><li>Battery Replacements or Repairs (if the battery is soldered in)</li><li>Camera Replacements or Repairs</li><li>Charging Port Replacements or Repair</li><li>Home Button Replacements or Repair</li><li>Microphone Replacements or Repairs</li><li>Power Button Replacements or Repairs</li><li>Speaker Replacements or Repairs</li><li>Volume Button Replacements or Repairs</li></ul>'
      };

      let isFadingOut = false;

      function handleMouseOver() {
        if (isFadingOut) return;
        const triggerNumber = jQuery(this).data('trigger');
        const target = jQuery('.target');
        target.css('opacity', 0);
        isFadingOut = true;

        setTimeout(() => {
          target.html(targetContent[triggerNumber]);
          target.css('opacity', 1);
          isFadingOut = false;
        }, 500);

      }


      function handleMouseOut() {
        if (isFadingOut) return;
        const target = jQuery('.target');
        target.css('opacity', 0);

        setTimeout(() => {
          target.html(originalContent);
          target.css('opacity', 1);
        }, 500);
      }

  function activateData(dataClassToShow, linkWidth) {
    jQuery(".data1, .data2, .data3, .data4, .data5")
      .removeClass("active")
      .css("display", "none");
      jQuery(dataClassToShow).css({
  display: 'flex',
  'flex-direction': 'column'
});

    setTimeout(function () {
      jQuery(dataClassToShow).addClass("active");
    }, 1);

    jQuery("#rotmenu a").css("width", "190px");
    jQuery(this).css("width", linkWidth);
  }

  function setActiveLink(link) {
    jQuery("#rotmenu a").css("width", "190px");
    link.css("width", "200px");
  }

  // Extend the first link on page load
  var $firstLink = jQuery(".link1");
  activateData(".data1", "200px");
  setActiveLink($firstLink);
  jQuery(".rotator, #rotmenu").css("background-color", "blue");

  $firstLink.click(function () {
    activateData(".data1", "200px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "blue");
  });

  jQuery(".link2").click(function () {
    activateData(".data2", "200px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "blue");
  });

  jQuery(".link3").click(function () {
    activateData(".data3", "260px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "blue");
  });
  jQuery(".link4").click(function () {
    activateData(".data4", "260px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "blue");
  });

  jQuery(".link5").click(function () {
    activateData(".data5", "260px");
    setActiveLink(jQuery(this));
    jQuery(".rotator, #rotmenu").css("background-color", "blue");
  });
  jQuery(".thumbnail").click(function() {
    var imageUrl = jQuery(this).data("image");
    openModal(imageUrl);
});

// Photo modal
function openModal(imageUrl) {
  jQuery("#myModal").fadeIn(800); // Use fadeIn with easing
  jQuery("#modalImage").attr("src", imageUrl);
}

function closeModal() {
  jQuery("#myModal").fadeOut(900, function() {
      jQuery("#modalImage").attr("src", ""); // Clear image source when faded out
  });
}

// Attach event handlers using event delegation
jQuery(document).on("click", ".rotator img", function() {
  var imageUrl = jQuery(this).data("image");
  openModal(imageUrl);
});

jQuery(document).on("click", ".close", function() {
  closeModal();
});

jQuery(document).on("click", "#myModal", function(event) {
  if (event.target === this) {
      closeModal();
  }
});

// List effects

const listItems = jQuery("#list li");
let currentIndex = 0;
const startButton = jQuery("#listEffect a");

function fadeInNextListItem() {
  if (currentIndex >= listItems.length) {
    return;
  }

  const currentItem = listItems.eq(currentIndex);

  // Use jQuery's animate method with linear easing to fade in the current item
  currentItem.animate({
    opacity: 1
  }, {
    duration: 1300,
    easing: 'linear',
    complete: function() {
      // Animation complete callback
      const spanElement = currentItem.find("span");
      typewriterEffect(spanElement);
      currentIndex++;
      fadeInNextListItem();
    }
  });
}

function typewriterEffect(element) {
  element.css("opacity", 1); // Make the span visible
  element.addClass("typewriter-text");
}

startButton.on("click", function() {
  currentIndex = 0;
  fadeInNextListItem();
});

// have button with a class of btn reveal popouts with a class of ess by removing the class hidethis  when it is clicked
jQuery(".btn1, .btn2, .btn3, .btn4").click(function() {
  if (jQuery(this).hasClass("btn1")) {
    jQuery(".ess").removeClass("hidethis");
    jQuery(".adv, .prem").addClass("hidethis");
  } else if (jQuery(this).hasClass("btn2")) {
    jQuery(".adv, .ess").removeClass("hidethis");
    jQuery(".prem").addClass("hidethis");
  } else if (jQuery(this).hasClass("btn3")) {
    jQuery(".prem, .adv, .ess").removeClass("hidethis");
  } else if (jQuery(this).hasClass("btn4")) {
    jQuery(".prem, .adv, .ess").removeClass("hidethis");
    jQuery(".ser").addClass("hidethis");
  }
});



// accordian

var popout = {
  html: {
     popouts: document.querySelectorAll('.popout')
  },
  popouts: [],
  init: function(){
     this.getPopouts()
     this.addEvents()
     this.closeAll()
  },
  getPopouts: function(){
     this.popouts = []
     var popouts = document.querySelectorAll('.popout')
     for(var i = 0; i < popouts.length; i++){
        this.popouts.push({
           container: popouts[i],
           title: popouts[i].getElementsByClassName('title')[0],
           text: popouts[i].getElementsByClassName('text')[0]
        })
     }
  },
  addEvents: function(){
     var that = this
     for(var popout of this.popouts){
        popout.title.addEventListener('click', function(){
           that.closeAll()
           this.parentElement.classList.toggle('close')
        })
     }
  },
  open: function(id){
     this.popouts[id].container.classList.remove('close')
  },
  close: function(id){
     this.popouts[id].container.classList.add('close')
  },
  closeAll: function(){
     for(var popout of this.popouts){
        popout.container.classList.add('close')
     }
  },
  openAll: function(){
     for(var popout of this.popouts){
        popout.container.classList.remove('close')
     }
  }
}

popout.init()

setTimeout(function(){ popout.close(0) }, 500)

});

// Web Development page scripts

/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/

window.onload = function () {
  const particles = Particles.init({
    selector: ".background",
    color: ["#03dac6", "#ff0266", "#000000"],
    maxParticles: 20,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#faebd7", "#03dac6", "#ff0266"],
          maxParticles: 1,
          connectParticles: false,
          density: {
            enable: true,
            value_area: 2                                  // Adjust the value to control density
          }
        }
      }
    ]
  });
};


class NavigationPage {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;
    $(".nav-tab").click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
    $(window).resize(() => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop =
      $(element.attr("href")).offset().top - this.tabContainerHeight + 1;
    $("html, body").animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = $(window).scrollTop();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkHeaderPosition() {
    const headerHeight = 75;
    if ($(window).scrollTop() > headerHeight) {
      $(".nav-container").addClass("nav-container--scrolled");
    } else {
      $(".nav-container").removeClass("nav-container--scrolled");
    }
    let offset =
      $(".nav").offset().top +
      $(".nav").height() -
      this.tabContainerHeight -
      headerHeight;
    if (
      $(window).scrollTop() > this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".nav-container").addClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-first");
      $(".nav-container").addClass("nav-container--top-second");
    } else if (
      $(window).scrollTop() < this.lastScroll &&
      $(window).scrollTop() > offset
    ) {
      $(".nav-container").removeClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-second");
      $(".nav-container-container").addClass("nav-container--top-first");
    } else {
      $(".nav-container").removeClass("nav-container--move-up");
      $(".nav-container").removeClass("nav-container--top-first");
      $(".nav-container").removeClass("nav-container--top-second");
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $(".nav-tab").each(function () {
      let id = $(this).attr("href");
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom =
        $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if (
        $(window).scrollTop() > offsetTop &&
        $(window).scrollTop() < offsetBottom
      ) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css("width");
      left = this.currentTab.offset().left;
    }
    $(".nav-tab-slider").css("width", width);
    $(".nav-tab-slider").css("left", left);
  }
}

new NavigationPage();
/* Credit and Thanks:
Matrix - Particles.js;
SliderJS - Ettrics;
Design - Sara Mazal Web;
Fonts - Google Fonts
*/


