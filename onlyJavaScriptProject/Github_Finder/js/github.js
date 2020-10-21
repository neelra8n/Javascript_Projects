class Github {
  constructor (){
    this.client_id = '01a50588346ec62fc2e1',
    this.client_secret = '13a7e343a58897b78d75eadb94211e6e118509fb',
    this.repos_count = 5,
    this.repos_sort = 'created: asc'


  }

  async getUser(user){
    const userProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await userProfile.json()
    const repos = await reposResponse.json()

    return{
      profile,
      repos
    }
  }
}
