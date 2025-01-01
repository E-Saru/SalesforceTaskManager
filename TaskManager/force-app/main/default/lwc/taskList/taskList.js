// import { LightningElement, wire } from 'lwc';
// import getTasks from '@salesforce/apex/TaskController.getTasks';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

// export default class TaskList extends LightningElement {
//     tasks;

//     @wire(getTasks)
//     wiredTasks({ error, data }) {
//         if (data) {
//             this.tasks = data;
//         } else if (error) {
//             console.error(error);
//         }
//     }

//     handleTaskCompletion(taskId) {
//         // Simulate marking the task as completed (replace with actual logic)
//         this.showToast('Success', `Task ${taskId} marked as completed.`, 'success');
//     }

//     showToast(title, message, variant) {
//         const event = new ShowToastEvent({
//             title,
//             message,
//             variant
//         });
//         this.dispatchEvent(event);
//     }
// }



import { LightningElement, wire } from 'lwc';
import getTasks from '@salesforce/apex/TaskController.getTasks';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class TaskList extends LightningElement {
    tasks; // Stores the task data
    columns = [
        { label: 'Task Name', fieldName: 'Name' },
        { label: 'Due Date', fieldName: 'Due_Date__c', type: 'date' },
        { label: 'Completed', fieldName: 'Completed__c', type: 'boolean' }
    ]; // Defines the columns for the lightning-datatable

    @wire(getTasks)
    wiredTasks({ error, data }) {
        if (data) {
            this.tasks = data;
        } else if (error) {
            console.error(error);
        }
    }

    handleTaskCompletion(taskId) {
        // Simulate marking the task as completed (replace with actual logic)
        this.showToast('Success', `Task ${taskId} marked as completed.`, 'success');
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(event);
    }
}
