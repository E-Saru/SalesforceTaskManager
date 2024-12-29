// global class TaskBatchScheduler implements Schedulable {
//     global void execute(SchedulableContext sc) {
//         Database.executeBatch(new TaskBatchProcessor(), 200);
//     }
// }
public with sharing class TaskBatchScheduler implements Schedulable {
    public void execute(SchedulableContext sc) {
        Database.executeBatch(new TaskBatchProcessor(), 200);
    }
}