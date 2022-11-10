// IMC = peso ( altura * altura )

// Norma IMC
// Menor que 18,5: Abaixo do peso
// Entre 18,5 e 24,9: Peso Normal
// Entre 25 e 29,9: Sobrepeso
// Entre 30 e 39,9: Obesidade
// Maior que 40: Obesidade Grave

function calculaIMC(){
	const altura = document.getElementById("altura").value;
	const peso = document.getElementById("peso").value; 
	const result = document.getElementById("res__");
	const botaoResetar = document.getElementById("resetar");
	const imagemIMC = document.createElement("img");
	imagemIMC.width = "350";

		if(!altura || !peso){
			alert("Preencha os Campos corretamente");
			return;
		}else {

		const IMC = peso / ( altura * altura );

		if(IMC < 18.5){
			result.innerHTML = "<p>Seu IMC é de: " + IMC.toFixed(2) + " e você está com peso muito abaixo, é recomendável cuidar de sua alimentação e praticar atividades físicas daqui pra frente</p>";
			result.appendChild(imagemIMC);
			imagemIMC.src = "assets/01.jpg";
		}else if(IMC >= 18.5 && IMC <= 24.9){
			result.innerHTML = "<p>Seu IMC é de: " + IMC.toFixed(2) + " e você está com peso normal, continue comendo bem e fazendo atividades físicas para manter </p>";
			result.appendChild(imagemIMC);
			imagemIMC.src = "assets/02.jpg";
		}else if(IMC >= 25 && IMC <= 29.9){
			result.innerHTML = "<p>Seu IMC é de: " + IMC.toFixed(2) + " e você está com sobrepeso, cuidado com excessos pode se agravar, pratique mais exercícios e veja seus hábitos alimentares</p>";
			result.appendChild(imagemIMC);
			imagemIMC.src = "assets/03.jpg";
		}else if(IMC >= 30 && IMC <= 39.9){
			result.innerHTML = "<p>Seu IMC é de: " + IMC.toFixed(2) + " e você está com Obesidade, talvez seja hora de procurar especialistas para cuidar de seu corpo.</p>";
			result.appendChild(imagemIMC);
			imagemIMC.src = "assets/03.jpg";
		}else{
			result.innerHTML = "<p>Seu IMC é de: " + IMC.toFixed(2) + " e você está com Obesidade Grave</p>";
			result.appendChild(imagemIMC);
			imagemIMC.src = "assets/03.jpg";
		}
	}
		if(imagemIMC){
			botaoResetar.addEventListener("click", () =>{
			result.removeChild(imagemIMC);
			result.innerHTML = "<p>Faça o teste Novamente</p>";
			});
		}
}