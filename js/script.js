//----------------------------------Less or More-------------------------------------------------
let count = 0;
	let randomNumber = Math.floor(Math.random() * 1001);
	function getAns(){
		
		let value1 = document.getElementById("number").value;
		console.log(randomNumber+"\nCount: " + count);
	if(value1<randomNumber){

div.insertAdjacentHTML('beforebegin', '<h3>More</h3>');
		}
		else if(value1==randomNumber){
			
			div.insertAdjacentHTML('beforebegin', '<h3>You are the BEST!</h3>');
setTimeout(
	function () {
        
          alert("Number of Attempts: " + count);
      }, 1000);
				
		}
		else{
div.insertAdjacentHTML('beforebegin', '<h3>Less</h3>');
		}
		count++;
	
	}

	function autoFind(){
		for(var i=0; i<=1000; i++){
			if(i==randomNumber){
				alert("Number is: " + randomNumber);
				break;
			}
		}
	
	}
	//---------------------------------- Rock-Papper-Scissors-------------------------------------------------
/*	rock=0
	papper=1
	scissors=2
*/
let point=0;
	let attempt=3;
	let temp = 0;
	
function gif(){
setTimeout(function(){imgdiv.innerHTML='<img src="img/rand.gif" class="cmpRPS" alt=" ">';}, 2000);

}
function changeimg(){
	// let imgdiv= document.getElementById("imgdivs");
	if(temp==0){imgdiv.innerHTML='<img src="img/rock.png" class="cmpRPS" alt="rock">'; gif();}
	else if(temp==1){imgdiv.innerHTML='<img  src="img/paper.png" class="cmpRPS" alt="papper">';gif();}	
	else{imgdiv.innerHTML='<img src="img/scissors.png" class="cmpRPS" alt="scissors">'; gif();}
	
}


function again(){
	point=0;
	points.innerHTML = point;
	attempt=3;
	temp = 0;
}
	

function rock(){
let randomRPS = Math.floor(Math.random() * 3);
	console.log(randomRPS);
attempt--;	
if (attempt == 0){
	alert ("Game Over!\nYour point: " + point);

	again();
}
if (randomRPS == 2){point++;
points.innerHTML = point;
}
temp=randomRPS;
}

function papper(){
	let randomRPS = Math.floor(Math.random() * 3);
	console.log(randomRPS);
	attempt--;	
	if (attempt == 0){
	alert ("Game Over!\nYour point: " + point);
	again();
}
if (randomRPS == 0) { point++;
points.innerHTML = point;
}
temp=randomRPS;
}

function scissors(){
	let randomRPS = Math.floor(Math.random() * 3);
	console.log(randomRPS);
attempt--;

if (attempt==0){
	alert ("Game Over!\nYour point: " + point);
	again();
}	
if(randomRPS==1){point++;
points.innerHTML = point;
}
temp=randomRPS;
}



	




//---------------------------------- Button-------------------------------------------------
let tired=0;
function Run(){

let btn = document.getElementById('btn');
btn.innerHTML='Button';
if(tired<7){
btn.style.top=Math.random() * (500 - (-100)) + (-100)+'px';
btn.style.left=Math.random() * (500 - (-500)) + (-500)+'px';}
if(tired==7){
		
		btn.style.top='0px';
		btn.style.left='0px';
		btn.style.fontSize ='17px';
	btn.innerHTML='I am tired';
		wait.innerHTML='Please, Wait 5 seconds!';
		setTimeout(function(){
			btn.style.fontSize ='15px';
			btn.innerHTML='You are Good Boy)';
			tired=0;wait.innerHTML=' '
		}, 5000)
	
	
	
}
tired++;
}



function Great(){
btn.style.background='red';
setTimeout(function(){alert('Congratulations!!!');},1000);

}
