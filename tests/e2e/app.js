import {CfToggleable} from './../../src/index';

import Vue from 'vue';
import {Toggleable} from './../../node_modules/std-lib/src/FunctionalToggleable'

new Vue({
    el: '#app',
    data () {
        return {
            store: {
                switcher: true
            },

            toggleable: new Toggleable((newValue) => {
                this.store.switcher = newValue
            }, () => {
                return this.store.switcher
            })
        }
    },
    components: {
        'toggle': new CfToggleable(Vue)
    }
});
