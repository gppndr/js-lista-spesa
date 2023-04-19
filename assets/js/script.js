/*
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for. Facciamo attenzione a non dimenticare tutte le differenze implementative che il ciclo while ci impone, in particolare alla variabile di indice.
*/

// definiamo la variabile per la lista che conterrà i vari list item
const list = document.querySelector('#list');

// definiamo un array per la lista della spesa
const arrShoppingList = [
    'pasta',
    'pane',
    'uova',
    'sale',
    'zucchero',
    'farina',
    'passata di pomodoro'
]

// ciclo while
let i = 0; 
while(i < arrShoppingList.length){
    let listItem = document.createElement('li');
    listItem.append(arrShoppingList[i]);
    list.append(listItem);
    i++;
};