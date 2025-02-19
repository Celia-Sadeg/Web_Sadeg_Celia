new Vue({
    el: '#app',
    data: {
        newTask: {
            text: '',
            dueDate: '',
            priority: '',
            group: ''
        },
        newGroup: '',
        tasks: [],
        customGroups: ["Aujourd'hui", "Important"],
        filter: 'all',
        taskError: '', // Message d'erreur pour la tâche
        dueDateError: '', // Message d'erreur pour la date d'échéance
    },
    computed: {
        filteredTasks() {
            const today = new Date().toISOString().split('T')[0];
            if (this.filter === 'today') {
                return this.tasks.filter(task => !task.completed && task.dueDate === today);
            }
            if (this.filter === 'important') {
                return this.tasks.filter(task => task.group === 'Important' && !task.completed);
            }
            return this.tasks;
        }
    },
    methods: {
        addTask() {
            // Validation des champs avant d'ajouter une tâche
            this.taskError = '';
            this.dueDateError = '';
            
            if (!this.newTask.text.trim()) {
                this.taskError = 'Veuillez remplir le champ "Ajouter une tâche".';
            }
            if (!this.newTask.dueDate) {
                this.dueDateError = 'Veuillez spécifier une date d\'échéance.';
            }

            if (this.newTask.text.trim() && this.newTask.dueDate) {
                this.tasks.push({
                    text: this.newTask.text,
                    completed: false,
                    dueDate: this.newTask.dueDate || null,
                    priority: this.newTask.priority || 'low',
                    group: this.newTask.group || '',
                    createdDate: new Date().toISOString().split('T')[0]
                });
                this.newTask.text = '';
                this.newTask.dueDate = '';
                this.newTask.priority = '';
                this.newTask.group = '';
            }
        },
        addGroup() {
            const groupName = this.newGroup.trim();
            if (groupName && !this.customGroups.includes(groupName)) {
                this.customGroups.push(groupName);
                this.newGroup = '';
            } else {
                alert('Le groupe existe déjà ou le nom est vide.');
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        formatDate(dateString) {
            if (!dateString) return '';
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        filterTasks(criteria) {
            this.filter = criteria;
        }
    }
});
