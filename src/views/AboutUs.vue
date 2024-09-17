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
            <p style="font-weight: bold;">
                ASSPIS HR CONNECT is a non profit project that is all set to provide HR related solutions 24/7.
                We aim to seamlessly allow multiple users access our exclusive chatbot for problem solving.
                Our services are highly scalable and has the capability to provide real time solutions to problems.
            </p>
            <p style="font-weight: bold;">
                Two types of services are available:
            </p>
            <p style="font-weight: bold;">
                1) HR Services:
            </p>
            <p style="font-weight: bold;">
                    This is accessible to HR professionals of a company for handling employee issues anonymously. This also ensures integrity and securtity of confidential data of the firm.
            </p>   
            <p style="font-weight: bold;">
                2) Employee Services:
            </p>
            <p style="font-weight: bold;">
                    This is accessible to employees. They can anonymously seek for solutions from our practical human-like chatbot. In case of extreme issues, HR of the company can also provide solutions anytime.
            </p>
            <p style="font-weight: bold;">    
                Our purpose is to reduce HR work load and provide solutions to intimate employee issues.
            </p>
            <h3>Developers:</h3>
            <p>Shreeja Sinha</p>
            <p>Ishita Banerjee</p>
            <p>Sayani Konar</p>
            <p>Ankana Karmakar</p>
            <P>Sudip Mondal</P>
            <p>Prolay Halder</p>
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
    text-align: justify;
    margin-left: 50px;
    margin-right: 50px;
    font-size: 16px;
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