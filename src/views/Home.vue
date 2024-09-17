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
        <div class="right">
            <img style="border-radius: 10px; width: 300px; height: 250px;" src="../assets/hr.jpg">
        </div>
        <div style="margin-top: 40px;" class="container1">
            <h3>Welcome to ASSPIS HR Connect!!</h3>
            <p>
                In today’s fast-paced business environment, efficiency and adaptability are key to staying ahead. At ASSPIS, we are committed to transforming the way organizations operate by integrating cutting-edge AI-driven chatbot technology into your enterprise systems.
            </p>
            <p>
                Our intelligent chatbot is designed to enhance organizational efficiency, streamline operations, and improve overall productivity. By automating routine tasks and providing instant, accurate responses, our solution allows your team to focus on what truly matters—driving growth and innovation.
            </p>
        </div>
        
        <div class="container2">
            <h3 style="text-align: center; font-weight: bolder;">Gallery</h3>
            <div class="home-pic">
                <div class="col">
                    <img style="height: 250px; width: 400px;" src="../assets/home1.jpg">
                </div>
                <div class="col">
                    <img style="height: 250px; width: 400px;" src="../assets/home2.webp">
                </div>
                <div class="col">
                    <img style="height: 250px; width: 400px;" src="../assets/home3.jpeg">
                </div>
                <div class="col">
                    <img style="height: 250px; width: 400px;" src="../assets/home4.jpg">
                </div>
                <div class="col">
                    <img style="height: 250px; width: 400px;" src="../assets/home5.webp">
                </div>
                <div class="col">
                    <img style="height: 250px; width: 400px;" src="../assets/home6.jpg">
                </div>
            </div>
        </div>
        <div class="chat-box" style="bottom: 60px; right: 50px;">
            <img style="width: 50px; height: 50px;" src="../assets/chatbot_icon.png">
        </div>
        <div class="chat-box">
            <a href="#">Chat with us!!</a>
        </div>
    </div>
    <div style="margin-top: 40px;" id="foot">
        <div class="quicklinks">
            <a href="#">Services</a>
            <a href="#">Pricing</a>
            <a href="#">About Us</a>
            <a href="#">Testimonials</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
        </div>
    </div>
</template>

<style scoped>

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