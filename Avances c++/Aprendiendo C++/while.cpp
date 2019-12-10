/* sentencia while
whilw(expresion lógica){conjunto de instrucciones}
*/
#include<iostream>
#include<conio.h>
using namespace std;
int main(){
	int i;   // i iterador
	i=10;
	while(i>=1){
		cout<<i<<endl;
		i=i-1;// i=i-1o i += 1; i++
		
	}
	getch();
	return 0;
}

