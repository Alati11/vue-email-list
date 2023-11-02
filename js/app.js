const { createApp } = Vue
console.log(axios)

createApp({
    data() {
      return {
        message: 'Mail generate:',
        mail: ''
      }
    },
    methods: {
        fetchMail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {
                    console.log(res.data);
                    const name = res.data.response;
                    this.mail = name;
                    
                })                       
        }
    },
    created() {
        this.fetchMail()
    },
  }).mount('#app')

    //   axios
    //   .get("https://flynn.boolean.careers/exercises/api/random/mail")
    //   .then((res) =>{
    //     console.log(res.data);
    //   })

  