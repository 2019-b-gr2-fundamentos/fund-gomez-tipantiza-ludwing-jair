#include <iostream>
#include <stdlib.h>
using namespace std ;
int main (){
double x,y;
char decision;
cout<<"Inserte la componente en x del vector" ;
cin>>x;
cout<<"Inserte la componente en y del vector";
cin>>y;
cout<<"¿Desea calcular el modulo o el angulo de un vector?";
cin>>decision;
switch (decision){
    case ("modulo"):
        cout<<Math.sqrt(Math.pow(x,2)+Math.pow(y,2)); 
        break;
    case ("angulo"):
        cout<<Math.atan(y/x)*180/Math.PI;
        break;
    default:
        cout<<"String no valido"
}

    

