# Project Overview

## Project Links

- https://github.com/Berryv401/Project-2
- [add your deployment link]()

## Project Description

My idea is to make a live website covering the rise of covid 19 cases in the world. Country by country it will show the current confirmed cases and growth rates.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

"https://api.covid19api.com/summary"
```
{data: Response: { "Countries": [ { "Country": "Afghanistan", "NewConfirmed": 5, "TotalConfirmed": 16, "NewDeaths": 0, "TotalDeaths": 0, "NewRecovered": 0, "TotalRecovered": 0 }, .. "Date": "2020-03-16T21:10:53.86852587Z" }
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- https://github.com/Berryv401/Project-2/blob/master/project-worksheet.md
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Add localStorage or firebase for storage

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Main | This will pull in data and from the other paths and forward it to the app |
| Country | This will show the total and new cases in each country |
| Chart | This will show the growth rates over time from countries |
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 3.5hrs | 3.5hrs |
| Routing components | H | 2 hrs | |
| Formatting data per country | H | 3 hrs | |
| Creating data graphic.. if possible | H | 3 hrs | |
| Debugging | H | 4 hrs | |
| Styling | H | 4 hrs | |
| Total | H | 22 hrs| hrs | hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
