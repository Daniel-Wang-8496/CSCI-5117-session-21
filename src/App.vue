<template>
  <h1>Hello App!</h1>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/testing">Go to the Test</RouterLink>
    <RouterLink to="/test/1">Show ID Parameter</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav > a {
  margin-right: 1em;
}
</style>
