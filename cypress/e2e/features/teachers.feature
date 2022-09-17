Feature: Teachers

  Scenario: Get teachers
    Given that I am logged in as admin
    And I am on the admin page
    When I click on Teachers
    Then I should see the list of teachers

  Scenario: Add teacher
    Given that I am logged in as admin
    And I am on the admin page
    When I click on Teachers
    And I click on create teacher
    Then I should be able to add a teacher

  Scenario: Edit teacher
    Given that I am logged in as admin
    And I am on the admin page
    When I click on Teachers
    And I click on edit button
    Then I should be able to edit a teacher

  Scenario: Delete teacher
    Given that I am logged in as admin
    And I am on the admin page
    When I click on a Teacher
    And I click on delete button
    Then I should be able to delete a teacher

