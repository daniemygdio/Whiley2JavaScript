function f(r0){//function([int]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(5);
            var r2 = new WyJS.Integer(0);
            var r3 = new WyJS.Integer(5);
            r0[r2] = r3;//update %0[%2] = %3 : [int] -> [int]
            return r0;//return %0 : [int]
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
            var r5 = [r2, r3, r4];
            var r1 = r5;//assign %1 = %5  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r6 = f(r0);//invoke %6 = (%0) ListAssign_Valid_11:f : function([int]) -> [int]
            var r7 = new WyJS.Integer(5);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(3);
            var r10 = [r7, r8, r9];
            if(WyJS.equals(r6, r10, true)){
               control_flow_pc = 1964;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1964:
      }
   }
}
