Vue.component('father', {
  template: //html
  `
  <div class="p-5 bg-dark text-white">
    <h2>Father Component: {{NumberFather}}</h2>
    <button class="btn btn-danger" @click=NumberFather++>+</button>
    <child :numero="NumberFather" @ChildName="NameChild = $event"></child>
    <h2>Child Component: {{NameChild}}</h2>
  </div>
  `,
  data() {
    return {
      NumberFather: 0,
      NameChild: ''
    }
  }
});