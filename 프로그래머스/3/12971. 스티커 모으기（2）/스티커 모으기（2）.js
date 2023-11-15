function solution(sticker) {
    var com1=[];
    var com2=[];
    if(sticker.length==1)return sticker[0];
    com1[0]=sticker[0];
    com1[1]=sticker[0];
    for(var i=2;i<sticker.length-1;i++){
        com1[i]=Math.max(com1[i-1],com1[i-2]+sticker[i]);
    }
    com2[0]=0;
    com2[1]=sticker[1];
    for(var i=2;i<sticker.length;i++){
        com2[i]=Math.max(com2[i-1],com2[i-2]+sticker[i]);        
    }

    if(com1[com1.length-1]>com2[com2.length-1])return com1[com1.length-1];
    else return com2[com2.length-1];

}