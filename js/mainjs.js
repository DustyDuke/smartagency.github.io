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
let design = {id: 'design', title: 'Modern App Design', content: `
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum totam ad sint error porro. Consectetur, sunt, aperiam. Magni rem optio distinctio illum consequuntur delectus nulla illo aperiam itaque cumque.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel officia vitae eveniet quam rem unde facilis.</p>
<p>vitae eveniet quam rem unde facilis.</p>
`}

const toHTML = process => `
<div class="job col-1 ${process.colorNum}">
<h2><i class="fa ${process.icon}"></i></h2>
<h3>${process.title}</h3>
<p>${process.preContent}</p>
<button class="more" data-btn='more' data-id='${process.id}'>+ Know More</button>
</div>`

function render() {
	const html = processes.map(process => toHTML(process)).join('')
	document.querySelector('.processes').innerHTML = html
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