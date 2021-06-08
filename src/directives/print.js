const print = {};

function printSection ( el, binding ){
   //inserting css
   let style = document.createElement('style');
   style.type = 'text/css';
   style.appendChild(document.createTextNode("@media screen{#printSection{display:none}}@media print{#printSection,body{overflow:visible!important}body *{visibility:hidden}#printSection,#printSection *{visibility:visible}#printSection{position:absolute;left:0;top:0;right:0}#printSection table{width:100%!important}}"));
   document.body.appendChild(style);

   let printSection = document.getElementById('printSection');

   if (!printSection) {
      printSection = document.createElement('div');
      printSection.id = 'printSection';
      document.body.appendChild(printSection);
  }

   el.addEventListener('click', () => {
      var elemToPrint = document.getElementById(binding.value);
      if (elemToPrint) {
         printSection.innerHTML = '';
         printElement(elemToPrint);
      }
   });

   function printElement( elem ){
      let domClone = elem.cloneNode(true);
      printSection.appendChild(domClone);
      window.print();
   }
}

print.install = function( Vue ){
   Vue.directive('print',{
      bind( el, binding){
         printSection( el, binding )
      }
   })
}

export default print;