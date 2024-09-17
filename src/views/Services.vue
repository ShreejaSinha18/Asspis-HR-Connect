<script setup>

</script>

<template>
    <div id="head">
        <a style="float: right; width: 45px; margin-top: 50px; margin-right: 50px; text-decoration: none; color: black;" href="/login">Login</a>
        <h1>ASSPIS HR CONNECT</h1>
        <div class="menu">
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="#">Pricing</a>
            <a href="/about">About Us</a>
            <a href="#">Testimonials</a>
            <a href="/contact">Contact Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
        </div>
    </div>
    <div id="body">
        <h3 style="text-align: center;">Please select any of our services!!</h3>
        <div class="card">
            <img src="../assets/hr-services.jpg">
            <p style="text-align: center; font-weight: bold; font-size: large;">HR Services</p>
        </div>
        <div class="card">
            <img src="../assets/employee-services.jpg">
            <p style="text-align: center; font-weight: bold; font-size: large;">Employee Services</p>
        </div>
    </div>
</template>

<style scoped>

.card{
    display: inline-block;
    width: 500px;
    height: 400px;
    background-color: rgb(213, 250, 255);
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    margin-left: 150px;
}
.card:hover{
    transform: translate(10px,-10px);
}
img{
    width: 400px;
    height: 250px;
    padding-top: 40px;
    padding-left: 48px;
}

</style>