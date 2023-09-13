
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__navigation');

burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
});

  // Modal
  const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modal2 = document.querySelector('.form'),
  modalCloseBtn = document.querySelector('[data-close]');
  modalTrigger.forEach(btn => {
  btn.addEventListener('click', function() {
	modal.classList.add('show');
	  modal.classList.remove('hide');
    modal2.classList.add("tr");
	  // Либо вариант с toggle - но тогда назначить класс в верстке
	 //document.body.style.overflow = 'hidden';
   
  });
});

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  // Либо вариант с toggle - но тогда назначить класс в верстке
 document.body.style.overflow = '';
}
modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
	  closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modal.classList.contains('show')) { 
	  closeModal();
  }
});

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
	




togle_btn = document.querySelector('.togle'),
togle_block = document.querySelector('.togle_block');
function closeTogle() {
  togle_block.classList.toggle('hide');
}
togle_btn.addEventListener('click', closeTogle);


