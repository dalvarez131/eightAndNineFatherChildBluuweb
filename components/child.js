Vue.component('child', {
  template:
  `
  <div class="py-5 bg-success">
    <h4>Child Component<h4>
    <h4>{{ numero }}</h4>
    <h4>Nombre: {{nombre}}</h4>
  </div>
  `,
  props: ['numero'],
  data() {
    return {
      nombre: 'Diana'
    }
  },
  mounted() {
    this.$emit('ChildName', this.nombre);
  },
});