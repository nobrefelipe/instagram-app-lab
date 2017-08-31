import algoliasearch from 'algoliasearch';

const ALG_SEARCH = algoliasearch("MNOO20MRXC", "9ddd332e7578b0f59c011c5c6c9793c0");

let index = ALG_SEARCH.initIndex("Posts");


export default  {
  name: 'search',

  data() {
    return {

      noResults: false,
      results: null,
      indice: 'Posts',
      input: ''

    }
  },

  computed:{

    Results(){

      return this.results;

    },

    showNoResults(){

      return this.noResults;

    },

    currentIndice(){

      return this.indice;

    }

  },


  methods:{

    onSelectFilter(indice, el){

      this.input = '';

      this.indice = indice;

      index = ALG_SEARCH.initIndex(indice);

      const active = document.querySelector('.selected');

      if(active){
        active.classList.remove('selected');
      }

      el.target.classList.add('selected');
      
      this.onSearch();

    },


    onSearch(){

      index.search(this.input, (err, res) => {
console.log(res.hits)
        if(res.hits.length){

          this.results = res.hits;
          this.noResults = false;

        }else{

          this.results = res.hits;
          this.noResults = true;

        }

      });

    },

    onSelectTag(tag){

      index = ALG_SEARCH.initIndex('Posts');

      this.indice = 'Posts';
      this.input = tag;
      
      this.onSearch()

    }

  },


  mounted() {

    this.onSearch();

  }

}

