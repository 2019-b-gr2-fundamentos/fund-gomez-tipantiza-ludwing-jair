#include <iostream>
#include <stdlib.h>
using namespace std;
int main(){
int number;
cout<<"Ingrese su nota del primer bimestre";
cin>>number;
if (number==0){
    cout<<"Si le metes ganas,a lo mucho llegas al suple.Probablemente te jales #Todosegunda";
	} else if (number>0 && number <=5){
    cout<<"Metele mas Ganas para que lleges al menos al supletorio";
	}else if(number>5 && number <=7){
	cout<<"Metele mas ganas que si le pasas";
        }else if(number>7 && number<=9){
            cout << "Vas bien no te confies";
        }else if (number>9&& number<= 10){
                cout<<"Confiate prro";
            }else{
                cout<<"Numero invalido";
            }
        }

