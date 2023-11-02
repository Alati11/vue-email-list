const { createApp } = Vue
console.log(axios)

createApp({
    data() {
      return {
        message: 'Mail generate:',
        mailList: []
      } 
    },
    methods: {
        fetchMail() {

            for(let i = 0; i < 10; i++) {
                axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result)=> {
                    this.mail = result.data.response;
                    this.mailList.push(this.mail);
                });
            }               
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

  