const attendingForm = document.querySelector("#attending")

const config = {
  onSubmit: function(event) {
    iziToast.success({
        title: 'Merci'
    })
  },
  onResponse: function(error, response) {
    if (error) {
      iziToast.error({
          title: 'Erreur',
          message: 'Impossible de soumettre le formulaire'
      })
    }
  },
  successTemplate: ""
}

iziToast.settings({
  timeout: 2000
})

Pageclip.form(attendingForm, config)

/*
document.querySelector('.anchor-link').onclick = function(event) {
  event.preventDefault()

  document.querySelector(`section[name="${event.target.getAttribute('href')}"]`).scrollIntoView({
    behavior: 'smooth'
  })
}
*/