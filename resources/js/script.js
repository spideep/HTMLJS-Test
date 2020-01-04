let ready = (fn) => {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

let submitForm = (form) => {
    let data = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', '/my/url', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
}

let closepopup = (popup) => {
    popup.querySelector('.popup__content').innerHTML = "";
    popup.style.display = 'none';
}

let popup = (link, control, formid) => {
    let bc = link.getBoundingClientRect();
    let fakecontrol = link.parentNode.cloneNode(true);

    let popup = document.getElementById('popup');

    while (popup.querySelector('.popup__content').firstChild)
        popup.querySelector('.popup__content').removeChild(popup.querySelector('.popup__content').firstChild);

    popup.classList.toggle('popup--editfield');
    popup.querySelector('.popup__content').appendChild(fakecontrol);

    // Styling.
    popup.style.left = bc.x + bc.width + 'px';
    popup.style.display = 'block';
    popup.style.top = (bc.y - 10) + 'px';

    /* Set behaviors */
    let form = document.getElementById(formid);

    // Popup buttons.
    let save_btn = popup.querySelector('.button--save');
    let cancel_btn = popup.querySelector('.button--cancel');

    save_btn.addEventListener('click', (e, i) => {
        let field_id = '#' + popup.querySelector('.popup__content .form__input').id;
        let field_value = popup.querySelector('.popup__content .form__input').value;

        form.querySelector(field_id).value = field_value;
        closepopup(popup);
        // submitForm(form);
    });

    cancel_btn.addEventListener('click', (e, i) => {
        closepopup(popup);
    });
    // })

}

let editfield = (field) => {
    // openPopup();
}


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

    // Field edit links.
    let forms = document.querySelectorAll('.form');
    Array.prototype.forEach.call(forms, (el, i) => {
        let form = el;
        let editlinks = el.querySelectorAll('.form-control__edit');
        Array.prototype.forEach.call(editlinks, (el, i) => {
            el.addEventListener('click', (e) => {
                popup(el, el.previousElementSibling, form.id);
            });
        })
    });

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