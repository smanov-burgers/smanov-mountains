<template lang="pug">
    .user-component
        .avatar
            img(:src="userpic")
        .username {{username}}            
</template>

<style lang="postcss" scoped>

</style>

<script>
export default {
    props: ["username", "userpic"]
}
</script>