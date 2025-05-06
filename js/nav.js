$(document).ready(function () {
  let hideTimeout;

  $('.dropdown1, .navsub.first').hover(
    function () {
      clearTimeout(hideTimeout);
      $('.navsub.second').stop(true, true).slideUp(); // 다른 메뉴 닫기
      $('.navsub.first').stop(true, true).slideDown();
    },
    function () {
      hideTimeout = setTimeout(function () {
        $('.navsub.first').stop(true, true).slideUp();
      }, 200);
    }
  );

  $('.dropdown2, .navsub.second').hover(
    function () {
      clearTimeout(hideTimeout);
      $('.navsub.first').stop(true, true).slideUp(); // 다른 메뉴 닫기
      $('.navsub.second').stop(true, true).slideDown();
    },
    function () {
      hideTimeout = setTimeout(function () {
        $('.navsub.second').stop(true, true).slideUp();
      }, 200);
    }
  );
});
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.os-header');
  let hoverTimeout;

  // 모든 드롭다운/서브 포함
  const hoverTargets = document.querySelectorAll('.dropdown1, .dropdown2, .navsub');

  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimeout);
      header.classList.add('active');

      if (el.classList.contains('dropdown1')) {
        $('.navsub.second').stop(true, true).slideUp();
        $('.navsub.first').stop(true, true).slideDown();
      } else if (el.classList.contains('dropdown2')) {
        $('.navsub.first').stop(true, true).slideUp();
        $('.navsub.second').stop(true, true).slideDown();
      }
    });

    el.addEventListener('mouseleave', () => {
      hoverTimeout = setTimeout(() => {
        $('.navsub.first, .navsub.second').stop(true, true).slideUp();
        header.classList.remove('active');
      }, 200);
    });
  });
});
