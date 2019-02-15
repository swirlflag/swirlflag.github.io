<template>
  <nav id="gnb">gnb</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
#gnb{
  width: 45%;
  max-width : 500px;
  border: 1px solid #000;
  box-sizing: border-box;
}

@media (max-width: 768px) {

  #gnb{
    position: fixed;
    width: 100%; max-width:100%;height: 100%;
    background-color: #ddd;

  }

}
</style>
