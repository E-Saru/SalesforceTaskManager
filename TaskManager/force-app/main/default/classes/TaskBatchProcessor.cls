public class TaskBatchProcessor implements Database.Batchable<SObject> {
    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT Id FROM Task__c WHERE Due_Date__c < TODAY AND Completed__c = false');
    }
    public void execute(Database.BatchableContext bc, List<Task__c> scope) {
        for (Task__c task : scope) {
            task.Completed__c = true;
        }
        update scope;
    }
    public void finish(Database.BatchableContext bc) {
        // No specific actions needed after batch processing
        System.debug('Batch processing finished.');
    }
}