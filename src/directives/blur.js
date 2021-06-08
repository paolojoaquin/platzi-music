const blur = {};

// function setBlur(el, binding) {
//     el.style.filter = !binding.value ? 'blur(3px)' : 'none';
//     el.style.cursor = !binding.value ? 'not-allowed' : 'inherit';

//     el.querySelectorAll('button').forEach(elem => {
//         if(!binding.value) {
//             elem.setAttribute('disabled', true);
//         } else {
//             elem.removeAttribute('disabled');
//         }
//     });
// }
function setBlur(el, binding) {
  if (!binding.value) {
    el.style.filter = "blur(3px)";
    el.style.cursor = "not-allowed";
    el.querySelectorAll("button").forEach((button) => {
      button.setAttribute("disabled", true);
    });
  }
}

blur.install = function (Vue) {
  Vue.directive("blur", {
    bind(el, binding) {
      setBlur(el, binding);
    },
  });
};

export default blur;
