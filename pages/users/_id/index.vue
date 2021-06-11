<template>
  <h1>blog id {{ $route.params.id }}</h1>
</template>

<script>
export default {
  layout: "users",
  validate(data) {
    console.log(data.params.id);
    return true;
  },
};
</script>
