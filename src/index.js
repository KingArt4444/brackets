module.exports = function check(str, bracketsConfig) {
  var arrLen = bracketsConfig.length;
  var flag = 0;
  var lastOpened = [];
  var equal = 0;
  var row = 0;
  for(var i = 0; i<str.length; i++){
      for(var j = 0; j<arrLen; j++){
          if(str[i] == bracketsConfig[j][0]){
              if(bracketsConfig[j][0] == bracketsConfig[j][1] && equal    == 0){
                 flag++;
                  lastOpened.push(j); 
                  equal++;
                  row++;
                  continue;
              }else if(bracketsConfig[j][0] == bracketsConfig[j][1] &&  equal == 1){
                 flag--;
                  if(lastOpened.pop() != j){
                   return false;
                  } 
                  equal--;
                  continue;
               }
              flag++;
              lastOpened.push(j);
          }else if(str[i] == bracketsConfig[j][1]){
              flag--;
              var res = lastOpened.length;
              if(lastOpened.pop() != j){
                 // lastOpened.pop();
             // }else{
                  return false;
              }
          }
          if(flag < 0){
              return false;
          }
      }
  }
    if(flag == 0){
        return true;
    }else{
        return false;
    }
}
