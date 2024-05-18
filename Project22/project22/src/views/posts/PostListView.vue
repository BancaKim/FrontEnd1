<template>
    <div>
        <h2>게시글 목록</h2>
        <hr class="my-4">
        <div class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="button" @click="goPage">글쓰기</button>
                     </div>
    </div>
</template>

<script setup>  import {useRouter} from 'vue-router';
    const router = useRouter()
    const goPage=()=>{
        router.push('/posts/create');
    };
</script>

<style lang="scss" scoped>

</style>