const main_swiper = new Swiper("main", {
  wrapperClass:"container",
  slideClass:"area",
  direction:"vertical",
  speed:800,
  mousewheel:{
      enabled:true,
  },
 
});
const swiper = new Swiper('#main_view .swiper', {
    // Optional parameters
   
    loop: true,
    
    autoplay: {
        delay: 2000,
      },

  
    // If we need pagination
    pagination: {
        el: ".main_pagination",
        type: 'custom',
       
        renderCustom: function (swiper, current, total) {
          return `<span class="current">0${current}</span> <span class="total">0${total}</span>`;
        }
      },
     
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const doctorSwiper = new Swiper('#doctor_intro .swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     // And if we need scrollbar
     scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // Initialize Swiper
  
    var review = new Swiper("#review .before", {
      spaceBetween: 30,
      /*autoplay: {
        delay: 2500,
      },*/
      loop: true,
      effect: "fade",
      speed: 800,
      
    });
    var review2 = new Swiper("#review .after", {
      spaceBetween: 30,
       autoplay: {
        delay: 2000,
      },
      loop: true,
      effect: "fade",
      speed: 800,
      
    });
    review.controller.control=review2;
    review2.controller.control=review;
    