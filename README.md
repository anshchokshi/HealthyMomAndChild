# HEALTHY MOM AND CHILD+

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 
## Description 
*Health Mom and Child+* is a mobile application that will help educate, monitor, and detect health issues for women that are planning to conceive, women who are already pregnant, or women that have given birth in the last three months (perinatal women).
Significant changes and challenges occur in this period of a woman's life. One of their greatest resources is family physicians and specialists, but access to these medical professionals can be limited in rural and remote areas of living. Alternatives, such as the Internet and existing mobile applications, can contain information that is not sufficient, so this application is meant to supply the necessary information in a digestible format.

## Key Features
 * Described the key features in the application that the user can access
 * Provide a breakdown or detail for each feature that is most appropriate for your application
 * This section will be used to assess the value of the features built
 * Signup/Login:
 	* Users will be able to sign up and login into the app. For signup, users have to provide basic information like First and Last Name, Email and password.Passwords have to be at least 6 characters long. Wrong login attempts will result in a pop up message.
  * Multiple flows: Our app will have three flows: one for users trying to concieve, one for pregnant users and one for users who already have a child. Users will be able to select the flow from the first screen after login. For this iteration, we have focused on the flow for pregnant users only.
  * Onboarding Survey: New users of the pregnant flow will be redirected to a onboarding survey which will ask some questions regarding their pregnancy.The questions are:
	* Date of last menstrual period
	* Whether it is their first pregnancy
	* If they have high BP
	* If they have elevated blood sugar
	* Inital weight and height pregnancy. Users will have the option to input the information in both metric and imperial systems.
* User Dashboard: This is the homepage of the application for the application's pregant flow. Users can navigate to all the other screens in this app from this page.
* Baby Development Page: Users will be able to see the expected size and wieght of the baby on this page. Additional content pertaining to the baby's development will be shown here too. The information will be provided by the partner on a later date and will be stored in(and pulled from) our database.
* Weight Gain Page: Users will be able to review the basic information that they provided in their onboarding survey (like last menstural period) and other calulated values like dude date and initial BMI. They will also be able to view the average weight gain since the beginning of their pregnancy (calculated from their inputs over the weeks) and compare it with the average normal (expected) weight gain which is stored in our database weekwise. Users will have the option to view the information both in Kg and Lb.
* Appointments Page: Users will be able to view the date range of their first family doctor appointment (calculated from the day of their last menstrual period using a formula) and all subsequents visits (the cadence of which increase as weeks progress). The cadence is stored in our database.
	* Users will also be able to see all the diagnostic appointments, laboratory appointments and vaccinations for their week. This information updates weekly and the information is stored in our database.	

## Instructions
### Installation Steps
1. Download the Expo Go App on the App Store. Link for iOS: https://itunes.apple.com/app/apple-store/id982107779. At the moment, the application is only available for iOS.
2. In the Expo Go App, scan the QR Code below.
<img src="https://user-images.githubusercontent.com/53279821/200095567-5660985f-6fda-46fd-b385-9d4ab6d918cd.svg" width="250"> 
Alternative to the QR codes is to enter the following URL manually: exp://u.expo.dev/update/90d7eb09-d1c1-400d-bfbe-bd6865f24e71

3. Wait for the app to load. This may take a few minutes.


### Usage
 * Click the signup option right after opening the app. This will take you to the Signup page. Enter all the information required (make sure your password is at least 6 characters long) and register your account.
 * You will now be logged into the app. You will now have 3 options: I want to become pregant, I am already pregnant and I have a baby. Click on I want to become pregnant. The other two options will just trigger a pop up since they will be covered in later iterations.
 * You will now be redirected to the onboarding survey of the pregnant workflow. Enter a date for the last menstrula period, choose either of the options for 'Is this your first pregnancy' and tap the next button. Click the back button to go back to the previous page.
 * Choose either of the options for the next two questions (high Blood Pressure, Elevated Blood sugar) and tap the next button. Tap the back button to go back.
 * Enter your height and weight in the options provided. You can also change the measurement system by toggling the button at the top. Tap the next button to proceed or the back button to go back.
 * You will now be taken to the user dashboard. You will see 5 options. The last two options (Surveys and Articles and Educational Media Content) will not redirect you anywhere since those features will be implemented later. Choose any of the three options to proceed.
 * Tapping the Baby Development button will take you to the Baby Development Page. For this iteration, you will see a sample page for Week 11. Tap the home button at the bottom of the page to go back to the dashboard. The other options in the bar at the bottom will be implemented in later iterations.
 * Tapping the Weight Gain and Blood Pressure page will take you to the Your Weight Gain and BP page. Here you can see your key dates and figures and also compare your average weight over the weeks with the expected weight gain. Tap the back button to go back to the user dashboard.
 * Tapping the Your Appointments page will take you to the Your Appointments page. You can see all the family doctor, diagnostic, lab appointments and vaccinations here. This information will be provided at a later date by the partner so we currently have placeholder information.

## Development requirements
 * If a developer were to set this up on their machine or a remote server, what are the technical requirements (e.g. OS, libraries, etc.)?
 * Briefly describe instructions for setting up and running the application (think a true README).

## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

* We divided the team equally in the front-end and back end. In one of our meetings, we decided on all the things required to be done by the frontend and backend teams and assigned tasks to each team member. Then we decided to create an individual branch for each task and followed the below naming convention. Each team member creates a pull request of their branch once the task is done and then Ansh and Anthony were responsible to review each branch and merge it to the main as they were coordinating between frontend and backend teams. To avoid conflicts we decided to only create pull requests once the code did not have any errors or dependency issues so the people reviewing the code do not have to worry about that part and just check the logic and basic requirements. 
* We used the following naming convention to make it clear to all teammates what that particular branch did and who owned it.         
	 branch name -> `<task_name>-<member_name>`
	 for example -> `authentication-ansh`
* We used Expo as it is a platform for making universal native apps for Android, and iOS. Expo lets us run the Application on a local environment if connected to a simulator. All team members used that for testing purposes to check if the application was running without any errors before pushing code on their branch.
* We similarly used expo publish to deploy our application on the expo server which can be retrieved by anyone using a barcode and Expo App on mobile phones or simulators.
* We decided to choose this workflow as we all did our A2 using the same workflow of Expo, React Native and Javascript. A couple of other advantages of this workflow are - Publishes over-the-air updates instantly with Expo and doesn’t need to code in two different languages for Android and IOS. The second was really important to us as our Partner wanted an Application for both Android and IOS

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?
