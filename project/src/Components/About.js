import React from 'react';
import {Card} from 'react-bootstrap'

function About() {
  return (
    <Card>
        <h1>About Covid 19</h1>
        
          <a href='https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/summary.html' 
          target='_blank'>CDC Summary</a>
          <p></p>
          <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/index.html#cdc-chat-bot-open' 
          target="_blank">CDC symptoms and testing</a>
          <p></p>
          <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019' 
          target='_blank'>WHO World health Order</a>
          <p>There’s currently no vaccine to prevent coronavirus disease (COVID-19).</p>
          <p>Coronavirus disease (COVID-19) is an infectious disease caused by a new virus.
            The disease causes respiratory illness (like the flu) with symptoms such as a cough, 
            fever, and in more severe cases, difficulty breathing. You can protect yourself by washing your hands frequently, 
            avoiding touching your face, and avoiding close contact (1 meter or 3 feet) with people who are unwell.</p>
          <p>You can protect yourself and help prevent spreading the virus to others if you:
          Do - 
          Wash your hands regularly for 20 seconds, with soap and water or alcohol-based hand rub
          Cover your nose and mouth with a disposable tissue or flexed elbow when you cough or sneeze
          Avoid close contact (1 meter or 3 feet) with people who are unwell
          Stay home and self-isolate from others in the household if you feel unwell
          Don't
          Touch your eyes, nose, or mouth if your hands are not clean</p>
          <img src='https://assets.greentechmedia.com/assets/content/cache/made/assets/content/cache/remote/https_assets.greentechmedia.com/content/images/articles/Coronavirus_COVID-19_Climate_Change_Shutterstock_721_420_80_s_c1.jpg' alt=''/>
    </Card>
  );
}

export default About;