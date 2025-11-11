<script>
export default {
  methods: {
    goToTesting() {
      this.$router.push('/testing')
    },
    goTOTestID() {
      this.$router.push('/test/:id')
    },
  },
}
</script>

<template>
  <h2>HomeView</h2>
  <button @click="goToTesting">Go to Testing</button>
  <button @click="goToTestID">Go to TestID</button>
</template>
