function tree(){
    for ( i = 0; i < 10; i ++){
       if ( i == 0){
        document.getElementById("line0").innerHTML = "        #";
        console.log(document.getElementById("line0"));
       }   
        if (i ==1){
        document.getElementById("line1").innerHTML = "       ###";
       }
        if (i ==2){
        document.getElementById("line2").innerHTML = "      #####";
       }
        if (i ==3){
        document.getElementById("line3").innerHTML = "     #######";
       }
       if (i ==4){
        document.getElementById("line4").innerHTML = "    #########";
       }
       if (i ==5){
        document.getElementById("line5").innerHTML = "   ###########";
       }
       if (i ==6){
        document.getElementById("line6").innerHTML = "  #############";
       }
       if (i ==7){
        document.getElementById("line7").innerHTML = " ###############";
       }
       if (i ==8){
        document.getElementById("line8").innerHTML = "#################";
       }
       if (i ==9){
        document.getElementById("line9").innerHTML = "Press refresh to do it again";
       }
    
    }
    
}
     