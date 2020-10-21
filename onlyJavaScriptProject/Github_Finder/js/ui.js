class UI {
 constructor (){
  this.profile = document.getElementById('profile')
 }

 showRepos(repos){
   let output = ''

   repos.forEach(repo =>{
    output += `
        <div class="card card-body mb2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <span class="badge badge-primary">${repo.stargazers_count}</span>
            <span class="badge badge-secondary">${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
        </div>
        </div>
    `

   })

   document.getElementById('repos').innerHTML = output

 }



 showProfile(user){
   this.profile.innerHTML = `
    <div class = "card card-body mb-3">
      <div class = "row">
        <div class = "col-md-3">
          <img class = "img-fluid mb-2" src = "${user.avatar_url}">
          <a href = "${user.html_url}" target = "blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
        </div>
          <div class = "col-md-9">
             <span class = "badge badge-primary mb-2">Public Repos: ${user.public_repos}</span>
            <span class = "badge badge-primary mb-2">Public Gists: ${user.public_gists}</span>
            <span class = "badge badge-primary mb-2">Public Followers: ${user.followers}</span>
            <span class = "badge badge-primary mb-2">Public Following: ${user.following}</span>
              <br><br>
              <ul class ="list-group">
                <li class ="list-group-item">Company: ${user.company}</li>
                <li class ="list-group-item">Website/Blog: ${user.blog}</li>
                <li class ="list-group-item">Location: ${user.location}</li>
                <li class ="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
          </div>
       </div>
      </div>
      <h3 class = "page-heading mb-3">Latest Repos</h3>
      <div id = "repos"></div>
   `
 }

  showAlert(){
  this.profile.innerHTML = `<p class="alert alert-danger">No such profile exists</p>`
  setTimeout(() => {
    this.profile.innerHTML = ''
  }, 3000);
}

  askUserName(){
    this.profile.innerHTML = `<p class="alert alert-info">Please Enter User Name</p>`
    setTimeout(() => {
      this.profile.innerHTML = ''
    }, 3000);
  }


}

