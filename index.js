// Code your solutions in this file
function writeCards(strNamesList, eventName){
    let newList = []
    
    for (let count = 0; count < strNamesList.length; count++){
        newList.push(`Thank you, ${strNamesList[count]}, for the wonderful surprise gift!`)

    }
    return newList;

}
function countDown(int){

    while(int >=0){
        console.log(int)
        int--
    }

}