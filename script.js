let signupBtn = document.getElementById('signupBtn')
let signinBtn = document.getElementById('signinBtn')
let nameFIELD = document.getElementById('nameField')
let title = document.getElementById('title')


signinBtn.onclick = function() {
      nameFIELD.style.maxHeight = '0'
      title.innerHTML = 'Sign In'
      signinBtn.classList.remove('disable')
      signupBtn.classList.add('disable')
}

signupBtn.onclick = function() {
      nameFIELD.style.maxHeight = '60px'
      title.innerHTML = 'Sign Up'
      signupBtn.classList.remove('disable')
      signinBtn.classList.add('disable')
}