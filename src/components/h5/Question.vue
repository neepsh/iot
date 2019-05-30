<template>
    <div class="question">

    </div>
</template>

<script>
    export default {
        name: "Question",
        mounted() {
            var path = this.$router.history.current.path;
            if (path.indexOf('table') > 0 || path.indexOf('condition') > 0 || path.indexOf('position') > 0) {
                this.$parent.data.table_h5=true;
            }else {
                this.$parent.data.table_h5=false;
            }
        }
    }
</script>

<style scoped>

</style>
