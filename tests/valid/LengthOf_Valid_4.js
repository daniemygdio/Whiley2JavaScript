function len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0$C6$g0FP$B6$o0FP$75$m0(r0){//function(LengthOf_Valid_4:listibr) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.length();//lengthof %1 = %0 : [bool]|[int]|[real]
            return r1;//return %1 : int
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
            var r4 = true;
            var r5 = false;
            var r6 = true;
            var r7 = new WyJS.List([r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Bool()));
            r3 = r7.clone();//assign %3 = %7  : [bool]
            r0 = r3.clone();//assign %0 = %3  : [bool]
            var r8 = len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0$C6$g0FP$B6$o0FP$75$m0(r0);//invoke %8 = (%0) LengthOf_Valid_4:len : function(LengthOf_Valid_4:listibr) -> int
            var r9 = new WyJS.Integer(3);
            if(WyJS.equals(r8, r9, true)){
               control_flow_pc = 1207;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1207:
            var r11 = new WyJS.Integer(1);
            var r12 = new WyJS.Integer(2);
            var r13 = new WyJS.List([r11, r12], new WyJS.Type.List(new WyJS.Type.Int()));
            r10 = r13.clone();//assign %10 = %13  : [int]
            r1 = r10.clone();//assign %1 = %10  : [int]
            var r14 = len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0$C6$g0FP$B6$o0FP$75$m0(r1);//invoke %14 = (%1) LengthOf_Valid_4:len : function(LengthOf_Valid_4:listibr) -> int
            var r15 = new WyJS.Integer(2);
            if(WyJS.equals(r14, r15, true)){
               control_flow_pc = 1208;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1208:
            var r17 = new WyJS.Real(1.0);
            var r18 = new WyJS.Real(2.0);
            var r19 = new WyJS.Real(3.0);
            var r20 = new WyJS.Real(4.0);
            var r21 = new WyJS.List([r17, r18, r19, r20], new WyJS.Type.List(new WyJS.Type.Real()));
            r16 = r21.clone();//assign %16 = %21  : [real]
            r2 = r16.clone();//assign %2 = %16  : [real]
            var r22 = len$Z9bFaA$WL1c$$I$J5$i0kO$F6$c0kI$N5$U0VK$35$g0FP$F5$U0$C6$g0FP$B6$o0FP$75$m0(r2);//invoke %22 = (%2) LengthOf_Valid_4:len : function(LengthOf_Valid_4:listibr) -> int
            var r23 = new WyJS.Integer(4);
            if(WyJS.equals(r22, r23, true)){
               control_flow_pc = 1209;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1209:
      }
   }
}

