
$(document).ready(function() {
  $('#form-orcamento').submit(function(event) {
    event.preventDefault();

    var nome = $('#nome').val();
    var email = $('#email').val();
    var telefone = $('#telefone').val();
    var empresa = $('#empresa').val();
    var comentarios = $('#comentarios').val();
    var servicoHardware = $('#servico-hardware').is(':checked');
    var servicoSoftware = $('#servico-software').is(':checked');
    var servicoRedes = $('#servico-redes').is(':checked');
    var termos = $('#termos').is(':checked');

    if (!nome || !email || !telefone || !empresa || !termos) {
      toastr.error('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    // Validar campo de e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toastr.error('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    // Aqui você pode adicionar o código para enviar o formulário, se todos os campos estiverem preenchidos

    toastr.success('Formulário enviado com sucesso!');
    $('#form-orcamento')[0].reset();
  });

  $('#telefone').inputmask('(99) 99999-9999');

  // Remover a máscara do campo de e-mail para permitir qualquer formato
  $('#email').inputmask('remove');

  // Adicionar validação separada para o campo de e-mail usando RegExp
  $('#email').on('blur', function() {
    var email = $(this).val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && !emailRegex.test(email)) {
      toastr.error('Por favor, insira um endereço de e-mail válido.');
    }
  });
});