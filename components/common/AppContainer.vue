<template>
  <main>
    <section>
      <div><slot name="breadcrumb" /></div>
      <h1 class="font-normal text-xl my-2 mb-4"><slot name="title" /></h1>
      <div><slot name="main" /></div>
    </section>
  </main>
</template>

<style scoped>
main {
  width: 85%;
  margin: 0 auto;
}
</style>
