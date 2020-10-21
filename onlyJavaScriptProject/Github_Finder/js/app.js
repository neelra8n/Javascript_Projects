//initialize github
github = new Github()

 // initialize ui
ui = new UI()

searchUser = document.getElementById('searchUser')

searchUser.addEventListener('click', (e)=>{
  userText = document.getElementById('searchUserInput').value



  if(userText !== ''){
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        //alert no data available
        ui.showAlert()

      }else{
        //show data in ui
        ui.showProfile(data.profile)
        ui.showRepos(data.repos)

      }
    })

  }else{
    ui.askUserName()
  }
})
