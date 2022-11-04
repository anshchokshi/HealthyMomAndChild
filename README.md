# HEALTHY MOM AND CHILD+

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 
## Description 
 * A unique health application that will help educate, monitor, and detect health issues with both women that are planning to conceive, pregnant, or have      given birth in the last three months (perinatal women), and their children up to the age of 12 years old.
 * What is the problem you're trying to solve?
 * Significant changes and challenges occur in the life of a woman undergoing conception, pregnancy, or the baby nursing process and questions will arise due to this. Women in this category will search for answers to these questions. One of their greatest resources are family physicians and specialists. But access to these medical professionals can be limited in rural and remote areas of living. The lack of in-person consultations can directly affect the health of pregnant women and children. As alternatives, such as the Internet and existing mobile applications, can contain information that is not sufficient, nor detailed.
 * Is there any context required to understand **why** the application solves this problem?

## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built

## Instructions
### Installation Steps
1. Download the Expo Go App on the App Store or the Google Play Store (links below).
2. In the Expo Go App, scan the QR Code below.
3. Wait for the app to load. This may take a few minutes.

| | iOS | Android |
|--|--|--|
|Expo Go| https://itunes.apple.com/app/apple-store/id982107779 | https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www |
|QR Code| <img src="https://user-images.githubusercontent.com/53279821/199995305-8c4f54c3-a071-4cf9-a741-6f01500f709c.svg" width="250"> | <img src="https://user-images.githubusercontent.com/53279821/199995376-dd924f15-0a9c-4c77-a53f-577e3a3f50c2.svg" width="250">
|Alternative to QR Code| exp://u.expo.dev/update/d59f8d9a-079c-4536-812b-f44a7e2c19c5 | exp://u.expo.dev/update/c17b2916-1c05-408c-8ec8-f508eba4109b |

### Usage
 * Clear instructions for how to use the application from the end-user's perspective
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully

## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).

## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

* We divided the team equally in the front-end and back end. In one of our meetings, we decided on all the things required to be done by the frontend and backend teams and assigned tasks to each team member. Then we decided to create an individual branch for each task and followed the below naming convention. Each team member creates a pull request of their branch once the task is done and then Ansh and Anthony were responsible to review each branch and merge it to the main as they were coordinating between frontend and backend teams. To avoid conflicts we decided to only create pull requests once the code did not have any errors or dependency issues so the people reviewing the code do not have to worry about that part and just check the logic and basic requirements. 
* We used the following naming convention to make it clear to all teammates what that particular branch did and who owned it.
	 `branch name -> <task_name>-<member_name>`
	  `for example -> authentication-ansh`
* We used Expo as it is a platform for making universal native apps for Android, and iOS. Expo lets us run the Application on a local environment if connected to a simulator. All team members used that for testing purposes to check if the application was running without any errors before pushing code on their branch.
* We similarly used expo publish to deploy our application on the expo server which can be retrieved by anyone using a barcode and Expo App on mobile phones or simulators.
* We decided to choose this workflow as we all did our A2 using the same workflow of Expo, React Native and Javascript. A couple of other advantages of this workflow are - Publishes over-the-air updates instantly with Expo and doesn’t need to code in two different languages for Android and IOS. The second was really important to us as our Partner wanted an Application for both Android and IOS

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?
