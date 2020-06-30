const vm = new Vue({
    el: '#app',
    data() {
        return {
            bitcoin: [],
            email: '',
            password: '',
            success: ''
        }
    },
    
    mounted() {
        axios.get('http://localhost:3000/projects').then(result => {
            this.bitcoin = result.data
        }).catch(err => {
            this.bitcoin = err
        })
    },

    // methods: {
    //     login() {
    //         let data = {
    //             password: this.password,
    //             email: this.email
    //         }
    //         axios.put(url + '/login', data).then(() => {
    //             this.success = 'Successfully logged in'
    //         }).catch(err => {
    //             this.success = err
    //         })
    //     }
    // }
})
