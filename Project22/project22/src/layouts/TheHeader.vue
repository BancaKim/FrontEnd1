<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">감자마켓</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/">Home</router-link>
                            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About</router-link>
                            <!-- <a class="nav-link" href="#">Link</a> -->
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/posts">우리동네</router-link>
                            <!-- <a class="nav-link" href="#">Link</a> -->
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                     <!-- <div class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="button" @click="goPage">글쓰기</button>
                     </div> -->
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
    // import {useRouter} from 'vue-router';
    // const router = useRouter()
    // const goPage=()=>{
    //     router.push('/posts/create');
    // };
</script>

<style scoped>
.nav.navbar.navbar-expand-sm.navbar-dark.bg-primary {
    background-color: orange;
}
</style>