

let myVue = new Vue({
  el:"#app",
  data:{
    url:"https://pokeapi.co/api/v2/pokemon/?limit=964",
    pokemons:{},
    search:""
  },
  methods: {
    getPokemons(){
      fetch(this.url)
      .then(data => data.json())
      .then(json => {
        myVue.pokemons = json.results;
      })
      .catch(error => alert(error));
    },
  },
  computed: {
    printPokemons(){
      if(this.search){
        return this.pokemons.filter(pokemon=>{
          return pokemon.name.includes(this.search);
         });
      }
      else{
        return this.pokemons;
      }
    },
  },
  mounted() {
    this.getPokemons();
  }
});



