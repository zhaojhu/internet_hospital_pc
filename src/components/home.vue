<template>
    <div>
        <bg :headerBool="headerBool" :menuIndex="menuIndex">
            <template v-solt:bottomTable>
                
            </template>
            <template mode="out-in">
                <router-view></router-view>
            </template>
        </bg>
    </div>
</template>
<script>
import bg from './coverSolt.vue'
export default {
    components: {
        bg,  
    },

    data() {
        return {
            
        }
    },

    props:{
        headerBool:{
            type:Boolean,
            default:false,
        },
        
        menuIndex:{
            type:Number,
            default:-1,
        }
    },
    
}
</script>
<style scoped>
    
</style>