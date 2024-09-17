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
        <div class="detail">
            <h3>Contact Us 24/7</h3>
            <p>Phone No: +916290723349</p>
            <p>Email Id: asspis.hrconnect@gmail.com</p>
        </div>
        <div class="chat-box" style="bottom: 60px; right: 50px;">
            <img style="width: 50px; height: 50px;" src="../assets/chatbot_icon.png">
        </div>
        <div class="chat-box">
            <a href="#">Chat with us!!</a>
        </div>
    </div>
</template>

<style scoped>

.detail{
    text-align: center;
    margin-top: 70px;
    font-size: 20px;
}
.chat-box{
    position: fixed;
    bottom: 40px;
    right: 30px;
}
.chat-button{
    background-color: #0351a4;
    color: white;
    padding: 15px 20px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 18px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    transition: background-color 0.3 ease;
}
.chat-button:hover{
    background-color: #c7ddf5;
}
.chat-button:active{
    background-color: #003f7f;
}

</style>