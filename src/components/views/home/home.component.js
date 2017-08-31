export default  {
  name: 'home',
  props: [],

  data() {
    return {
      
    }
  },

  mounted() {

    this.$store.dispatch('update_header_title', 'Instagram');
  },
}

