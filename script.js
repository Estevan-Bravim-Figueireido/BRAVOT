function verificar() {
    
  var login = document.getElementById('txtl')
  var senha = document.getElementById('txts')

  var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (login.value === '' || senha.value === '') {
    

    login.classList.add('erro')
    senha.classList.add('erro')
  } 
  else if (!emailValido.test(login.value)) {
    login.value = ''
    login.placeholder = 'Digite um e-mail válido'
    login.classList.add('erro')
  }
  else if (senha.value.length < 7) {
    senha.value = ''
    senha.placeholder = 'Mínimo 7 caracteres'
    senha.classList.add('erro')

    alert('A senha deve ter no mínimo 7 caracteres')
  } 
  else {
    
    window.location.href = 'novo.html'
  }
}