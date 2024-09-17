<script>

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
    <div class="login-container">
        <h2> login</h2>
        <form action="">
            <div class="form-group">
                <input type="email"required>
                <label for="">email</label>
                <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="form-group">
                <input type="password"required> 
                <label for="">password</label>
                <i class="fa-solid fa-lock"></i>
            </div>
            <p class="pp"><input type="checkbox">Remember me 
            <a href="#">Forget password</a> </p>
            <input type="button" value="login">
            <p class="pp">Don't hava a account?
                <a href="#">Register</a>
            </p>
        </form>
    </div>
</template>