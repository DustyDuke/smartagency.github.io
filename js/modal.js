function _createModal(options){
	const DEFAULT_WIDTH = '600px'
	const modal = document.createElement('div')
	modal.classList.add('wmodal')
	modal.insertAdjacentHTML('afterbegin', `
<div class="modal-overlay"  data-close='true'>
<div class="modal-window">
<span class="modal-close" data-close='true'>&times;</span>
<div class="modal-header">
	
<h2 class="modal-title" data-title></h2>
</div>
<div class="modal-body" data-content>
</div>
</div>
</div>
`)

document.body.appendChild(modal)
return modal
}

$.modal = function(options){
	const ANMATION_SPEED = 200
	const $modal = _createModal(options)
	let closing = false
	let destroyed = false
	const modal = {
		open() {
			if(destroyed){
				return console.log('Modal is destroyed')
			}
			!closing && $modal.classList.add('open')
		},
		close() {
			closing = true
			$modal.classList.remove('open')
			$modal.classList.add('hide')
			setTimeout(() => {
			$modal.classList.remove('hide')
			closing = false
			}, ANMATION_SPEED )
		}		
	}	
	const listener = event => {
		if(event.target.dataset.close){
			modal.close()
		}
	}
	
	$modal.addEventListener('click', listener)
	
	return Object.assign(modal, {
		destroy() {
			$modal.parentNode.removeChild($modal)
			$modal.removeEventListener('click', listener)
			destroyed = true
			},
			setTitle(html){
			$modal.querySelector('[data-title]').innerHTML = html
		},
		setContent(html){
			$modal.querySelector('[data-content]').innerHTML = html
		}
	})
}

document.addEventListener('click', event => {
//	event.preventDefault()
	const btnType = event.target.dataset.btn
	const id = +event.target.dataset.id
	const process = processes.find(p => p.id === id)
	
	if(btnType === 'more') {
		if(design.id === 'design') {
			modal.setTitle(`
		<h3>${design.title}</h3>
		`),
		modal.setContent(`
		<p>${design.content}</p>
		`)
		} else {
		modal.setTitle(`
		<h3>${process.title}</h3>
		`),
		modal.setContent(`
		<p>${process.content}</p>
		`)}
		modal.open()
	}
	
})