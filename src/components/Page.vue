<template>
  <div v-editable="blok">
  <template v-for="(item, index) in blok.body">
    <component
      :blok="item"
      :is="item.component"
      :key="index">
    </component>
  </template>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>