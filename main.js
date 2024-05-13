// criando a instancia do Vue, que é um objeto e a partir dela 
// conseguimos montar a aplicação. Agora ja temos acesso a todas
// as ferramentas disponiveis no framework Vue
const app = Vue.createApp({
  data(){
    return{
      listContacts: [
        {
          firstName: 'Andre',
          lastName: 'Luiz',
          email: 'andre.luiz@gmail.com',
          city: 'Caratinga',
          picture: 'https://randomuser.me/api/portraits/men/57.jpg',
        },
        {
          firstName: 'Ataliba',
          lastName: 'Couto',
          email: 'ataliba@gmail.com',
          city: 'Barbacena',
          picture: 'https://randomuser.me/api/portraits/men/56.jpg',
        },
        {
          firstName: 'Francisco',
          lastName: 'Luiz',
          email: 'francisco.luiz@gmail.com',
          city: 'Ipatinga',
          picture: 'https://randomuser.me/api/portraits/men/55.jpg',
        },
        {
          firstName: 'Claudia',
          lastName: 'Monica',
          email: 'claudia@gmail.com',
          city: 'Governador Valadares',
          picture: 'https://randomuser.me/api/portraits/men/54.jpg',
        }
        
      ]
    }
  },
  methods: {
    changeData(){
      this.firstName = 'Fernando',
      this.lastName = 'Lucas',
      this.email = 'fernando.lucas@gmail.com',
      this.city = 'Caratinga',
      this.picture = 'https://randomuser.me/api/portraits/men/56.jpg'
    },
    async getData(){
      let response = await fetch('https://randomuser.me/api/?results=15');

      // Exibindo os dados no console do navegador
      // console.log(response.json());

      // Armazenando os dados do json
      let data = await response.json();

      // Remover todos os items do array listContacts
      this.listContacts = []
      
      // console.log(contact);
      
      data.results.forEach(item =>{
        var contact = new Object();

        contact.firstName = item.name.first;
        contact.lastName = item.name.last;
        contact.email = item.email;
        contact.city = item.location.city;
        contact.picture = item.picture.large;

        this.listContacts.push(contact)
      })

    }
  }
})

// o método mount, fica monitorando e gerenciando o conteudo de app
// que criamos na index
app.mount('#app');