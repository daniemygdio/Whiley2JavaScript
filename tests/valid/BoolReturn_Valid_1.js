function pred$Y9_Fc$3y(){//function() -> bool
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r0 = false;
            return r0;//return %0 : bool
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
            var r0 = pred$Y9_Fc$3y();//invoke %0 = () BoolReturn_Valid_1:pred : function() -> bool
            var r1 = true;
            if(r0 === r1){
               control_flow_pc = 1186;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1187;
            control_flow_repeat = true;
            continue outer;//goto label1187
         case 1186:
            throw {name: 'Assert Failed', message: 'fail'}
         case 1187:
      }
   }
}

