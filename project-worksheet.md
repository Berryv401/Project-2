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

- https://wireframepro.mockflow.com/editor.jsp?editor=off&publicid=M6b130391fa7be69ad317f741455587f01585319342167&projectid=M7222d4eaf3acd63e731d553901a770751585261721549&perm=Owner#/page/3dbb530f263842e689eff9ff7761fc87
- [add link to your react architecture]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
- Find and use external api 
- Render data on page
- Add a search option each countries cases
- Add Links to News sources and health articles
- Page Styling
- Allow user to interact with the page
- Final Touches

#### PostMVP 

- Add localStorage or firebase for storage
- Add a table or graph visualizing growth rates over time

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Main | This will pull in data and from the other paths and forward it to the app |
| Country | This will show the total and new cases in each country |
| News Sources | This will show the growth rates over time from countries |
| Post MVP, Graphic | This will be a table or graph showing the rates of spread across the world |
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 3.5hrs | 3.5hrs |
| Routing components | H | 2 hrs | |
| Formatting data per country | H | 3 hrs | |
| About page with Links | H | 3 hrs | |
| Creating data graphic.. if possible | H | 3 hrs | |
| Debugging | H | 4 hrs | |
| Styling | H | 4 hrs | |
| Total | H | 25 hrs| hrs | hrs |

## Additional Libraries
 https://api.covid19api.com/summary, https://api.covid19api.com/, 
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
