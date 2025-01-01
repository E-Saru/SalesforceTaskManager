@isTest
public class TaskControllerTest {
    @isTest
    static void testGetTasks() {
        // Create test data
        Task__c task = new Task__c(Name = 'Test Task', Due_Date__c = Date.today(), Completed__c = false);
        insert task;

        // Call the method
        Test.startTest();
        List<Task__c> tasks = TaskController.getTasks();
        Test.stopTest();

        // Assert the result
        System.assert(tasks.size() > 0, 'No tasks retrieved.');
    }
}
