function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(1);
            var r4 = {x: r2, y: r3};//newrecord %4 = (%2, %3) : {int x,int y}
            var r1 = r4;//assign %1 = %4  : {int x,int y}
            var r0 = r1;//assign %0 = %1  : {int x,int y}
            var r5 = r0.y;//fieldload %5 = %0 y : {int x,int y}
            var r6 = new WyJS.Integer(1);
            if(WyJS.equals(r5, r6, true)){
               control_flow_pc = 1382;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1382:
            var r7 = r0.x;//fieldload %7 = %0 x : {int x,int y}
            var r8 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r8, true)){
               control_flow_pc = 1383;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1383:
      }
   }
}
