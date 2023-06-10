(function() {
  'use strict';

  // Obtém o formulário com a classe "needs-validation"
  var form = document.querySelector('.needs-validation');

  // Adiciona o evento de envio ao formulário
  form.addEventListener('submit', function(event) {
    if (form.checkValidity()) {
      // Mostra a notificação de sucesso
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr.success('O formulário foi enviado com sucesso!');
    }

    form.classList.add('was-validated');
    event.preventDefault();
  }, false);

  // Adiciona eventos de validação aos campos enquanto o usuário digita
  Array.from(form.elements).forEach(function(element) {
    element.addEventListener('input', function() {
      if (!element.checkValidity()) {
        element.classList.add('is-invalid');
      } else {
        element.classList.remove('is-invalid');
      }
    });
  });
})();