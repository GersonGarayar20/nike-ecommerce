<template>
  <div class="h-16 bg-white flex justify-between items-center px-8">
    <div class="flex w-96 shrink">
      <ButtonLogo />
    </div>
    <div class="hidden md:flex flex-none">
      <Nav />
    </div>
    <div class="flex gap-4 justify-end w-96 shrink">
      <div class="hidden md:block">
        <Find />
      </div>
      <ButtonLike />
      <ButtonCart />
      <div class="block md:hidden">
        <NavMobile />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
