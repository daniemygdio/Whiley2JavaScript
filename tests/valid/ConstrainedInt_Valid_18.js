function atob(r0){//function(ConstrainedInt_Valid_18:anat) -> ConstrainedInt_Valid_18:bnat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
      }
   }
}

function btoa(r0){//function(ConstrainedInt_Valid_18:bnat) -> ConstrainedInt_Valid_18:anat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : int
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
            var r2 = 1;//const %2 = 1 : int
            var r1 = r2;//assign %1 = %2  : int
            var r0 = r1;//assign %0 = %1  : int
            var r3 = atob(r0);//invoke %3 = (%0) ConstrainedInt_Valid_18:atob : function(ConstrainedInt_Valid_18:anat) -> ConstrainedInt_Valid_18:bnat
            var r4 = 1;//const %4 = 1 : int
            if(r3  ==  r4){//ifeq %3, %4 goto label2363 : int
               control_flow_pc = 2363;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2363:
            var r5 = btoa(r0);//invoke %5 = (%0) ConstrainedInt_Valid_18:btoa : function(ConstrainedInt_Valid_18:bnat) -> ConstrainedInt_Valid_18:anat
            var r6 = 1;//const %6 = 1 : int
            if(r5  ==  r6){//ifeq %5, %6 goto label2364 : int
               control_flow_pc = 2364;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2364:
      }
   }
}

test();