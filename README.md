# Salesforce TaskManager

## Project Overview
Salesforce Task Manager is a Lightning Web Component (LWC)-based application designed to help software development teams manage tasks efficiently. This project leverages Salesforce's platform features, including custom objects, Apex controllers, and Lightning components, to deliver a user-friendly task management solution.
---

## Features
1. **Custom Object:**
   - Object Name: `Task__c`
   - Fields:
     - `Name` (Text) - Required
     - `Due_Date__c` (Date)
     - `Completed__c` (Checkbox, default false)

2. **Lightning Web Component (LWC):**
   - Component Name: `taskList`
   - Displays a list of `Task__c` records.
   - Allows users to mark tasks as completed.

3. **Apex Batch/Queueable:**
   - Finds overdue tasks and marks them as completed.

4. **Apex REST Endpoint:**
   - Provides a GET method returning all `Task__c` records as JSON.

5. **Documentation:**
   - Comprehensive instructions for deployment, testing, and usage.

6. **GitHub Repository:**
   - Organized with metadata, code, and README.md.

---

## Deployment Instructions
### Prerequisites
1. Install Salesforce CLI ([download here](https://developer.salesforce.com/tools/sfdxcli)).
2. Authenticate to a Salesforce org using the following command:
   ```bash
   sfdx auth:web:login -a <org_alias>
   ```
3. Ensure the org has API access and Developer Hub enabled (if using scratch orgs).

### Steps
#### 1. Deploy Custom Object
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```
2. Push metadata to the org:
   ```bash
   sfdx force:source:push -u <org_alias>
   ```
3. Verify the object in Salesforce:
   - Navigate to **Setup > Object Manager > Task**.

#### 2. Deploy Apex Classes and LWC
1. Ensure all Apex classes and the `taskList` LWC are in the correct `force-app` directory.
2. Push the code:
   ```bash
   sfdx force:source:push -u <org_alias>
   ```
3. Verify deployment:
   - Apex Classes: **Setup > Apex Classes**.
   - LWC: **Setup > Lightning Components**.

#### 3. Assign Permissions
1. Assign the necessary permissions for accessing `Task__c` and using the REST API.
2. Create a permission set and assign it to users:
   ```bash
   sfdx force:user:permset:assign -n TaskManagerPermissions
   ```

---

## Testing Instructions
### 1. Test LWC Component
1. Create a Lightning App Page:
   - Navigate to **Setup > Lightning App Builder**.
   - Create a new page and drag the `taskList` component onto the canvas.
   - Activate the page.
2. Interact with the component:
   - View tasks in the table.
   - Mark tasks as completed and verify the changes.

### 2. Test Apex Batch/Queueable
1. Open the Developer Console.
2. Execute the batch job:
   ```apex
   TaskBatchProcessor batch = new TaskBatchProcessor();
   Database.executeBatch(batch);
   ```
3. Verify the results:
   - Navigate to **Setup > Object Manager > Task** and confirm overdue tasks are marked as completed.

### 3. Test Apex REST Endpoint
1. Authenticate and retrieve the access token:
   - Use Postman or curl to get the token (refer to REST API documentation).
2. Make a GET request:
   ```bash
   curl -X GET \
     -H "Authorization: Bearer <access_token>" \
     https://<my_domain>/services/apexrest/TaskManager
   ```
3. Verify the JSON response:
   ```json
   [
     {
       "Name": "Code Review",
       "Due_Date__c": "2024-12-31",
       "Completed__c": false
     },
     {
       "Name": "Bug Fix",
       "Due_Date__c": "2024-12-30",
       "Completed__c": true
     }
   ]
   ```

---

## Known Issues and Limitations
- The REST API requires proper authentication; ensure the access token is valid.
- Batch job does not handle tasks without a due date.

---

## Repository Structure
```
force-app/main/default/
├── objects/Task__c/
│   ├── Task__c.object-meta.xml
│   └── fields/
│       ├── Due_Date__c.field-meta.xml
│       └── Completed__c.field-meta.xml
├── lwc/taskList/
│   ├── taskList.html
│   ├── taskList.js
│   ├── taskList.js-meta.xml
│   └── __tests__
│      └── taskList.test.js
├── classes
│           │   ├── TaskAPI.cls
│           │   ├── TaskAPI.cls-meta.xml
│           │   ├── TaskBatchProcessor.cls
│           │   ├── TaskBatchProcessor.cls-meta.xml
│           │   ├── TaskBatchScheduler.cls
│           │   ├── TaskBatchScheduler.cls-meta.xml
│           │   ├── TaskController.cls
│           │   ├── TaskController.cls-meta.xml
│           │   ├── TaskControllerTest.cls
│           │   └── TaskControllerTest.cls-meta.xml
└── README.md
```

---

## Contributions
Contributions are welcome! Please follow the standard Git workflow:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with a detailed explanation.


## Contact
For questions or support, please contact [Efjeniah Saru Mwawughanga](mailto:esaru008@gmail.com).