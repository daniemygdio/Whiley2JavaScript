var BoardState;
var output;
var array;

function startGame(numTimes, cols, rows, data){
   console.log("start");
   BoardState = Board$Z9dFad_V5$32$k$VB$w4$Y0kQ$s5$r0FN$ZM0VF$w5$W0VR$F53P8c0$l$$B$72$U0kN$w5$i0kS$35$tC$s5$W0$SE(new WyJS.Integer(cols), new WyJS.Integer(rows));
   console.log("okay..");
   var x = 0;
   var div = document.getElementById("conway");
   var conway = document.createElement("TABLE");
   var num = 0;
   array = [rows * cols]
   for (var i = cols - 1; i >= 0; i--) {
      var row = document.createElement("TR");
      for (var f = rows - 1; f >= 0; f--) {
         var col = document.createElement("TD");
         col.setAttribute("id", num.toString());
         row.appendChild(col);
         array[num] = col;
         num++;
      }
      conway.appendChild(row);
   };
   div.appendChild(conway)
   var i = 0;
   while(i < data.length){
      row = data[i];
      col = data[i+1];
      BoardState.fieldLoad("cells").getValue(row).setValue(col, true);
      i += 2;
   }
   var thing = setInterval(function () {getTheThing();BoardState = update$Y9bFXL1P$FB$$2$m$kM$B5$j0VQ$R6$W0FT4$10kQ$35$m0$OF7(BoardState);}, 500);
   setInterval(function () {stopTheThing(thing, this);}, numTimes * 1000);
   
   i = 0;
   // while(i < numTimes){
   //    getTheThing();
   //    
   //    i++;
   // }
}

function getTheThing(){
   var rows = BoardState.fieldLoad("cells");
   var numCols = rows.getValue(0).list.length;
   var x = 0;
   for(var i = 0; i < rows.list.length; i++){
      var cols = rows.getValue(i);
      for(var j = 0; j < cols.list.length; j++){
         if(cols.getValue(j)){
            array[x].innerHTML = "#";
         }else{
            array[x].innerHTML = "_"
         }
         x++;
      }
   }
}

function stopTheThing(thing, stop){
   clearInterval(thing);
   clearInterval(stop);
}

function start(){
   var data = [0, 0, 1, 1, 1, 2, 2, 0, 2, 1];
   // var data = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,3,2,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
   //             0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   //var data = [0, 0, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 8, 0, 9, 1, 0, 1, 1, 1, 2, 1, 3, 1, 4, 1, 5, 1, 6, 1, 7, 1, 8, 2, 1, 2, 2, 2, 6, 2, 7, 2, 8, 2, 9, 3, 2, 3, 3, 3, 4, 3, 6, 3, 7, 3, 8, 4, 2, 4, 3, 4, 4, 4, 6, 4, 8, 4, 9, 5, 0, 5, 1, 5, 8, 5, 9, 6, 3, 6, 4, 6, 7, 6, 9, 7, 0, 7, 1, 7, 3, 7, 5, 7, 6, 7, 7, 7, 8, 7, 9, 8, 0, 8, 1, 8, 2, 8, 5, 8, 6, 8, 7, 8, 8, 8, 9, 9, 0, 9, 1, 9, 3, 9, 4, 9, 5, 9, 6, 9, 7, 9, 8];
   startGame(35,10,10, data);
}