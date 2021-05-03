import * as React from "react";
import Layout from "../components/layout";

const resumeData = {
  employment: [
    {
      where: "Correctional Psychiatric Services",
      who: "Senior Fullstack Engineer",
      when: "Jan 2020 - Present",
      what: [
        `Design and develop an electronic health record which aggregates and organizes
       inmate medical data. The app uses the Vue3 composition API as well as Vuetify’s 
       Material UI adherent design practice. The server delivers realtime data over websockets 
       using FeathersJS.`,
      ],
    },
    {
      where: "Correctional Psychiatric Services",
      who: "Fullstack Engineer",
      when: "Aug 2015 - Jan 2020",
      what: [
        `Designed and implemented a data dashboard to track in real time key performance indices of
        prison management including recidivism, drug detox, and personnel management as well as
        provide year on year analysis.`,
        `Created an application which consumes data from heartrate monitors, used as a sucide
        prevention tool for high-risk inmates.`,
        `Wrote mobile applications using React Native that interface with pub/sub panic button alert
        system, sending gps and demographic data with every alert.`,
      ],
    },
    {
      where: "Bean Creative",
      who: "Developer",
      when: "Aug 2013 - Jul 2015",
      what: [
        `Acted as primary developer on children’s web and mobile games written in various different
        languages and frameworks including: ActionScript, Javascript, Starling, HTML5, CreateJS, Java
        for Android, and PhoneGap.`,
        `Managed rapidly shifting expectations, timelines, implementations, and projects`,
        `Honed self-motivation and written communication skills as remote developer.`,
      ],
    },
    {
      where: "Clarity Solution Group",
      who: "Associate Consultant",
      when: "May 2012 - Aug 2013",
      what: [
        `Collaborated as a member of a large team consulting for Office Max.`,
        `Contributed to Web Commerce ATG platform and responsive HTML/CSS email design.`,
      ],
    },
  ],
  education: [
    {
      where:
        "University of Virginia, School of Engineering and Applied Science",
      when: "2007 - 2011",
      what: ["Bachelors of Science in Computer Science"],
    },
    {
      where: "Northwestern University, School of Continuing Studies",
      when: "2012 - 2013",
      what: ["Pursued a Masters of Fine Art in Creative Writing"],
    },
  ],
  interests: [
    {
      where: "Member of Boylston Chess Club",
    },
    {
      where: "Crossword fan and creator of clueminate.com",
    },
  ],
};

const Resume = () => {
  return (
    <Layout>
      <Group content={resumeData.employment}>Employment</Group>
      <Group content={resumeData.education}>Education</Group>
      <Group content={resumeData.interests}>Interests</Group>
    </Layout>
  );
};

export default Resume;

const Group = ({ children, content }) => {
  return (
    <div>
      <span style={{ fontSize: 40 }}>{children}</span>
      {content.map(({ where, who, when, what }) => {
        return (
          <div>
            <div>
              <b style={{ fontSize: 18 }}>{where}</b>
              {who && ","} <i>{who}</i>
            </div>
            <div style={{ color: "#999" }}>{when}</div>
            {what && (
              <ul>
                {what.map((item) => {
                  return (
                    <li style={{ marginLeft: 50, fontSize: 15 }}>{item}</li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};
