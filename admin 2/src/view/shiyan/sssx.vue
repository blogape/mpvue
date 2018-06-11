<template>
    <div>
    <button @click="AddList">111111111111111111111111</button>
</div>
    </div>
</template>
<script>
export default {
    data () {
    return{
}
},
        methods:{
             AddList () {
                  console.log( window.localStorage.getItem("user"))
                 let  usertoken = window.localStorage.getItem("user")
              
              console.log(usertoken.token)

    }
        }
    

}
</script>

