function contains(r0, r1){//function([int],int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            var r3 = r4;//assign %3 = %4  : int
            var r2 = r3;//assign %2 = %3  : int
            while(true){//loop (%2, %5, %6, %7, %8, %9, %10)
               var r6 = r0.length;//lengthof %6 = %0 : [int]
               if(WyJS.gt(r2, r6, true)){
                  control_flow_pc = 817;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r7 = r0[r2];
               if(r7  !=  r1){
                  var r9 = new WyJS.Integer(1);
                  var r10 = r2.add(r9);//add %10 = %2, %9 : int
                  var r2 = r10;//assign %2 = %10  : int
                  continue;
               }
               var r8 = true;
               return r8;//return %8 : bool
               var r9 = new WyJS.Integer(1);
               var r10 = r2.add(r9);//add %10 = %2, %9 : int
               var r2 = r10;//assign %2 = %10  : int
            }
         case 817:
            var r11 = false;
            return r11;//return %11 : bool
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.Integer(4);
            var r6 = [r2, r3, r4, r5];
            var r1 = r6;//assign %1 = %6  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r8 = new WyJS.Integer(0);
            var r7 = contains(r0, r8);//invoke %7 = (%0, %8) While_Valid_40:contains : function([int],int) -> bool
            var r9 = false;
            if(r7 === r9){
               control_flow_pc = 819;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 819:
            var r11 = new WyJS.Integer(1);
            var r10 = contains(r0, r11);//invoke %10 = (%0, %11) While_Valid_40:contains : function([int],int) -> bool
            var r12 = true;
            if(r10 === r12){
               control_flow_pc = 820;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 820:
            var r14 = new WyJS.Integer(2);
            var r13 = contains(r0, r14);//invoke %13 = (%0, %14) While_Valid_40:contains : function([int],int) -> bool
            var r15 = true;
            if(r13 === r15){
               control_flow_pc = 821;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 821:
            var r17 = new WyJS.Integer(3);
            var r16 = contains(r0, r17);//invoke %16 = (%0, %17) While_Valid_40:contains : function([int],int) -> bool
            var r18 = true;
            if(r16 === r18){
               control_flow_pc = 822;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 822:
            var r20 = new WyJS.Integer(4);
            var r19 = contains(r0, r20);//invoke %19 = (%0, %20) While_Valid_40:contains : function([int],int) -> bool
            var r21 = true;
            if(r19 === r21){
               control_flow_pc = 823;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 823:
            var r23 = new WyJS.Integer(5);
            var r22 = contains(r0, r23);//invoke %22 = (%0, %23) While_Valid_40:contains : function([int],int) -> bool
            var r24 = false;
            if(r22 === r24){
               control_flow_pc = 824;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 824:
      }
   }
}
