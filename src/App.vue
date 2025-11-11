<template>
  <h1>Hello App!</h1>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/testing">Go to the Test</RouterLink>
    <RouterLink to="/test/:id">Show ID Parameter</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
