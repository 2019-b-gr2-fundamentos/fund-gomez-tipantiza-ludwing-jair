function primo(numero) {
   

    
  
    for (var i = 2; i < numero; i++) {
  
      console.log("Modulo entre " + numero + " y " + i + " = " + (numero % i));
  
      if (numero % i === 0) {
      
        return false;
      }
  
    }
  
    if (numero === 1) {
      console.log("Me has pasado el numero 1, recuerda que NO es un numero primo");
    } else {
      console.log("Como el numero ingresado no tuvo mas múltiplos entonces determinamos que SI es un numero primo.");
    }
  
    console.log("-------------------------------------");
  }
  primo(1);
  primo(2);
  primo(3);
  primo(4);
  primo(5);
  primo(6);
  primo(7);
  primo(8);
  primo(9);
  primo(10);
  primo(20);
  primo(30);
  primo(40);
  primo(50);
  primo(60);
  primo(2000);
