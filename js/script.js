const range=document.querySelector('input[type="range"]');
function alterarTema(tema,auto){
  let fundo,texto,itens,botao,sombra,ativo;
    switch(tema){
      case '1':
      /*light theme*/
        fundo='#ffffff';texto='#000000';itens='#eeeeee';botao='#B0C4DE';sombra='#000000';ativo='#778899';
      break;
      case '2':
      /*dark theme*/
        fundo='#17062a';texto='#ffffff';itens='#1e0836';botao='#331b4d';sombra='#eeeeee';ativo='#56077c';
    };
        document.body.style.setProperty('--tema-fundo',fundo);document.body.style.setProperty('--tema-texto',texto);document.body.style.setProperty('--tema-itens',itens);document.body.style.setProperty('--tema-botao',botao);document.body.style.setProperty('--tema-sombr',sombra);document.body.style.setProperty('--tema-ativo',ativo);
        /*theme in localstorage*/
        localStorage.setItem('tema',tema);
          if(auto){range.value=tema}
};
const vs=document.querySelector('#visor');
function calcular(){
  if(vs.value.length===0){return}
  try{vs.value=eval(vs.value.replace(/,/g,'.'))}catch(err){}
};
function visor(digitado,operador){
  const ultimo=vs.value[vs.value.length-1];
  const op=ultimo==='*'||ultimo==='-'||ultimo==='+'||ultimo===','||ultimo==='a'||ultimo==='='?true:false;
    if(operador&&vs.value.length===0||operador&&op||digitado==='a'||digitado==='='){switch(digitado){case 'a':if(vs.value.length){vs.value=vs.value.substring(vs.value.length-1, -1)};break;case '=':calcular()};return}
      vs.value+=digitado
};