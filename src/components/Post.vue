<template>
    <div>
        <div v-if="loading" >
            Loading...
        </div>

        <div v-if="error">
            {{ error }}
        </div>

        <div v-if="post">
            <div v-for="user in post" :key="user.Id">
            <h2>{{ user.Id }}</h2>
            <p>{{ user.Name }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loading: false,
            post: null,
            error: null
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        getPost (id, result) {
            this.axios.get(
                'http://127.0.0.1:9000/users',
                null,
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }
                ).then(function (res) {
                    result('', res.data)
                 })
        },
        fetchData () {
            this.error = this.post = null
            this.loading = true

            this.getPost(this.$route.params.id, (err, post) => {
                this.loading = false
                if (err) {
                    this.error = err.toString()
                } else {
                    this.post = post
                }
            })
        }
    }
}
</script>
