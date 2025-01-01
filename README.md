# SalesforceTaskManager

## Overview
Salesforce Task Manager is a Lightning Web Component (LWC)-based application designed to help software development teams manage tasks efficiently. This project leverages Salesforce's platform features, including custom objects, Apex controllers, and Lightning components, to deliver a user-friendly task management solution.

## Features
- **Task Management**: Create, view, and update tasks with details such as name, due date, and completion status.
- **Custom LWC Components**: Interactive task list built with Lightning Web Components.
- **Data Handling**: Real-time data retrieval using Salesforce Apex.
- **Responsive Design**: Optimized for both desktop and mobile interfaces.

## Prerequisites
- Salesforce Developer Edition or Scratch Org.
- Salesforce CLI (SFDX).
- Node.js (for LWC development).
- Postman (optional for API testing).

## Project Structure
```
TaskManager/
├── force-app/
│   ├── main/
│   │   ├── default/
│   │   │   ├── classes/          # Apex classes for backend logic
│   │   │   ├── lwc/              # LWC components
│   │   │   ├── objects/          # Custom objects and fields
│   │   │   ├── tabs/             # Custom tabs
│   │   │   └── layouts/          # Page layouts
├── config/
├── scripts/
├── README.md
└── sfdx-project.json
```

## Setup Instructions

### Step 1: Clone the Repository
```bash
$ git clone <repository-url>
$ cd TaskManager
```

### Step 2: Authorize Salesforce Org
Log in to your Salesforce org using SFDX:
```bash
$ sf login org
```

### Step 3: Push the Metadata
Deploy the metadata and source files to your org:
```bash
$ sf project deploy start
```

### Step 4: Assign Permission Set
Assign the required permissions to your user:
```bash
$ sf org assign permset --name TaskManagerPermSet
```

### Step 5: Open the Org
Open the Salesforce org to verify deployment:
```bash
$ sf org open
```

## Custom Object
The `Task__c` custom object includes the following fields:
- **Name** (Standard Field): Name of the task.
- **Due_Date__c**: The due date for the task.
- **Completed__c**: Checkbox indicating task completion status.

## Components

### 1. `taskList`
**HTML**:
Displays a table of tasks with columns for name, due date, and completion status.

**JavaScript**:
Handles data retrieval and UI interactions using the `getTasks` Apex method.

**CSS**:
Custom styling for the task list layout.

### 2. Apex Classes
- **`TaskController`**: Provides methods for retrieving task data.
- **`TaskControllerTest`**: Ensures proper functionality of `TaskController`.

### 3. Custom Tabs
Custom tab for the `Task__c` object to enable direct record access.

## Sample Data
Use the following Apex code to insert sample tasks:
```apex
Task__c task1 = new Task__c(
    Name = 'Code Review for New Feature X',
    Due_Date__c = Date.today().addDays(5),
    Completed__c = false
);
Task__c task2 = new Task__c(
    Name = 'Develop Authentication Module',
    Due_Date__c = Date.today().addDays(10),
    Completed__c = false
);
insert new List<Task__c>{task1, task2};
```

## Testing

### Manual Testing
1. Log in to the Salesforce org.
2. Navigate to the Task Manager app.
3. Verify that tasks are displayed correctly and interactions work as expected.

### Automated Testing
Run Apex test classes:
```bash
$ sf apex run test --resultformat human
```

## Troubleshooting
- **"Field does not exist" Error**: Ensure all fields are defined in the `Task__c` object.
- **"Authentication Failure" Error in Postman**: Verify your credentials, security token, and API endpoint.

## Contributions
Contributions are welcome! Please follow the standard Git workflow:
1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with a detailed explanation.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For questions or support, please contact [Efjeniah Saru Mwawughanga](mailto:esaru008@gmail.com).
