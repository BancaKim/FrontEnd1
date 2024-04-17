<template>
    <div class="card">
        <img src="@/assets/macpro.png" class="card-img-top" alt="macpro">
        <div class="card-body">
            <!-- type : news, notice -->
            <span class="badge text-bg-secondary mt-2">{{typeName}}</span>
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">{{ contents }}</p>
            <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">좋아요</a>

        </div>
    </div>
</template>

<script>
import {computed} from '@vue/reactivity';
    export default {
        props:{
            type:{
                type: String,
                default: 'electronic',
                validator: (value)=>{
                    return ['electronic','clothes'].includes(value);
                }
            },
            title: {
                type: String,
                required: true,
            },
            contents: {
                type: String,
                required: true,
            },
            isLike: {
                type: Boolean,
                default: false
            },
            obj : {
                type:Object,
                default: ()=>({}),
            }
        },
    emits: ['toggleLike'],
        setup(props, context){
            // console.log('props.title ', props.title);
            const isLikeClass = computed(() => props.isLike? 'btn-danger' : 'btn-outline-danger');
            const typeName = computed(()=>props.type === 'electronic' ? '전자기기' : '옷');
            const toggleLike=()=>{
                // props.isLike = !props.isLike;
                context.emit('toggleLike')
            }
            return {isLikeClass, typeName, toggleLike};
        },
    };
</script>

<style scoped>

</style>