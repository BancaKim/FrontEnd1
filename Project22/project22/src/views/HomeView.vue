<template>
    <main>
        <div class="container py-4">
            <PostCreate @create-post="createPost"></PostCreate>

            <hr class="my-4">
            <div class="row g-5">
                <div v-for="post in posts" :key="post.id" class="col col-4">
                    <AppCard :title="post.title" :contents="post.contents" :type="post.type" :is-like="post.isLike"
                        @toggleLike="post.isLike = !post.isLike">
                    </AppCard>
                </div>
            </div>

            <hr class="my-4">
            <LabelInput v-model="username" label="이름" class="parent-classa" style="color: red" id="parent-id"></LabelInput>
        </div>
    </main>
</template>

<script>
    import { ref } from 'vue';
    import {reactive} from 'vue';
    import AppCard from '@/components/AppCard.vue';
    import PostCreate from '@/components/PostCreate.vue';
    import LabelInput from '@/components/LabelInput.vue';

    export default {
        components : {
            AppCard,
            PostCreate,
            LabelInput,
        },
        setup(){
            const obj = reactive({
                title:'제목2',
                contents: '내용2'
            });
            const posts =reactive([
                {id:1, title:'맥북프로 M2',contents:'180만원', isLike: true, type:'electronic'},
                { id: 2, title: '아이폰15', contents: '130만원', isLike: true, type: 'electronic' },
                { id: 3, title: '아이패드 에어', contents: '80만원', isLike: true, type: 'electronic' },
                { id: 4, title: '에어팟 프로', contents: '20만원', isLike: true, type: 'electronic' },
                { id: 5, title: '스투시 반팔티', contents: '30만원', isLike: false, type: 'clothes' },
                { id: 6, title: '꼼데가르숑 가디건', contents: '30만원', isLike: false, type: 'clothes' }
            ]);
            const createPost= newPost =>{
                console.log('newPost: ', newPost);
                posts.push(newPost);
            };
            const username = ref('');
            const firstname = ref('');
            const lastname = ref('');
            return { obj, posts, createPost, username, firstname, lastname };
        },
    };
</script>

<style scoped>

</style>