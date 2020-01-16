let person = {
	firstname: 'Jessica',
	lastname: 'Parker',
	address: 'Newport Beach, CA',
	phonenumber: '(949) 325-68594',
	website: 'www.seller.com'
}

let ready = (fn) => {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

let submitForm = (form) => {
	/* TODO: Update info using AJAX.
	let data = new FormData(form);
	let request = new XMLHttpRequest();
	request.open('POST', '/my/url', true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.send(data);
	*/

	// Update labels.
	// Alternative: could be filled with AJAX given data.
	let form__inputs = form.querySelectorAll('.form__input');
	Array.prototype.forEach.call(form__inputs, (e, i) => {
		let target_id = '#' + e.id + '-label';
		if (document.querySelector(target_id)) {
			document.querySelector(target_id).innerHTML = e.value;
		}
	})
}

let closepopup = (popup) => {
	popup.querySelector('.popup__content').innerHTML = "";
	popup.classList.remove('popup--active');
}

let popup = (link, formid) => {
	let bc = link.getBoundingClientRect();
	let fakecontrol = link.parentNode.cloneNode(true);

	let popup = document.getElementById('popup');
	while (popup.querySelector('.popup__content').firstChild)
		popup.querySelector('.popup__content').removeChild(popup.querySelector('.popup__content').firstChild);

	popup.classList.toggle('popup--editfield');
	popup.querySelector('.popup__content').appendChild(fakecontrol);

	// Styling.
	popup.style.left = bc.x + bc.width + 'px';
	popup.classList.add('popup--active');
	popup.style.top = (bc.y - 10) + 'px';

	/* Set behaviors */
	let form = document.getElementById(formid);

	// Popup buttons.
	let save_btn = popup.querySelector('.button--save');
	let cancel_btn = popup.querySelector('.button--cancel');

	save_btn.addEventListener('click', (e, i) => {
		let field_ids = popup.querySelectorAll('.popup__content .form__input');
		Array.prototype.forEach.call(field_ids, (el, i) => {
			let field_id = '#' + el.id;
			let field_value = popup.querySelector(field_id).value;
			form.querySelector(field_id).value = field_value;
			if (form.querySelector(field_id).parentNode.querySelector('.form__text')) {
				form.querySelector(field_id).parentNode.querySelector('.form__text').innerHTML = field_value;
			}
		});

		closepopup(popup);
		submitForm(form);
	});

	cancel_btn.addEventListener('click', (e, i) => {
		closepopup(popup);
	});

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

let prefill = (person) => {
	document.querySelector('#firstname-label').innerHTML = person.firstname;
	document.querySelector('#firstname').value = person.firstname;
	document.querySelector('#firstname').parentNode.querySelector('.form__text').innerHTML = person.firstname;

	document.querySelector('#lastname-label').innerHTML = person.lastname;
	document.querySelector('#lastname').value = person.lastname;
	document.querySelector('#lastname').parentNode.querySelector('.form__text').innerHTML = person.lastname;

	document.querySelector('#phonenumber-label').innerHTML = person.phonenumber;
	document.querySelector('#phonenumber').value = person.phonenumber;
	document.querySelector('#phonenumber').parentNode.querySelector('.form__text').innerHTML = person.phonenumber;

	document.querySelector('#citystate-zip-label').innerHTML = person.address;
	document.querySelector('#citystate-zip').value = person.address;
	document.querySelector('#citystate-zip').parentNode.querySelector('.form__text').innerHTML = person.address;

	document.querySelector('#website').value = person.website;
	document.querySelector('#website').parentNode.querySelector('.form__text').innerHTML = person.website;
}

/* Tooltip */
let showToolTip = (el) => {
	console.log(el);


}

ready(() => {

	var popupstatus = false;
	prefill(person);

	// Form edit button.
	let editlinks = document.querySelectorAll('.infocard__link');
	Array.prototype.forEach.call(editlinks, (el, i) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			el.parentNode.classList.toggle('form--noedit');
		})
	});

	let forms = document.querySelectorAll('.form');
	Array.prototype.forEach.call(forms, (el, i) => {
		let form = el;

		// Field edit links.
		let editlinks = form.querySelectorAll('.form-control__edit');
		Array.prototype.forEach.call(editlinks, (el, i) => {
			let field__value = el.parentNode.querySelector('.form__input').value;
			el.parentNode.querySelector('.form__text').innerHTML = field__value;
			el.addEventListener('click', (e) => popup(el, form.id));
		});

		// Form save button.
		let savebuttons = form.querySelectorAll('.form__actions .form__save');
		Array.prototype.forEach.call(savebuttons, (el, i) => {
			el.addEventListener('click', (e) => {
				let form = el.parentNode.parentNode;

				let fn_value = form.querySelector('#firstname').value;
				form.querySelector('#firstname').parentNode.querySelector('.form__text').innerHTML = fn_value;

				let ln_value = form.querySelector('#lastname').value;
				form.querySelector('#lastname').parentNode.querySelector('.form__text').innerHTML = ln_value;


				let fields = form.querySelectorAll('.form__input');
				Array.prototype.forEach.call(fields, (e, i) => {
					e.parentNode.querySelector('.form__text').innerHTML = e.value;
				})

				form.classList.toggle('form--noedit');
				submitForm(form)
			});
		});

		// Form cancel button.
		let cancelbuttons = form.querySelectorAll('.form__actions .form__cancel');
		Array.prototype.forEach.call(cancelbuttons, (el, i) => {
			el.addEventListener('click', (e) => el.parentNode.parentNode.classList.toggle('form--noedit'));
		});
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

	/* Tooltip behavior */
	let tooltip_els = document.querySelectorAll('.tooltip');
	Array.prototype.forEach.call(tooltip_els, (el, i) => {
		el.addEventListener('mouseover', (e, i) => {
			let tt = document.createElement('span');
			tt.classList.add('tooltip_baloon');
			tt.innerHTML = el.title;
			console.log(tt);
			el.appendChild(tt);
		});

		el.addEventListener('mouseout', (e, i) => {
			let ttbs = el.querySelectorAll('.tooltip_baloon');
			Array.prototype.forEach.call(ttbs, (el, i) => {
				el.parentNode.removeChild(el);
			})

		});
	});



	let closePopup = () => {
		let el = document.querySelector('#logout_popup');
		el.parentNode.removeChild(el);
		popupstatus = false;
	}

	let showPopup = () => {
		popupstatus = true;

		// crete the popup
		let btn = document.createElement('button');
		btn.innerHTML = "CANCEL";

		let popup_div = document.createElement('div');
		popup_div.classList.add('logout_popup');
		popup_div.id = "logout_popup";

		popup_div.appendChild(btn);
		document.body.appendChild(popup_div)
	}


	// Ignore click everywhere
	document.body.addEventListener('click', (e, i) => {
		if (popupstatus && e.target != document.querySelector('#logout_popup')) {
			e.preventDefault();
			e.stopPropagation();
			closePopup();
		}
	});

	// Logout behavoior
	let lg_btn = document.querySelector('#logoutbtn');
	lg_btn.addEventListener('click', (e, i) => {
		if (!popupstatus) {
			e.stopPropagation();
			showPopup();
		}
	});

})