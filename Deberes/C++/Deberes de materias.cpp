#include<iostream>
#include<conio.h>

using namespace std;
int main (){
int numeroDeDeberes = 0;
int algebra = 0;
int compiladores = 0;
int programacion = 0;
int calculo = 0;
int fisica = 0;
int ingles = 0;
int analisis=0;
do{
numeroDeDeberes = numeroDeDeberes + 1;
    if(numeroDeDeberes % 13 == 0){
        ingles = ingles + 1; /*Tomamos el inglés como prioridad
        pues si ponemos como prioridad los pares e impares no nos abarcaria los deberes de ingles y
        fuera 500 para aanalisis y 500 para algebra*/ 
    }else if(numeroDeDeberes % 11 == 0){
        fisica = fisica + 1;
    }else if(numeroDeDeberes % 7 == 0){
        calculo = calculo + 1;
    }else if(numeroDeDeberes % 5 == 0){
        programacion = programacion + 1;
    }else if(numeroDeDeberes % 3 == 0){
        compiladores = compiladores + 1;
    }else if(numeroDeDeberes % 2 == 0){
        algebra = algebra + 1;
    }else if(numeroDeDeberes % 2 != 0){
        analisis = analisis + 1;
    }
    }
    while(numeroDeDeberes < 1000);

cout<<"Hice"<<ingles<<"deberes de Ingles"<<endl;
cout<<"Hice"<<fisica<<"deberes de Fisica"<<endl;
cout<<"Hice"<<calculo<<"deberes de Calculo"<<endl;
cout<<"Hice"<<programacion<<"deberes de Programacion"<<endl;
cout<<"Hice"<<compiladores<<"deberes de compiladores"<<endl;
cout<<"Hice"<<algebra<<"deberes de Algebra"<<endl;
cout<<"Hice"<<analisis<<"deberes de Analisis"<<endl;
}
