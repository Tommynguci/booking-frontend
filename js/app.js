// Show Search Suggest
$('.booking__input-text').focus( function() {
    $('.header__search-suggest').fadeIn();
});
$('.booking__input-text').blur( function() {
    $('.header__search-suggest').fadeOut();
});

// Show Change Languages
const btnChangeLanguages = document.querySelector('.header__nav-language');
const changeLanguagesOptions = document.querySelector('.change__languages');

function showChangLanguages() {
    changeLanguagesOptions.classList.toggle('show');
}
btnChangeLanguages.addEventListener('click', showChangLanguages);