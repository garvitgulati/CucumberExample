Feature: Oracle Login

Scenario:To Check Login Functionally with Valid Username and valid Password.
#Scenario Outline:is used for data driven testing
Given Chrome is opened & Login Page is displayed
When User enters "sys" and "Newuser123"
#when User enters "<UN>" & "<PWD">
And Click on Login button
Then  Home Page should display
And User click on Administration and then on Manage Administration and Database Users
Then Click on create button
And User enters following details
|UserName | Password | CPassword   |
|demo1         |demo1231   |demo1231       |
#Then User enters Username and Password and Confirm Password and click on Create

#Examples:
    