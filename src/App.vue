<template>
  <div id="app">
    <SmeupFld
      id="fld1"
      type="Itx"
      initialValue="asd"
      label="InputText"
      showSubmit
      mobile
      clearValue
      @change="onFldChange"
      @click="onFldClick"
    />
  </div>
</template>

<script>
export default {
  name: 'app',

  methods: {
    onFldChange() {

    },

    onFldClick() {
      
    }
  }
}
</script>

<style>

</style>
