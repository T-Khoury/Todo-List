import createProject from "./project";
import { eventsHandler } from "./pubsub";
import { parseISO, isThisMonth, isThisWeek, isToday } from "date-fns";
import { domElements } from "./domelements";

const todoApp = {
    projects: [],
    acceptData: function() {
        eventsHandler.subscribe('projectCreated', todoApp.addProject);
        eventsHandler.subscribe('todoCreated', todoApp.addTodo);
    },
    addProject: function(project) {
        todoApp.projects.push(project);

        eventsHandler.publish('todoAppUpdated', todoApp.projects);
    },
    addTodo: function(todo) {
        /* This finds the project in todoApp array of projects which matches the selected project in the dropdown of todo creation modal, then pushes the todo to that projects array of todos  */
        todoApp.projects.find(({ title }) => title === `${todo.project}`).todos.push(todo);

        eventsHandler.publish('todoAppUpdated', todoApp.projects);
    },
    deleteTodo: function(todo) {
        /* const thisproject = todoApp.projects.find(({ title }) => title === document.getElementById('todo-container').getAttribute('class')); */
        const thisproject = todoApp.projects.find(({ title }) => title === todo.project);
        const thistodo = thisproject.todos.find(({ title }) => title === todo.title);
        thisproject.todos.splice((thisproject.todos.indexOf(thistodo)), 1);
        console.log(todoApp);
        eventsHandler.publish('todoAppUpdated', todoApp.projects);
    },
    deleteProject: function(project) {
        console.log(todoApp);
        console.log(project);
        const thisproject = todoApp.projects.find(({ title }) => title === project.title);
        console.log(thisproject);

        todoApp.projects.splice((todoApp.projects.indexOf(thisproject)), 1);
        eventsHandler.publish('todoAppUpdated', todoApp.projects);
        eventsHandler.publish('projectDeleted', todoApp.projects);
    },

    defaultProject: function() {
        createProject('Personal');
    },

    todaysTodos: function() {
        let todaysTodosArray = [];
        let todayProject = {
            title: 'Today',
            todos: []
        };
        todoApp.projects.forEach((project) => {
            project.todos.forEach((todo) => { 
                if (isToday(parseISO(todo.dueDate))){ 
                    todaysTodosArray.push(todo);
                };
            });
        });

        todayProject.todos = todaysTodosArray;
        todoApp.projects.push(todayProject);
        domElements.renderTodos('Today');
        todoApp.projects.pop();

        
    },

    thisWeeksTodos: function() {
        let thisWeeksTodosArray = [];
        let thisWeekProject = {
            title: 'This Week',
            todos: []
        };
        todoApp.projects.forEach((project) => {
            project.todos.forEach((todo) => { 
                if (isThisWeek(parseISO(todo.dueDate))){ 
                    thisWeeksTodosArray.push(todo);
                };
            });
        });

        thisWeekProject.todos = thisWeeksTodosArray;
        todoApp.projects.push(thisWeekProject);
        domElements.renderTodos('This Week');
        todoApp.projects.pop();;
    },

    thisMonthsTodos: function() {
        let thisMonthsTodosArray = [];
        let thisMonthProject = {
            title: 'This Month',
            todos: []
        };
        todoApp.projects.forEach((project) => {
            project.todos.forEach((todo) => { 
                if (isThisMonth(parseISO(todo.dueDate))){ 
                    thisMonthsTodosArray.push(todo);
                };
            });
        });

        thisMonthProject.todos = thisMonthsTodosArray;
        todoApp.projects.push(thisMonthProject);
        domElements.renderTodos('This Month');
        todoApp.projects.pop();
    }
};



export { todoApp };