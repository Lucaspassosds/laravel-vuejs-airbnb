<template>
  <div>
    <bookable-list-item title="hello" content="Hello World" :price="1500" />
  </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
  components: {
    BookableListItem,
  },
};
</script>

<style>
</style>
