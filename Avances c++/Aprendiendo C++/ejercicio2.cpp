#include<iostream>
#include<math.h>
using namespace std;
int main(){
	float a,b,c,d,resultado=0;
	cout<<"Digite el valor de a: "; cin>>a;	
	cout<<"Digite el valor de b: "; cin>>b;
	resultado=(sqrt(a))/(pow(b,2)+1);      // sqrt raiz de   pow(base,exponente)
	cout.precision(3);
	cout<<"\nEl resultado es : "<<resultado<<endl;
return 0;
}
