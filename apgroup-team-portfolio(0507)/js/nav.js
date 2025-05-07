document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.os-header');
  let hoverTimeout;

  const hoverTargets = document.querySelectorAll('.dropdown1, .dropdown2, .dropdown3, .navsub');

  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => {
      clearTimeout(hoverTimeout);
      header.classList.add('active');

      if (el.classList.contains('dropdown1')) {
        $('.navsub.second, .navsub.third').stop(true, true).slideUp();
        $('.navsub.first').stop(true, true).slideDown();
      } else if (el.classList.contains('dropdown2')) {
        $('.navsub.first, .navsub.third').stop(true, true).slideUp();
        $('.navsub.second').stop(true, true).slideDown();
      } else if (el.classList.contains('dropdown3')) {
        $('.navsub.first, .navsub.second').stop(true, true).slideUp();
        $('.navsub.third').stop(true, true).slideDown();
      }
    });

    el.addEventListener('mouseleave', () => {
      hoverTimeout = setTimeout(() => {
        $('.navsub.first, .navsub.second, .navsub.third').stop(true, true).slideUp();
        header.classList.remove('active');
      }, 200);
    });
  });
});
