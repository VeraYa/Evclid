document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.steps__link').forEach(function (stepsLink) {
    stepsLink.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how__content').forEach(function (howContent) {
        howContent.classList.remove('how__content__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('how__content__active')

      document.querySelectorAll('.steps__link').forEach(function (stepsLink) {
        stepsLink.classList.remove('steps__link__active')
      })
      event.currentTarget.classList.add('steps__link__active')
    })
  })
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector('.close-menu').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })

  document.querySelector('.search').addEventListener('click', function () {
    document.querySelector('.search-form').classList.toggle('open')
  })
  document.querySelector('.closed-search-btn').addEventListener('click', function() {
    document.querySelector('.search-form').classList.toggle('open')
  })
})

// swiper

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 300,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// accordion

$(function () {
  $("#accordion").accordion({
    heightStyle: "content",
    collapsible: true,
    active: false,
  });
});
