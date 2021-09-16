<template>
  <div class="header">
    <img id="logo" alt="Vue logo" src="../assets/logo.png">
    <div class="navbar">
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
.header {
    position: fixed;
    top: 0;
    width: 100%;
    /* border-bottom: black 1px solid; */
}

.navbar {
    float: right;
    text-align: right;
}

.navbar ul {
    list-style-type: none;
    padding-right: 2em;
}

.navbar li {
    padding: 1em;
    float: left;
    font-weight: 700;
    display: block;
}

.navbar a {
    color: black;
    text-decoration: none;
}

#logo {
  width: 60px;
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>