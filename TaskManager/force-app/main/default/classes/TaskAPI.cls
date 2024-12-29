@RestResource(urlMapping='/TaskAPI')
global with sharing class TaskAPI {
    @HttpGet
    global static List<Task__c> getTasks() {
        RestRequest req = RestContext.request;
        String filter = req.params.get('filter');
        String sortBy = req.params.get('sortBy') != null ? req.params.get('sortBy') : 'Name';

        String query = 'SELECT Name, Due_Date__c, Completed__c FROM Task__c';
        if (filter == 'overdue') {
            query += ' WHERE Due_Date__c < TODAY AND Completed__c = false';
        } else if (filter == 'completed') {
            query += ' WHERE Completed__c = true';
        }
        query += ' ORDER BY ' + sortBy;

        return Database.query(query);
    }
}
