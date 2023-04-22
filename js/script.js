const visor=document.querySelector('#visor>input');
function exibir(valor,resultado){
  if(!valor){return}else{
     if(resultado){limpar(resultado)}
       visor.value+=valor;
       visor.scrollLeft+=visor.scrollWidth;
  }
}
function numero(valor){
  exibir(valor);
}
function limpar(tudo){
  if(tudo){
     visor.value='';
  }else{
     visor.value=visor.value.substring(0,visor.value.length-1);
  }
}
let parenteses;
function operador(valor){
  this.e_numero=function(valor){
    return !isNaN(parseInt(valor));
  }
  this.e_operador=function(valor){
    return valor==='('||valor==='÷'||valor==='x'||valor==='-'||valor==='+'?true:false;
  }
  const ultimo=visor.value[visor.value.length-1];
  const op=e_operador(ultimo);
  const vazio=visor.value.length;
  if(op&&valor!=='('||e_numero(ultimo)&&valor==='('||!vazio&&valor==='÷'||!vazio&&valor==='x'){return}
  switch(valor){
    case '(':
      if(!parenteses){
          parenteses=true;
            valor='(';
      }else{
          parenteses=false;
            valor=')';
      }
  }
    exibir(valor);
}
function calcular(){
  try{
    let calc=visor.value.replace('x','*');
        calc=calc.replace('÷','/');
    exibir(eval(calc),true);
  }catch(err){}
}