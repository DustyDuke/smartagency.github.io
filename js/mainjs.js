// Menu 

function toggle() {
   let menu = document.getElementById("menu");
   let ul = document.querySelector('ul');
   function hide(){menu.style.display = 'none'};
  (menu.style.display == 'none' || menu.style.display ==  '' ) ? (menu.style.display = 'block', ul.style.animationName = 'appear') : (ul.style.animationName = 'disappear', setTimeout(hide, 2000));
  ul.style.animationDuration = '2s';

}

// Arrow Form

function sendFunc() {
	let arrowFade = document.querySelector('.fa-arrow-right');	
	arrowFade.classList.add('arrowAnimate');
}

// Blocks and modals
let processes = [
	{id: 1, title: 'Koc Koi Tomi', preContent: 'Lorem ipsum is dummy lorem very dumy.', content: 'Lorem ipsum is dummy lorem very dumy. Lorem ipsum is dummy you lorem very dumyL is.', icon: 'fa-paperclip', colorNum: 'first'},
	{id: 2, title: 'Koimona Set', preContent: 'Lorem ipsum is dummy lorem very dumy. Lorem is.', content: 'Lorem ipsum is dummy lorem very dumy. Lorem ipsum is dummy you lorem very dumyL is.', icon: 'fa-underline', colorNum: 'second'},
	{id: 3, title: 'Setting Koire', preContent: 'Lorem ipsum is dummy lorem very Lorem ipsus', content: 'Lorem ipsum is dummy lorem very yLorem ipsus. Lorem ipsum is dummy lorem very dumy.', icon: 'fa-cogs', colorNum: 'third'},
	{id: 4, title: 'Ko Image Lara', preContent: 'Lorem ipsum is dummy ry dumy Lorem ipsum is.', content: 'Lorem ipsum is dummy lorem very dumy. Lorem ipsum is dummy ry dumy Lorem ipsum is.', icon: 'fa-camera-retro', colorNum: 'fourth'},

]
const toHTMLprocess = process => `
<div class="job col-1 ${process.colorNum}">
<h2><i class="fa ${process.icon}"></i></h2>
<h3>${process.title}</h3>
<p>${process.preContent}</p>
<button class="more" data-btn='more' data-id='${process.id}'>+ Know More</button>
</div>`

let design = {id: 'design', title: 'Modern App Design', content: `
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum totam ad sint error porro. Consectetur, sunt, aperiam. Magni rem optio distinctio illum consequuntur delectus nulla illo aperiam itaque cumque.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel officia vitae eveniet quam rem unde facilis.</p>
<p>vitae eveniet quam rem unde facilis.</p>
`}

let works = [
{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7},{id: 8} ,{id: 9}
]

const toProjects = project => `
<div class="project col-1" id="${project.id}"></div>
`

let team = [
{id: '1', name: 'Bendi Manos', position: 'UI/UX Parena'},
{id: '2', name: 'Al Rayhan', position: 'UI/UX Designer'},
{id: '3', name: 'Ali Sayed', position: 'UI/UX Designer'}
]

const toPersons = person => `
 <div class="worker col-1">
<div class="who">
<h3>${person.name}</h3>
<p>${person.position}</p>
</div>
</div>
`

let carouselItems = [
{slideContent: `<p>“This was my first time renting from car rental. The service rep help me find the best rental to suit my needs. I will definitely rent with this company again”</p><p>Kita Say, HK Director</p>`},
{slideContent: `<p>“This was my first time renting from car rental. The service rep help me find the best rental to suit my needs. I will definitely rent with this company again”</p><p>Dita Say, UX Director</p>`},
{slideContent: `<p>“This was my first time renting from car rental. The service rep help me find the best rental to suit my needs. I will definitely rent with this company again”</p><p>Nita Say, HK Director</p>`},
{slideContent: `<p>“This was my first time renting from car rental. The service rep help me find the best rental to suit my needs. I will definitely rent with this company again”</p><p>Anita Say, HK Director</p>`},
{slideContent: `<p>“This was my first time renting from car rental. The service rep help me find the best rental to suit my needs. I will definitely rent with this company again”</p><p>Al Rayhan, UX Director</p>`},
{slideContent: `<p>“This was my first time renting from car rental. The service rep help me find the best rental to suit my needs. I will definitely rent with this company again”</p><p>Alina Rayhan, UX Director</p>`}
]
const toCarousel = carousel => `
 <div class="carousel-item"><div class="aligner">${carousel.slideContent}</div></div>
`

let social = [
{href: '#', icon: 'fa-facebook-f'},
{href: '#', icon: 'fa-twitter'},
{href: '#', icon: 'fa-vk'},
{href: '#', icon: 'fa-instagram'}
]

const toSocial = net => `
<a href="${net.href}" target="_blank"><i class="fa ${net.icon}"></i></a>
`

function render() {
	const htmlProc = processes.map(process => toHTMLprocess(process)).join('')
	document.querySelector('.processes').innerHTML = htmlProc

	const htmlCarousel = carouselItems.map(carousel => toCarousel(carousel)).join('')
	document.querySelector('.my-carousel').innerHTML = htmlCarousel
	
	const htmlWorks = works.map(project => toProjects(project)).join('')
	document.querySelector('.projects').innerHTML = htmlWorks
	
	const htmlTeam = team.map(person => toPersons(person)).join('')
	document.querySelector('.our-team').innerHTML = htmlTeam
	
	const htmlNet = social.map(net => toSocial(net)).join('')
	document.querySelector('.social .col-1').innerHTML = htmlNet
}
render()

//Modal plugin

const modal = $.modal({})

// Carousel

    let list = carousel.querySelector('.my-carousel');
    let listElems = carousel.querySelectorAll('.carousel-item');
	let width = listElems[0].offsetWidth + 3;
    let position = 0; 

    carousel.querySelector('.prev').onclick = function() {
      // сдвиг влево
      position += width;
      position = Math.min(position, 0)
      list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.next').onclick = function() {
      // сдвиг вправо
      position -= width;
	  console.log(listElems[0].offsetWidth + 5);
      position = Math.max(position, -width * (listElems.length));
      list.style.marginLeft = position + 'px';
    };


/*

//contact-form
 $(document).ready(function() {
	$("#feedback-form").submit(function(){ 
		var form = $(this); 
		var error = false; 
		form.find('input').each( function(){ 
			if ($(this).val() == '') { 
				alert('Зaпoлнитe пoлe "'+$(this).attr('placeholder')+'"!'); 
				error = true; 
			}
		});
		if (!error) { 
			var data = form.serialize(); 
			$.ajax({ 
			   type: 'POST', 
			   url: 'contact-form.php', 
			   dataType: 'json', 
			   data: data, 
		       beforeSend: function(data) { 
		            form.find('button').attr('disabled', 'disabled'); 
		          },
		       success: function(data){ 
		       		if (data['error']) { 
		       			alert(data['error']); 
		       		} else { 
					$('.thanks-window').css({'display': 'block'});
					setTimeout(function(){$('.modal-window').css({'display': 'none'});},3000);
		       		}
		         },
		       error: function (xhr, ajaxOptions, thrownError) { 
		            alert(xhr.status); 
		            alert(thrownError); 
		         },
		       complete: function(data) { 
		            form.find('button').prop('disabled', false); 
		         }
		                  
			     });
		}
		return false;
	});
});
$("#feedback-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            window.location = "/thanks";
        });
        return false;
    });
	
	*/