<template>
    <div class="row">
        <div class="col col-2">
            <select v-model="type" class="form-select" aria-label="Default select example">
                <option value="electronic">전자기기</option>
                <option value="clothes">옷</option>
            </select>
        </div>
        <div class="col col-8">
            <input v-model="title" type="text" class="form-control">
        </div>
        <div class="col col-2 d-grid">
            <!-- <button class="btn btn-primary" @click="$emit('createPost',1,2,3, '김길동')">button</button> -->
            <button class="btn btn-primary" @click="createPost">button</button>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';

    export default {
        // emits:['createPost'],
        emits: {
            createPost: newTitle=>{
                console.log('validator:', newTitle);
                if (!newTitle) {
                    return false;
                }
                return true;
            },
        },
        setup(props, {emit}){
            // context.emit
            const type = ref('news');
            const title = ref('');
            const createPost=()=>{
                const newPost = {
                    type: type.value,
                    title: title.value
                }
                emit('createPost',newPost);
            };
        return {createPost,type, title};
    },
};
</script>

<style scoped>

</style>