<template>
    <div>
        <app-header></app-header>
        <app-navbar></app-navbar>
        <app-main></app-main>
    </div>
</template>

<style scoped>
    .header{
        position: absolute;
        line-height: 50px;
        top: 0;
        left: 0;
        right: 0;
        background-color: #2d3a4b;
    }
    .navbar {
        position: absolute;
        width: 230px;
        top: 50px;
        left: 0;
        bottom: 0;
        overflow-y: auto;
    }
    .main {
        position: absolute;
        top: 50px;
        left: 230px;
        right: 0;
        bottom: 0;
        padding: 10px;
        overflow-y: auto;
    }
</style>

<script>
import AppHeader from "./appHeader"
import AppMain from "./appMain"
import AppNavbar from "./appNavbar"

export default {
    components: {AppHeader, AppMain, AppNavbar}
}
</script>