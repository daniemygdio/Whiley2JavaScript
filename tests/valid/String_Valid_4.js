function repl$Z9fFa8sNBVk4y2(r0, r1, r2){//function(int,int,[int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r5 = new WyJS.Integer(0);
            var r4 = r5;//assign %4 = %5  : int
            var r3 = r4;//assign %3 = %4  : int
            while(true){//loop (%2, %3, %6, %7, %8, %9, %10)
               var r6 = new WyJS.Integer(0);
               if(WyJS.gt(r3, r6, true)){
                  control_flow_pc = 2201;
                  control_flow_repeat = true;
                  continue outer;
               }
               throw {name: 'Assert Failed', message: 'fail'}
            case 2201:
               var r7 = r2.length();//lengthof %7 = %2 : [int]
               var r8 = r2.getValue(r3);
               r2.setValue(r3, r1);
               var r9 = new WyJS.Integer(1);
               var r10 = r3.add(r9);//add %10 = %3, %9 : int
               var r3 = r10;//assign %3 = %10  : int
            }
         case 2202:
            return r2;//return %2 : [int]
      }
   }
}

function test$1A_7VkE(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.List([72,101,108,108,111,32,87,111,114,108,100]);
            r1 = r2.clone();//assign %1 = %2  : [int+]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r4 = new WyJS.Integer(108);
            var r5 = new WyJS.Integer(49);
            var r3 = repl$Z9fFa8sNBVk4y2(r4, r5, r0);//invoke %3 = (%4, %5, %0) String_Valid_4:repl : function(int,int,[int]) -> [int]
            var r6 = new WyJS.List([72,101,49,49,111,32,87,111,114,49,100]);
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 2204;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2204:
      }
   }
}

