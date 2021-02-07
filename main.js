
	
function validate(){
	var name = document.querySelector('#Name');
	var yyyy = document.querySelector('#Residence');
	var email = document.querySelector('#Email');
	var D1 = document.querySelector('#Div1');
	var age = document.querySelector('#Age');
	var Selectproff = document.querySelector('.Selectproff');

		var ch_name = name.value;
		var ch_Resi = yyyy.value;
		var ch_email = email.value;
		var ch_age = age.value;

			var rg_ResiName =new RegExp('^[^a-z]+$','g');
			var rg_ResiName2 =new RegExp('^([^a-z]+)+$','g');

			var rg_email=new RegExp('^[^0-9][a-z0-9]{4,}@[a-z]{3,}\.((.ma) | (.com)){1}$','g');
			var rg_age =new RegExp('^[0-9]{2}$','g');
					D1.innerHTML+="<br/>";

					if(rg_ResiName.test(ch_name) == false){
							D1.innerHTML+="Name is null !";	
					}	

					if(rg_ResiName2.test(ch_Resi) == false){
							D1.innerHTML+="Résidence is null !";	
					}

					if(rg_email.test(ch_email) == false && rg_email.test(ch_email) == null){
							D1.innerHTML+= "Email est incorect! <br/>";
					}
				
					if(rg_age.test(ch_age) == false || ch_age <= 18){
							D1.innerHTML+= " Age incorect! <br/>";
					}
						if (cp< 2) {
						D1.innerHTML+=" language must 2 <br/>";
					}
					if((Selectproff.options[Selectproff.selectedIndex])==0) {
						console.log("profession is null!!!");
					}
				var chkFr =	document.querySelector('#chkFr').checked;
				var chkAr =	document.querySelector('#chkAr').checked;
				var chkEn =	document.querySelector('#chkEn').checked;

				var person= {

						"name" 		 : name.value,
						"redidence"  : yyyy.value,
						"email"      : email.value,
						"age" 		 : age.value,
						"languages"  : Hoho(chkFr,chkAr,chkEn),
						"profession" : Selectproff.options[Selectproff.selectedIndex].text,
					} 	
							console.log(person);

			var Ch
	}		

	var cp = 0;
	function Countor(){
		var chec1= document.querySelector('#chkEn');
		var chec2= document.querySelector('#chkFr');
		var chec3= document.querySelector('#chkAr');
		if(chec1.checked==false || chec2.checked==false || chec3.checked==false){
			cp--;
		}
		if(chec1.checked==true || chec2.checked==true || chec3.checked==true){
			
			cp++;		
		}
		console.log(cp);
	}

	function Hoho(x,y,z){
		var S=[];
		var fr = document.getElementById('x');
		var ar = document.getElementById('y');
		var eng = document.getElementById('z');
	
		if (fr == true) {
		   S.push = ( { "myVal" : fr.value });
		}
		if (ar==true){
		   S.push = ( { "myVal" : ar.value });
		}
		if (eng==true) {
		   S.push = ( { "myVal" : eng.value });
		}
		console.log(S);
		 		return S;
	
	}