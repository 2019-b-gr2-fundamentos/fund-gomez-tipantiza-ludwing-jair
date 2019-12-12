#include<iostream>
#include<math.h>
#include<stdlib.h>
#include<conio.h>
using namespace std;

void universidad();
bool verificarentrada(string op);
string unis(string op);
void Encontrarprime(string UniversidadUno , string UniversidadDos , string UniversidadTres);
void Again();
void PreguntaRemplazo();


int main(){
    universidad();
    getch();
    return 0;
}

void universidad(){
    cout<<"\n\t\tTorneo de Ciencias 'Gotitas del saber'\n\n\t\tDicho concurso esta destinado a simular una competencia y\n";
	cout<<"\t\t simular la universidad que sera la ganadora\n";
	cout<<"\nEscuela Politecnica Nacional (EPN)(1)\nEscuela Politecnica del Ejercito (ESPE)(2)";
	cout<<"\nUniversidad Tecnica Equinoccial(UTE)(3)\nUniversidad de las Americas (UDLA)(4)";
	cout<<"\nUniversidad Tecnica Particular de Loja (UTPL)(5)\nUniversidad Metropolitana (UMET)(6)";
	cout<<"\nEscuela Sup. Politecnica de Chimborazo (ESPOCH)(7)\nUniversidad Técnica de Ambato (UTA)(8)";
	cout<<"\nUniversidad Central del Ecuador (UCE)(9)\nPontificia Univ. Catolica del Ecuador (PUCE)(10)\n\n";
	cout<<"------------------------NOTA--------------------------------"<<endl;
	cout<<"Utilizaremos la notacion de los parentesis ya sea las siglas o el numero";
	cout<<"-------------------------FIN---------------------------------\n\n"<<endl;

   
    string toptres[3];

    for(int indice= 0; indice<3; indice++){
        cout<<"\nSegun tu consideracion cuales son las 3 mejores universidades del Ecuador #"<<indice+1<<": "; cin>>toptres[indice];
       bool resultado =  verificarentrada(toptres[indice]);
        if(resultado == false){
            cout<<"\n No Has elegido una universidad que esta dentro del top 10 \n";
            indice= indice-1;
        }
        if(resultado == true){
           
                if(toptres[indice]==toptres[0]){
                toptres[indice] = unis(toptres[indice]);
                cout<<"\t\t\t Has escogido una de 3 universidades";
				cout<<"["<<toptres[0]<<", "<<toptres[1]<<", "<<toptres[2]<<"] ";
            } 
            if(toptres[indice]==toptres[1]){
                toptres[indice] = unis(toptres[indice]);
                bool sirepite = toptres[1]==toptres[0] || toptres[1]==toptres[2] ;
                    if(sirepite==false){
                        
                        cout<<"\t\t\t Has escogido dos de tres universidades:";
						cout<<"["<<toptres[0]<<", "<<toptres[1]<<", "<<toptres[2]<<"] ";
                    }else{
                        cout<<"\n Has elegido una universidad que ya la has escogido antes\n";
                        indice = indice-1;
                    }
            }
            if(toptres[indice]==toptres[2]){
                toptres[indice] =unis(toptres[indice]);
                bool sirepite1 = toptres[2]==toptres[0] || toptres[2]==toptres[1] ;
                    if(sirepite1==false){                       
                        cout<<"\t\t\t Tu top tres de mejores Universidades es:";
						cout<<"["<<toptres[0]<<", "<<toptres[1]<<", "<<toptres[2]<<"] ";
                    }else{
                        cout<<"\n Has elegido una universidad igual a la del string\n";
                        indice = indice-1;
                    }
            }
            
            }
        }
	string respuesta;
	int elegir;
    cout<<"\n\n Estas seguro de que estas son las mejores ? Espero y no te arrepientas\n\n";
    cout<<"¿Te animas a descartar dos universidades para que definas la mejor universidad del pais?¿si--->1 o no------>2?";
    cin>>elegir;
    if (elegir==1){
   	Encontrarprime(toptres[0] , toptres[1] , toptres[2]);
	}if(elegir==2){
	cout<<"Hemos quedado hasta aqui con los tres mejores";
	}
}

bool verificarentrada(string op){
    
    bool UEPN = op=="1" || op== "EPN" ;
    bool UESPE = op== "2" || op== "ESPE";
    bool UUTE = op== "3" || op== "UTE";
    bool UUDLA =  op=="4" || op== "UDLA";
    bool UUTPL= op== "5" || op== "UTPL";
    bool UUMET = op== "6" || op== "UMET";
    bool UESPOCH = op== "7" || op== "ESPOCH";
    bool UUTA = op== "8" || op== "UTA";
    bool UUCE = op== "9" || op== "UCE";
    bool UPUCE= op== "10" || op== "PUCE";
    bool esvalido = UEPN || UESPE || UUTE||UUDLA||UUTPL||UUMET||UESPOCH||UUTA||UUCE||UPUCE;

    return esvalido;


}

string unis(string op){
    bool UEPN = op=="1" || op== "EPN" ;
    bool UESPE = op== "2" || op== "ESPE";
    bool UUTE = op== "3" || op== "UTE";
    bool UUDLA =  op=="4" || op== "UDLA";
    bool UUTPL= op== "5" || op== "UTPL";
    bool UUMET = op== "6" || op== "UMET";
    bool UESPOCH = op== "7" || op== "ESPOCH";
    bool UUTA = op== "8" || op== "UTA";
    bool UUCE = op== "9" || op== "UCE";
    bool UPUCE= op== "10" || op== "PUCE";
        
    string mejores;
    if(UEPN){
        mejores = "EPN";
    }
    if(UESPE){
        mejores = "ESPE";
    }
    if(UUTE){
        mejores = "UTE";
    }
    if(UUDLA){
        mejores = "UDLA";
    }
    if(UUMET){
        mejores = "UMET";
    }
    if(UUTPL){
        mejores = "UTPL";
    }
    if(UESPOCH){
        mejores = "ESPOCH";
    }if(UUTA){
        mejores = "UTA";
    }if(UUCE){
        mejores = "UCE";
    }if(UPUCE){
        mejores = "PUCE";
    }
    return mejores;

}
void Encontrarprime(string UniversidadUno, string UniversidadDos, string UniversidadTres){
    string TresUni[] = {UniversidadUno, UniversidadDos, UniversidadTres};
    cout<<"Tus tres elegidos anteriorrmete son: ["<<UniversidadUno<<", "<<UniversidadDos<<", "<<UniversidadTres<<"]\n\n";
	 cout<<"Que Universidad vas a eliminar?\n";
    for(int i=0; i<3; i++){
        cout<<TresUni[i]<<"===> "<<i+1<<". "<<endl;
    }
    string EliminarUniversidad[2];

    cout<<"\nEl tercero mejor es: "; cin>>EliminarUniversidad[0];
    cout<<"\nLa segunda universidad de mejor calidad para ti es : "; cin>>EliminarUniversidad[1];

    for(int j=0; j<2; j++){
       if(EliminarUniversidad[j] == "1"){
           TresUni[0] = "eliminado";
        }
       if(EliminarUniversidad[j] == "2"){
           TresUni[1] = "eliminado";
        }
       if(EliminarUniversidad[j] == "3"){
           TresUni[2] = "eliminado";
        }
        
  
    }
    
    string Campeona[1];
    int variable = 0;
    for(int i = 0; i<3; i++){
        if(TresUni[i]!="eliminado"){
		Campeona[variable]= TresUni[i];
		variable+=1;
		
        }

    }
	cout<<"\n\tTu mejor Universidad es:\n\n["<<Campeona[0]<<"]"; 
	Again();
}
void Again(){
    cout<<"\n\nPara jugar de nuevo presiona ===> 1.\nSi ya no quieres jugar presiona cualquier otra tecla dos veces. \n";
            int jugarNuevamente; cin>>jugarNuevamente;
            if(jugarNuevamente == 1){
                main();
            }
}
