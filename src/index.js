export function CfToggle (Vue) {
    return Vue.extend({
        props: {
            toggleable: {
                required: true
            }
        },

        computed: {
            isOn () {
                return this.toggleable.isOn()
            }
        },

        methods: {
            setState (state) {
                this.toggleable.setState(state)
            }
        }
    })
}
