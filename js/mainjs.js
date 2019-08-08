$('.menuToggle').click(function() {
	$('.menu').toggle(400);
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	dots:true,
	autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
$('.first .more').click(function() {
$('#first').css({'display': 'block'})
});

$('.second .more').click(function() {
$('#second').css({'display': 'block'})
});

$('.third .more').click(function() {
$('#third').css({'display': 'block'})
});

$('.fourth .more').click(function() {
$('#fourth').css({'display': 'block'})
});
$('.design .more').click(function() {
$('#design').css({'display': 'block'})
});
$('.close').click(function() {
$('.modal-window').css({'display': 'none'})
});


var items = $('.job');
items.css('opacity', 0);
for (var i = 0; i < items.length; i++) {
  $(items[i]).delay(i * 400).animate({ opacity: 1 }, 400);
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