import TodoPage from "../PageObject/gestionTarea";
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

describe('Gestión de tareas con POM', () => {
  const todoPage = new TodoPage();
/*
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/dist/');
  });
*/

    Given("I open the todo page",() => {
        cy.visit('https://todomvc.com/examples/react/dist/');
    });

    /*
  it('Debe permitir crear una tarea', () => {
    const taskName = 'Aprender Cypress';
    todoPage.addTodo(taskName);
    todoPage.validateTodoExists(taskName);
  });
*/

    When("I add {string} task", (taskName) => {
        todoPage.addTodo(taskName);
    });

    Then("I should see the {string} task", (taskName) => {
        todoPage.validateTodoExists(taskName);
    });
/*
  it('Debe permitir borrar una tarea', () => {
    const taskName = 'Eliminar esta tarea';
    todoPage.addTodo(taskName);
    todoPage.deleteTodo(taskName);
    todoPage.elements.todoItems().should('not.exist');
  });
*/
    When("I delete {string} task", (taskName) => {
        todoPage.deleteTodo(taskName);
    });

    Then("I should not see the {string} task", (taskName) => {
        todoPage.elements.todoItems().should('not.exist');
    });
/*
  it('Debe permitir marcar una tarea como completada', () => {
    const taskName = 'Marcar esta tarea como completada';
    todoPage.addTodo(taskName);
    todoPage.toggleTodo(taskName);
    todoPage.elements.todoItem(taskName).should('have.class', 'completed');
  });
*/
    When("I mark {string} task as completed", (taskName) => {
        todoPage.toggleTodo(taskName);
    });

    Then("I should see the {string} task as completed", (taskName) => {
        todoPage.elements.todoItem(taskName).should('have.class', 'completed');
    });
/*
  it('Debe permitir una tarea como incompleta', () => {
    const taskName = 'Marcar esta tarea como incompleta';
    todoPage.addTodo(taskName);
    todoPage.toggleTodo(taskName);
    todoPage.toggleTodo(taskName);
    todoPage.elements.todoItem(taskName).should('not.have.class', 'completed');
  });
  */
    When("I mark {string} task as incomplete", (taskName) => {
        todoPage.toggleTodo(taskName);
    });

    Then("I should see the {string} task as incomplete", (taskName) => {
        todoPage.elements.todoItem(taskName).should('not.have.class', 'completed');
    });

});