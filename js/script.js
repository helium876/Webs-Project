/* 
** @Author: Agyei Masters
*/


//Scroll Function
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});


//popover

$(function () {
  $('[data-toggle="popover"]').popover()
})


$(document).on('scroll', function (e) {
    $('.fixed-nav').css('opacity', ($(document).scrollTop() / 500));
});


function fbVal() {
	// body...
	var fr = document.forms["fb"];
	var er = 0;
	//FIRST NAME VAL
	var fname = document.getElementById('fname');
	if(fr.fname.value === "" || fr.fname.value === null){
		fname.classList.add('error');
		er ++;

	}
	else{
		fname.classList.remove('error');
    }
    //LAST NAME VAL
	var lname = document.getElementById('lname');
	if(fr.lname.value === "" || fr.lname.value === null){
		lname.classList.add('error');
		er++;
	}
	else{
		lname.classList.remove('error');
    }
     //EMAIL VAL
	var email = document.getElementById('email');
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    re.test(fr.email.value)
	if(!re.test(fr.email.value) || fr.email.value === null){
		email.classList.add('error');
		er++;
	}
	else{
		email.classList.remove('error');
    }
    var comment = document.getElementById('comment');
	if(fr.comment.value === "" || fr.comment.value === null){
		comment.classList.add('error');
		er ++;

	}
	else{
		comment.classList.remove('error');
    }
    if (er >= 1) {
    	swal("Oops...", "Please fill out all fields", "error");
    }else{
    	swal("Thanks for your feedback!","", "success");
    }
    return false;
}


function profVal() {
	// body...
	var fr = document.forms["proforma"];
	var er = 0;
	var total = 0;
	//FIRST NAME VAL
	var pfname = document.getElementById('pfname');
	if(fr.pfname.value === "" || fr.pfname.value === null){
		pfname.classList.add('error');
		er ++;

	}
	else{
		pfname.classList.remove('error');
    }
    //LAST NAME VAL
	var plname = document.getElementById('plname');
	if(fr.plname.value === "" || fr.plname.value === null){
		plname.classList.add('error');
		er++;
	}
	else{
		plname.classList.remove('error');
    }
     //EMAIL VAL
	var pemail = document.getElementById('pemail');
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    re.test(fr.pemail.value)
	if(!re.test(fr.pemail.value) || fr.pemail.value === null){
		pemail.classList.add('error');
		er++;
	}
	else{
		pemail.classList.remove('error');
    }
    var company = document.getElementById('company');
	if(fr.company.value === "" || fr.company.value === null){
		company.classList.add('error');
		er ++;

	}
	else{
		company.classList.remove('error');
    }
    var address = document.getElementById('address');
	if(fr.address.value === "" || fr.address.value === null){
		address.classList.add('error');
		er ++;

	}
	else{
		address.classList.remove('error');
    }
    var tel = document.getElementById('tel');
	if(fr.tel.value === "" || fr.tel.value === null){
		tel.classList.add('error');
		er ++;

	}
	else{
		tel.classList.remove('error');
    }
    if (er >= 1) {
    	swal("Oops...", "Please fill out all fields", "error");
    }else{
    	if(!fr.webDev.checked && !fr.mbDev.checked && !fr.brand.checked){
	    swal("Oops...", "Please choose a service", "error");
		}else{
			if (fr.webDev.checked) {
				total += 3000;
			}
			if (fr.mbDev.checked) {
				total += 5000;
			}
			if (fr.brand.checked) {
				total += 1000;
			}
			swal("Estimated Amount: $" + total);
		}
    }
    return false;
}