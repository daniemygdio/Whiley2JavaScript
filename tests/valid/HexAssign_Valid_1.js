function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(200);
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r3 = new WyJS.Integer(200);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1076;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1076:
            var r4 = new WyJS.Integer(1);
            var r0 = r4;//assign %0 = %4  : int
            var r5 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1077;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1077:
            var r6 = new WyJS.Integer(0);
            var r0 = r6;//assign %0 = %6  : int
            var r7 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r7, true)){
               control_flow_pc = 1078;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1078:
            var r8 = new WyJS.Integer(24343);
            var r0 = r8;//assign %0 = %8  : int
            var r9 = new WyJS.Integer(24343);
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 1079;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1079:
            var r10 = new WyJS.Integer(2143);
            var r0 = r10;//assign %0 = %10  : int
            var r11 = new WyJS.Integer(2143);
            if(WyJS.equals(r0, r11, true)){
               control_flow_pc = 1080;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1080:
            var r12 = new WyJS.Integer(2143);
            var r0 = r12;//assign %0 = %12  : int
            var r13 = new WyJS.Integer(2143);
            if(WyJS.equals(r0, r13, true)){
               control_flow_pc = 1081;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1081:
            return;
      }
   }
}

