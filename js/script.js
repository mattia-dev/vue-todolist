new Vue(
    {
        el: '#app',
        data: {
            inputText: '',
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
            pushToDo() {   
                if (this.inputText !== '') {
                    this.toDoList.push(this.inputText);
                    this.inputText = '';   
                }
                this.focusElement();
            }
        }
    }
); 