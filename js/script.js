new Vue(
    {
        el: '#app',
        data: {
            toDoList: [
                'walk the dog',
                'go to the grocery store',
                'change the light bulb',
                'clean up the bathroom',
                'call your friend'
            ]
        },
        mounted() {
            this.focusElement()
        },
        methods: {
            focusElement() {
                document.getElementById("input-field").focus();
            },
        }
    }
); 