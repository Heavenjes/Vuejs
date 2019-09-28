<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#" class="title">MyFirstApp</b-navbar-brand>
        <!-- <form class="form-inline my-2 my-lg-0">
             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
           <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
         </form>-->

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item v-on:click="redirect('/login')">Login</b-nav-item>
                <b-nav-item v-on:click="redirect('/register')">Register</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</div>
</template>

<style lang="scss" scoped>
@import"assets/colors.scss";
$titleColor:red;

.title {
    color: $primary !important;
}
</style>

<script>
import ROUTER from 'router'
export default {
    methods: {
        redirect(route) {
            ROUTER.push(route)
        }
    }
}
</script>
