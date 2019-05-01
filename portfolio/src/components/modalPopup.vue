<template>
  <div id="modal-popup">
    <div id="modal-header">hi</div>
    <div id="modal-me">hello</div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#modal-popup{
  display: block;
  width: 100%;

  /* padding: 5%; */
  margin: 5%;
  text-align: center;
  /* box-sizing: border-box; */
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #000;
  position: fixed;
  top: 0 ;left: 0;
  z-index: 100;
  display: none;
}
</style>
