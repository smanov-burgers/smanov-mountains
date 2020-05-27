<template lang="pug">
  svg(:class="className" :viewBox="viewBox" preserveAspectRatio="none")
    use(:xlink:href="src")
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    src() {
      return this.icon.url;
    },
    viewBox() {
      return this.icon.viewBox;
    },
    icon() {
      return require(`../../../images/icons/${this.name}.svg`).default;
    }
  },
};
</script>