public with sharing class TaskController {
    @AuraEnabled
    public static List<Task__c> getTasks() {
        return [SELECT Id, Name, Due_Date__c, Completed__c FROM Task__c];
    }

    @AuraEnabled
    public static Task__c saveTask(Task__c task) {
        try {
            insert task;
            return task; // Return the inserted task with its Id populated
        } catch (Exception e) {
            throw new AuraHandledException('Error saving task: ' + e.getMessage());
        }
    }
}
