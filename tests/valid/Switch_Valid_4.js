function f$Z9bFaA$WL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$Fn$VJ$R3$10(r0){//function(Switch_Valid_4:RGB) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.Integer(1), true)){
               control_flow_pc = 2074;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 2075;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 2073;
               control_flow_repeat = true;
               continue outer;
            }
         case 2074:
            var r1 = new WyJS.Integer(123);
            return r1;//return %1 : int
            control_flow_pc = 2076;
            control_flow_repeat = true;
            continue outer;//goto label2076
         case 2075:
            var r2 = new WyJS.Integer(234);
            return r2;//return %2 : int
            control_flow_pc = 2076;
            control_flow_repeat = true;
            continue outer;//goto label2076
         case 2073:
            var r3 = new WyJS.Integer(456);
            return r3;//return %3 : int
            control_flow_pc = 2076;
            control_flow_repeat = true;
            continue outer;//goto label2076
         case 2076:
            return;
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
            var r1 = new WyJS.Integer(1);
            var r0 = f$Z9bFaA$WL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$Fn$VJ$R3$10(r1);//invoke %0 = (%1) Switch_Valid_4:f : function(Switch_Valid_4:RGB) -> int
            var r2 = new WyJS.Integer(123);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 2077;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2077:
            var r4 = new WyJS.Integer(3);
            var r3 = f$Z9bFaA$WL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$Fn$VJ$R3$10(r4);//invoke %3 = (%4) Switch_Valid_4:f : function(Switch_Valid_4:RGB) -> int
            var r5 = new WyJS.Integer(456);
            if(WyJS.equals(r3, r5, true)){
               control_flow_pc = 2078;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2078:
            var r7 = new WyJS.Integer(2);
            var r6 = f$Z9bFaA$WL1T$kJ$R6$d0$S$B5$c0kM$N4$W0$Q$Z5$Z0kM$Fn$VJ$R3$10(r7);//invoke %6 = (%7) Switch_Valid_4:f : function(Switch_Valid_4:RGB) -> int
            var r8 = new WyJS.Integer(234);
            if(WyJS.equals(r6, r8, true)){
               control_flow_pc = 2079;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2079:
            return;
      }
   }
}

