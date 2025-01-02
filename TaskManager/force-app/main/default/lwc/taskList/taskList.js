import { LightningElement, wire, track } from 'lwc';
import getTasks from '@salesforce/apex/TaskController.getTasks';
import saveTask from '@salesforce/apex/TaskController.saveTask'; // Hypothetical Apex method for saving a task
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

export default class TaskList extends LightningElement {
    @track tasks = []; // Stores the task data
    wiredTasksResult; // Tracks wired results for refreshing

    columns = [
        { label: 'Task Name', fieldName: 'Name' },
        { label: 'Due Date', fieldName: 'Due_Date__c', type: 'date' },
        { label: 'Completed', fieldName: 'Completed__c', type: 'boolean' }
    ];

    @wire(getTasks)
    wiredTasks(result) {
        this.wiredTasksResult = result; // Store the wire result for refresh
        const { data, error } = result;
        if (data) {
            this.tasks = data;
        } else if (error) {
            console.error('Error retrieving tasks:', error);
        }
    }

    handleSaveTask(newTask) {
        saveTask({ task: newTask }) // Call Apex method to save the task
            .then(() => {
                // Append the new task locally
                this.tasks = [...this.tasks, newTask];
                
                // Refresh the task list from the server to ensure consistency
                return refreshApex(this.wiredTasksResult);
            })
            .then(() => {
                this.showToast('Success', `Task "${newTask.Name}" has been added.`, 'success');
            })
            .catch(error => {
                console.error('Error saving task:', error);
                this.showToast('Error', 'Failed to save task. Please try again.', 'error');
            });
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
