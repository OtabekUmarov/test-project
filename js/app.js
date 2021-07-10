let bars = document.getElementById('bars')

bars.addEventListener('click', ()=> {
  bars.classList.toggle('active')
  document.querySelector('.nav').classList.toggle('active')
  document.querySelector('.nav__items').classList.toggle('active')
  document.body.classList.toggle('modal-open')
})


window.addEventListener('scroll', () => {
  let y = 500
  if (window.scrollY > y) 
    document.querySelector('.nav').classList.add('show')
    else 
    document.querySelector('.nav').classList.remove('show')
})


let slid = new Splide( '.doctors', {
	type   : 'loop',
	perPage: 4,
  pagination: false,
  autoplay : true,
  interval: 3000,
  perMove: 1,
  breakpoints: {
		768: {
			perPage: 3,
		},
		576: {
			perPage: 2,
		},
		425: {
			perPage: 1,
		},
	}
})
slid.on( 'autoplay:playing', function ( rate ) {
	// console.log( rate ); // 0-1
} );
slid.mount()


let slid1 = new Splide( '.slider1', {
	type   : 'loop',
	perPage: 4,
  autoplay : true,
  interval: 3000,
  perMove: 2,
  breakpoints: {
		768: {
			perPage: 3,
      perMove: 1,
		},
		576: {
			perPage: 2,
      perMove: 1,
		},
    425: {
			perPage: 1,
		},
	}
})
slid1.mount();



let slider = new Splide( '.slider', {
	type   : 'loop',
	perPage: 4,
  pagination: false,
  arrow: false,
  autoplay : true,
  interval: 3000,
  perMove: 2,
  breakpoints: {
		768: {
			perPage: 3,
      perMove: 1,
		},
		576: {
			perPage: 2,
      perMove: 1,
		},
    425: {
			perPage: 1,
		},
	}

})



slider.mount();