function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    // Resizing input inline text controls
    let elements = document.querySelectorAll('.form-row--inline input.form__input[type="text"]');
    Array.prototype.forEach.call(elements, function (el, i) {
        el.parentNode.querySelectorAll('.form__text')[0].innerHTML = el.value;
    });

    // Form edit button.
    let editlinks = document.querySelectorAll('.infocard__link');
    Array.prototype.forEach.call(editlinks, (el, i) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            el.parentNode.querySelectorAll('form')[0].classList.toggle('form--noedit');
        })
    })
})