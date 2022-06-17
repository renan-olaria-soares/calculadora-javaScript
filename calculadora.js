function calculadora(){
    const operacao = Number(prompt("Escolha uma operação :\n 1 - Soma(+)\n  2 - Subtração(-)\n 3 - Multiplicação ( * )\n 4 - Divisão Real ( / )\n 5 - Divisão Inteira ( % ) \n 6 - Potenciação ( ** )"));
    
    if(!operacao || operacao >=7){
        alert("Error - Operação Inválida!")
        calculadora();
    }else{
        let n1 = Number(prompt('Insira o primeiro valor : '));
        let n2 = Number(prompt('Insira o segundo valor : '));
        let resultado;
        
        if(!n1 || !n2){
            alert("Error - Parâmetros Inválidos!")
            calculadora();
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaPeracao();
            }
        
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaPeracao();
            }
        
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaPeracao();
            }
        
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaPeracao();
            }
        
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da disivão entre ${n1} e ${n2}  é = ${resultado}`);
                novaPeracao();
            }
        
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaPeracao();
            }

            switch(operacao){
                case 1:
                    soma();
                    break;

                    case 2:
                    subtracao();
                     break;

                     case 3:
                    multiplicacao();
                    break;

                    case 4:
                    divisaoReal();
                    break;

                    case 5:
                    divisaoInteira();
                    break;

                    case 6:
                    potenciacao();
                    break;
            }

        }

        function novaPeracao(){
            let opcao = prompt("Deseja fazer outra operação ? \n 1 - SIM\n 2 - Não");
            if(opcao == 1){
                calculadora();
    
            }else if(opcao == 2){
                alert('Até mais!')
    
            }else{
                alert("Opção inválida!")
                novaPeracao();
            }
        }
    
    }
    
}

calculadora();
