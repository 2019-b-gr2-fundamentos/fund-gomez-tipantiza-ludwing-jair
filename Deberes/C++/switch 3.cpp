#include <iostream>
#include <stdlib.h>
int main (){
char material;
cout<<"Ingrese la herramienta a comprar Disponemos de martillos,cemento y clavos";
cin>> material
switch (material){
  case 'martillo':
    cout"Disponemos martillos de alta calidad y de baja calidad su precio varia entre 1.50$ y 3$'";
    break;
  case 'cemento':
  cout<<"Disponemos de cemento Rocafuerte el precio es 7$";
  break;
  case 'clavos':
    cout"Los clavos de 3 pulgadas estan a 2$ la libra";
    break;
  default:
      cout"No disponemos de otra herramienta por el momento"
    }
	}
