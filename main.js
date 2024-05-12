



// criando a instancia do Vue, que é um objeto e a partir dela 
// conseguimos montar a aplicação. Agora ja temos acesso a todas
// as ferramentas disponiveis no framework Vue
const app = Vue.createApp({
  data(){
    return{
      firstName: 'Caio',
      lastName: 'Duarte',
      email: 'caio.duarte@gmail.com',
      city: 'Cajamar',
      picture: 'https://randomuser.me/api/portraits/men/57.jpg'
    }
  },
  methods: {
    changeData(){
      this.firstName = 'Fernando',
      this.lastName = 'Lucas',
      this.email = 'fernando.lucas@gmail.com',
      this.city = 'Caratinga',
      this.picture = 'https://randomuser.me/api/portraits/men/56.jpg'
    }
  }
})

// o método mount, fica monitorando e gerenciando o conteudo de app
// que criamos na index
app.mount('#app');