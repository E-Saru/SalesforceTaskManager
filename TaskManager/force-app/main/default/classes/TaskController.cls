public with sharing class TaskController {
    @AuraEnabled
    public static List<Task__c> getTasks() {
        return [SELECT Id, Name, Due_Date__c, Completed__c FROM Task__c];
    }
}
