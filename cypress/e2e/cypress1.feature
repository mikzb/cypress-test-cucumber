Feature: Gestion de tareas

    Scenario: Agregar una tarea a la lista
        Given I open the todo page
        When I add "Tarea1" task
        Then I should see "Tarea1" task

    Scenario: Agregar una tarea y borrarla
        Given I open the todo page
        When I add "Tarea2" task
        And I delete "Tarea2" task
        Then I should not see "Tarea2" task
    
    Scenario: Agregar una tarea y marcarla
        Given I open the todo page
        When I add "Tarea3" task
        And I mark "Tarea3" as completed
        Then I should see the "Tarea3" as completed

    Scenario: Agregar una tarea, marcarla y desmarcarla
        Given I open the todo page
        When I add "Tarea4" task
        And I mark "Tarea4" as completed
        And I mark "Tarea4" as incomplete
        Then I should see "Tarea4" as incomplete
