function sendFunc() {
	let arrowFade = document.querySelector('.fa-arrow-right');	
	arrowFade.classList.add('arrowAnimate');

}
function toggle() {
   let menu = document.getElementById("menu");
   let ul = document.querySelector('ul');
   function hide(){menu.style.display = 'none'};
  (menu.style.display == 'none' || menu.style.display ==  '' ) ? (menu.style.display = 'block', ul.style.animationName = 'appear') : (ul.style.animationName = 'disappear', setTimeout(hide, 2000));
  ul.style.animationDuration = '2s';

}
function toggle1() {
   let first = document.getElementById("first");
    first.style.display = 'block';
}
function toggle2() {
   let second = document.getElementById("second");
    second.style.display = 'block';
}
function toggle3() {
   let third = document.getElementById("third");
    third.style.display = 'block';
}
function toggle4() {
   let fourth = document.getElementById("fourth");
    fourth.style.display = 'block';
}
function toggleDesign() {
   let design = document.getElementById("design");
    design.style.display = 'block';
}
function toggleClose() {
	let mw = document.querySelectorAll('.modal-window');
      mw.forEach(el =>  el.style.display = 'none')
}

   /* Карусель */

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