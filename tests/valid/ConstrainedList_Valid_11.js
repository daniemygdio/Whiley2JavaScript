function isLetter(r0){//function(int) -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(97);
            if(WyJS.gt(r1, r0, false)){
               control_flow_pc = 146;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(122);
            if(WyJS.lt(r0, r2, true)){
               control_flow_pc = 147;
               control_flow_repeat = true;
               continue outer;
            }
         case 146:
            var r3 = new WyJS.Integer(65);
            if(WyJS.gt(r3, r0, false)){
               control_flow_pc = 148;
               control_flow_repeat = true;
               continue outer;
            }
            var r4 = new WyJS.Integer(90);
            if(WyJS.lt(r0, r4, true)){
               control_flow_pc = 147;
               control_flow_repeat = true;
               continue outer;
            }
         case 148:
            var r5 = false;
            control_flow_pc = 149;
            control_flow_repeat = true;
            continue outer;//goto label149
         case 147:
            var r5 = true;
         case 149:
            return r5;//return %5 : bool
      }
   }
}

function f(r0){//function(ConstrainedList_Valid_11:state) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = r0.pos;//fieldload %1 = %0 pos : {[int] input,int pos}
            var r2 = r0.input;//fieldload %2 = %0 input : {[int] input,int pos}
            var r3 = r2.length;//lengthof %3 = %2 : [int]
            if(WyJS.gt(r1, r3, true)){
               control_flow_pc = 150;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = r0.input;//fieldload %5 = %0 input : {[int] input,int pos}
            var r6 = r0.pos;//fieldload %6 = %0 pos : {[int] input,int pos}
            var r7 = r5[r6];
            var r4 = isLetter(r7);//invoke %4 = (%7) ConstrainedList_Valid_11:isLetter : function(int) -> bool
            var r8 = true;
            if(r4 === r8){
               control_flow_pc = 151;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 150;
            control_flow_repeat = true;
            continue outer;//goto label150
         case 151:
            var r9 = r0.input;//fieldload %9 = %0 input : {[int] input,int pos}
            var r10 = r0.pos;//fieldload %10 = %0 pos : {[int] input,int pos}
            var r11 = r9[r10];
            return r11;//return %11 : int
         case 150:
            var r12 = new WyJS.Integer(32);
            return r12;//return %12 : int
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
            var r1 = new WyJS.List([104,101,108,108,111]);
            var r2 = new WyJS.Integer(0);
            var r3 = {input: r1, pos: r2};//newrecord %3 = (%1, %2) : {[int+] input,int pos}
            var r0 = f(r3);//invoke %0 = (%3) ConstrainedList_Valid_11:f : function(ConstrainedList_Valid_11:state) -> int
            var r4 = new WyJS.Integer(104);
            if(WyJS.equals(r0, r4, true)){
               control_flow_pc = 152;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 152:
      }
   }
}
