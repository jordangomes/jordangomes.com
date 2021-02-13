<template>
  <header class="pageHeader">
    <NuxtLink to="/"><img src="/Logo512x512.png" alt="JG Logo"></NuxtLink>
    <NuxtLink to="/"><h1>Jordan Gomes</h1></NuxtLink>
    <div></div>
  </header>
</template>

<style scoped>
header.pageHeader {
  padding: 0px 10px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
header.pageHeader a {
  text-decoration: none;
}

header.pageHeader img {
  display: block;
  height: 60px;
}

header.pageHeader h1 {
  font-size: 1.6rem;
  font-weight: 300;
  color: #fff;
  text-align: center;
}
header.pageHeader div{
  width: 60px;
}
</style>
