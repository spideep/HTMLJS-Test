function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(() => {
    // Resizing input inline text controls.
    let elements = document.querySelectorAll('.form-row--inline input.form__input[type="text"]');
    Array.prototype.forEach.call(elements, function (el, i) {
        el.parentNode.querySelectorAll('.form__text')[0].innerHTML = el.value;
    });

    // Form edit button.
    let editlinks = document.querySelectorAll('.infocard__link');
    Array.prototype.forEach.call(editlinks, (el, i) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            el.parentNode.classList.toggle('form--noedit');
        })
    });

    // Form cancel button.
    let cancelbuttons = document.querySelectorAll('.form .form__actions .form__cancel');
    Array.prototype.forEach.call(cancelbuttons, (el, i) => {
        el.addEventListener('click', (e) => {
            el.parentNode.parentNode.classList.toggle('form--noedit');
        })
    })

    let activateTab = (e) => {
        // TODO: Add an effect transition here. Let's make this pretty. 😉

        if (e.classList.contains('horizontal-menu__link--active'))
            return;

        let hm = e.parentNode.parentNode;

        // Deactivate active items.
        let activeitems = hm.querySelectorAll('.horizontal-menu__link--active');
        Array.prototype.forEach.call(activeitems, (el, i) => {
            el.parentNode.classList.remove('horizontal-menu__item--active');
            el.classList.remove('horizontal-menu__link--active');
        });

        // Activate clicked item and its parent.
        e.classList.add('horizontal-menu__link--active');
        e.parentNode.classList.add('horizontal-menu__item--active');

        // Make infocards visible.
        let eid = e.parentNode.id;
        let infocards = hm.nextElementSibling.querySelectorAll('.infocard');
        Array.prototype.forEach.call(infocards, (el, i) => {
            if (!el.classList.contains(eid)) {
                el.classList.remove('infocard--active');
            } else {
                el.classList.add('infocard--active');
            }
        });
    }

    // Horizontal menu behavior.
    let hormenus = document.querySelectorAll('.horizontal-menu');
    Array.prototype.forEach.call(hormenus, (el, i) => {
        let links = el.querySelectorAll('.horizontal-menu__link');
        Array.prototype.forEach.call(links, (el, i) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                activateTab(e.target);
            });
        })
    });
})