<template>
    <component :is="component">
        <slot />
    </component>
</template>

<script>
    import PointsHackLayout from './layouts/PointsHackLayout'

    export default {
        name: 'App',

        components: {
            PointsHackLayout
        },

        computed: {
            component () {
                return PointsHackLayout
            }
        }
    }
</script>
