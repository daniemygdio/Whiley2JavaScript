function f(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = 1;//const %1 = 1 : int
            var r2 = r0 + r1;//add %2 = %0, %1 : int
            return r2;//return %2 : int
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
            var r1 = 9;//const %1 = 9 : int
            var r0 = f(r1);//invoke %0 = (%1) ConstrainedInt_Valid_21:f : function(int) -> int
            var r2 = 10;//const %2 = 10 : int
            if(r0  ==  r2){//ifeq %0, %2 goto label2375 : int
               control_flow_pc = 2375;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2375:
      }
   }
}

test();