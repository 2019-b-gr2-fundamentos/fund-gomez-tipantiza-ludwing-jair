#include <iostream>
#include <stdlib.h>
using namespace std;
int main(){
char alimentos,saluda,grasas,lechee,vegetales;
int cantidad1,cantidad2,cantidad3 ;
cout<< "Ingrese el alimento a consumir,tenemos la opcion de vegetales,carnes o lacteos: ";
cin>>alimentos;
if (alimentos == vegetales) {
    cout<<" Ingrese cantidad de kg a consumir ";
    cin>>cantidad1;
    if (cantidad1 >= 200) {
    cout<<"Comes la cantidad adecuada";
    } else {
	cout<<"Deberías consumir mas";
    }
} else{
    if(alimentos == grasas){
        cout<<" Ingrese cantidad de kg a consumir";
        cin>>cantidad2;
        if (cantidad2 >= 100 && cantidad2 <= 350 ){
            cout<<"Estas comiendo bien";}
            else{
                cout<<"Estas comiendo mal"<<endl;
            }
        } else {
            if (alimentos== lechee ) {
                cout<<" Ingrese cantidad de kg a consumir ";
                cin >>cantidad3;
                if (cantidad3 <= 45 ){
                    cout<<"Consumes lacteos adecuadamente "<<endl;
                    } else {
                        cout<<"No debes ingerir muchos lacteos";}
                    }
                    else{
                        cout<<"String incorrecto";
                }
            }
}}
