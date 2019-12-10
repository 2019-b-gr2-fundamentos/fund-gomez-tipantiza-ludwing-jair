//Ejercicio 3
#include <iostream>
#include <stdlib.h>
using namespace std;
int main (){
char mes;
cout <<"Ingrese un mes del año";
cin>>mes;
const char A = "tiene 31 días";
const char B = "tiene 30 días";
const char C = "tiene 28 días";
switch(mes){
    case "enero":
        cout<<mes<< A;
        break;

    case "febrero":
        cout<<mes<<C;
        break;

    case "marzo":
        cout<<mes<<A;
        break;

    case "abril":
        cout<<mes<< B;
        break;

    case "mayo":
        cout<<mes<<A;
        break;

    case "junio":
        cout<<mes<<B;
        break;

    case "julio":
        cout<<mes<<A;
        break;

    case "agosto":
        cout<<mes<<A;
        break;

    case "septiembre":
        cout<<mes<<B;
        break;

    case "octubre":
        cout<<mes<<A;
        break;

    case "noviembre":
        cout<<mes<<B;
        break;

    case "diciembre":
        cout<<mes<<A;
        break;

    default:
        cout<<"El string ingresado no es un mes";
        break;
}
system("pause");
return 0;
}
