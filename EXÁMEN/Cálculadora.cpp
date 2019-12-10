#include <iostream>
#include <cmath>
#include <cstdlib>
#include <stdio.h>
#include <math.h>
#include <iomanip>
#include <algorithm>
#include <conio.h>

using namespace std;
double Sumar(double,double);
double Restar(double,double);
double Multiplicar(double,double);
double Dividir(double,double);


int main()
{
    cout << " Calculadora Jair" << endl;
    cout << "\n" << endl;
    int operador;
    cout << "Sumar (1), Restar (2), Multiplicar (3),Dividir (4),Permutacion(5)";
	cout<<"\n Factorial(6), Volumen Cilindro (7),Area de Triangulo(8), Distancia de vectores(9)";
	cout<<"\nHipotenusa de un triangulo rectangulo(10)?: "<<endl;
    cin >> operador;
    if(operador==5){
    	int gene,toma,h,j;
    	long double general,tomados,permutacion;
    	cout<< "Introduce el numero de elementos de un grupo general: ";
		cin >> gene;
		general=1;
		for(h=1;h<=gene;h++)
        general =  general * h;
        cout<<"Indica cuantos elementos del grupo general deseas tomar: ";
		cin>>toma;
        tomados=1;
        for(j=1;j<=(gene-toma);j++)
        tomados=tomados*j;
        permutacion=(general/tomados);
		cout << endl << "La permutacion de "<< gene <<" cogiendo "<<toma<<" con orden es:" << permutacion << endl;
	}
    else if(operador==6){
    	int n,i;
    	long double factorial;
    	cout<< "Introduce un numero";
		cin >> n;
		factorial=1;
		for(i=1;i<=n;i++)
        factorial = factorial * i;
		cout << endl << "Factorial de " << n << "es:" << factorial << endl;
 	}else if(operador==7) {
 		double R,V,H;
 		cout<<"Ingrese un radio r: ";
 		cin >> R;
 		cout<<"Ingrese una altura h: ";
 		cin>> H ;
 		V=3.1416*pow(R,2)*H;
 		cout<<"El volumen del cilindro es:"<<V<<endl;
	 }else if (operador==8){
	 	float altura,area,base;
	 	cout<<"Ingrese una altura: ";
 		cin >> altura;
 		cout<<"Ingrese una base: ";
 		cin>> base ;
 		area=(base * altura)/2;
 		cout<<"El área de la triangulo es: "<<area<<endl;
	 }else if(operador==9){
	 	double x1,x2,y1,y2,distancia;
	 	
	 	cout <<"\n\nIntroduzca las coordenadas del primer punto: "<<endl;
		 cin >>x1 >>  x2;
		 cout <<"\nIntroduzca las coordenadas del segundo punto: " <<endl;
		 cin >> y1 >>  y2;
		 distancia = sqrt((x1 - y1)*(x1 - y1 ) + (x2 - y2)*(x2 - y2));
		 cout <<"\nLa distancia entre los puntos es: " << setw(10) <<distancia << endl;
	 	
	 }else if(operador==10){
	 	double cateto1,cateto2,hipotenusa;
	 	cout <<"\n\nIntroduzca el primer cateto: "<<endl;
		 cin >>cateto1;
		 cout <<"\nIntroduzca el segundo cateto: " <<endl;
		 cin >>cateto2;
	 	 hipotenusa=sqrt((cateto1*cateto1)+(cateto2*cateto2));
	 	 cout <<"\nLa hipotenusa es: "<<hipotenusa<<endl;
	 }else{
	 	double val1,val2;
    cout << "Introduce el primer valor: ";
    cin >> val1;
    cout << "Introduce el segundo valor: ";
    cin >> val2;
    cout << "\n" << endl;
   
    switch(operador)
    {
        case 1:
            cout << "\n";
            cout << "La Suma es " << Sumar(val1,val2) <<endl;
            cout << "\n";
        break;
        case 2:
            cout << "\n";
            cout << "La resta es " << Restar(val1,val2) << endl;
            cout << "\n";
        break;
        case 3:
            cout << "\n";
            cout << "La multiplicacion es " << Multiplicar(val1,val2) <<endl;
            cout << "\n";
        break;
        case 4:
            cout << "\n";
            cout << "la Division es " << Dividir(val1,val2) << endl;
            cout << "\n";
        break;
    }
    
    system("pause");
    getch();
}}
double Sumar(double x,double y)
{return x + y;}


double Restar(double x,double y)
{return x - y;}


double Multiplicar(double x,double y)
{return x * y;
}


double Dividir(double x,double y)
{
    return x / y;
}




