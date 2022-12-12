import { useState, useEffect } from "react";
import { stringify } from "uuid";
import Form from "./form";
//import GraphVis > GraphVis component will have the layout to structure the data... the parameter in the instance of GraphVis in student.js will be the json object of data

let PORT = process.env.PORT;
if (!PORT) {
  PORT = "http://localhost:8000"
}

const testData = {
  data: {
    name: {
      raw: "Lea Leopard",
      first: "Lea",
      last: "Leopard",
      middle: "",
      title: "",
    },
    phoneNumbers: [
      "+19095555555",
      "+17145551234",
      "+19092435678",
      "+19095551234",
      "+19095551235",
      "(123) 123-4567",
      "(123) 123-3456",
      "012-34-5678",
    ],
    websites: [],
    emails: [
      "jpublic@email.com",
      "sarah.lane@laverne.edu",
      "lea.leopard@laverne.edu",
      "lleopard@laverne.edu",
      "cs.whiz@laverne.edu",
    ],
    dateOfBirth: null,
    location: {
      formatted: "La Verne, CA 91750, USA",
      postalCode: "91750",
      state: "California",
      country: "United States",
      countryCode: "US",
      rawInput: "321 Leo Way, La Verne, CA",
      streetNumber: null,
      street: null,
      apartmentNumber: null,
      city: "La Verne",
    },
    objective: "",
    languages: ["Spanish", "Vietnamese", "English"],
    summary: "",
    totalYearsExperience: 13,
    headShot: null,
    education: [
      {
        id: 6318639,
        organization: "Armstrong High School",
        accreditation: {
          education: "Bachelor of Arts",
          inputStr: "Bachelor of Arts, Business Administration",
          matchStr: "",
          educationLevel: "bachelors",
        },
        grade: {
          raw: "GPA: 3.5",
          metric: "GPA",
          value: "3.5",
        },
        location: {
          formatted: "La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "La Verne, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "La Verne",
        },
        dates: {
          completionDate: "2016-06-01T00:00:00.000Z",
          isCurrent: false,
          startDate: null,
        },
      },
      {
        id: 6318636,
        organization: "University of La Verne",
        accreditation: {
          education: "Bachelor of Arts",
          inputStr: "Bachelor of Arts, Business Administration",
          matchStr: "",
          educationLevel: "bachelors",
        },
        grade: {
          raw: "GPA: 3.5",
          metric: "GPA",
          value: "3.5",
        },
        location: {
          formatted: "La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "La Verne, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "La Verne",
        },
        dates: {
          completionDate: "2016-06-01T00:00:00.000Z",
          isCurrent: false,
          startDate: null,
        },
      },
      {
        id: 6318637,
        organization: "University of La Verne",
        accreditation: {
          education: "Bachelor of Science",
          inputStr: "Bachelor of Science, Sociology",
          matchStr: "",
          educationLevel: "bachelors",
        },
        grade: null,
        location: {
          formatted: "La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "La Verne, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "La Verne",
        },
        dates: {
          completionDate: "2015-05-01T00:00:00.000Z",
          isCurrent: false,
          startDate: null,
        },
      },
      {
        id: 6318638,
        organization: "University of La Verne",
        accreditation: {
          education: "Bachelor of Science",
          inputStr: "Bachelor of Science, Kinesiology",
          matchStr: "",
          educationLevel: "bachelors",
        },
        grade: null,
        location: {
          formatted: "La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "La Verne, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "La Verne",
        },
        dates: {
          completionDate: "2015-05-01T00:00:00.000Z",
          isCurrent: false,
          startDate: null,
        },
      },
      {
        id: 6318639,
        organization: "Mt. San Antonio Community College",
        accreditation: {
          education: "Associate of Arts and science",
          inputStr: "Associate of Arts",
          matchStr: "",
          educationLevel: "certificate",
        },
        grade: null,
        location: {
          formatted: "Walnut, CA, USA",
          postalCode: null,
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "Walnut, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "Walnut",
        },
        dates: {
          completionDate: "2013-05-01T00:00:00.000Z",
          isCurrent: false,
          startDate: null,
        },
      },
      {
        id: 6318640,
        organization: "University of La Verne",
        accreditation: {
          education: "Bachelor of Science",
          inputStr: "Bachelor of Science, Computer Science",
          matchStr: "",
          educationLevel: "bachelors",
        },
        grade: {
          raw: "G.P.A. 3.55",
          metric: "G.P.A",
          value: "3.55",
        },
        location: {
          formatted: "La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "La Verne, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "La Verne",
        },
        dates: {
          completionDate: "2015-05-01T00:00:00.000Z",
          isCurrent: false,
          startDate: null,
        },
      },
      {
        id: 6318641,
        organization: "University of La Verne",
        accreditation: {
          education: "Bachelor of Arts",
          inputStr: "Bachelor of Arts in Broadcasting, Radio Concentration",
          matchStr: "Bachelor of Arts",
          educationLevel: "bachelors",
        },
        grade: {
          raw: "G.P.A. 3.6",
          metric: "G.P.A",
          value: "3.6",
        },
        location: {
          formatted: "La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "La Verne, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "La Verne",
        },
        dates: null,
      },
      {
        id: 6318642,
        organization: "University of La Verne",
        accreditation: {
          inputStr: "",
          matchStr: "",
          educationLevel: null,
        },
        grade: null,
        location: {
          formatted: "La Fetra, 1950 3rd St, La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "1950 Third Street La Verne, CA, 91750",
          streetNumber: "1950",
          street: "3rd Street",
          apartmentNumber: null,
          city: "La Verne",
        },
        dates: null,
      },
      {
        id: 6318643,
        organization: "University of Colorado",
        accreditation: {
          education: "Master of Arts",
          inputStr: "Masters in Arts, Environmental Management",
          matchStr: "Master in Arts",
          educationLevel: "masters",
        },
        grade: {
          raw: "3.8 GPA.",
          metric: "GPA",
          value: "3.8",
        },
        location: {
          formatted: "Denver, CO, USA",
          postalCode: null,
          state: "Colorado",
          country: "United States",
          countryCode: "US",
          rawInput: "Denver, Colorado",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "Denver",
        },
        dates: {
          completionDate: "2014-05-01T00:00:00.000Z",
          isCurrent: false,
          startDate: null,
        },
      },
      {
        id: 6318644,
        organization: "University of La Verne",
        accreditation: {
          education: "Bachelor of Arts",
          inputStr: "Bachelor of Arts, Political Science",
          matchStr: "",
          educationLevel: "bachelors",
        },
        grade: null,
        location: {
          formatted: "La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "La Verne, California",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "La Verne",
        },
        dates: {
          completionDate: "2012-05-01T00:00:00.000Z",
          isCurrent: false,
          startDate: null,
        },
      },
    ],
    profession: "Training Manager",
    linkedin: null,
    workExperience: [
      {
        id: 12220127,
        jobTitle: "Case Management Intern",
        organization: "T.Y.K.E.S. Resource Center",
        location: {
          formatted: "Chino, CA, USA",
          postalCode: null,
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "Chino, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "Chino",
        },
        jobDescription:
          " Collaborate with community agencies and nonprofit organizations to locate available resources for parents in need of social services \n•Assess need and recommend services for diverse families with children birth to five years of age \n•Co-lead the facilitation of court mandated parenting classes ",
        dates: {
          startDate: "2014-06-01T00:00:00.000Z",
          endDate: "2022-11-09T00:00:00.000Z",
          monthsInPosition: 101,
          isCurrent: true,
        },
        occupation: {
          jobTitle: "Case Management Intern",
          jobTitleNormalized: "Case Management Intern",
          managementLevel: null,
          classification: null,
        },
      },
      {
        id: 12220128,
        jobTitle: "Intern",
        organization: "Pals Program, Human Services Department",
        location: {
          formatted: "Anaheim, CA, USA",
          postalCode: null,
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "Anaheim, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "Anaheim",
        },
        jobDescription:
          " Facilitated educational workshops and activities aimed in promoting positive self-esteem and leadership skills among diverse adolescents \n•Delivered one-on-one mentoring to at risk and troubled teens \n•Provided tutoring in math, science, and writing to high school age students WORK EXPERIENCE ",
        dates: {
          startDate: "2013-06-01T00:00:00.000Z",
          endDate: "2013-08-01T00:00:00.000Z",
          monthsInPosition: 2,
          isCurrent: false,
        },
        occupation: {
          jobTitle: "Intern",
          jobTitleNormalized: "Intern",
          managementLevel: "Low",
          classification: {
            title: "Business, research and administrative professionals n.e.c.",
            minorGroup: "Business, Research and Administrative Professionals",
            subMajorGroup: "BUSINESS, MEDIA AND PUBLIC SERVICE PROFESSIONALS",
            majorGroup: "PROFESSIONAL OCCUPATIONS",
            socCode: 2439,
          },
        },
      },
      {
        id: 12220129,
        jobTitle: "Front Office Assistant",
        organization: "University of La Verne, Career Services",
        location: null,
        jobDescription:
          " Greet guests, answer questions, and provide information to client inquiries \n•Schedule appointments, with proper follow-up to clients and counselors \n•Answer telephones, direct calls, monitor voicemail and take messages \n•Create, monitor and file office records \n•Maintain supplies, resources. Keep office clean and resources/supplies stocked. ",
        dates: {
          startDate: "2012-08-01T00:00:00.000Z",
          endDate: "2022-11-09T00:00:00.000Z",
          monthsInPosition: 123,
          isCurrent: true,
        },
        occupation: {
          jobTitle: "Front Office Assistant",
          jobTitleNormalized: "Front Office Assistant",
          managementLevel: null,
          classification: {
            title: "Other administrative occupations n.e.c.",
            minorGroup: "Other Administrative Occupations",
            subMajorGroup: "ADMINISTRATIVE OCCUPATIONS",
            majorGroup: "ADMINISTRATIVE AND SECRETARIAL OCCUPATIONS",
            socCode: 4159,
          },
        },
      },
      {
        id: 12220130,
        jobTitle: "Events Coordinator",
        organization: null,
        location: null,
        jobDescription: "",
        dates: null,
        occupation: {
          jobTitle: "Events Coordinator",
          jobTitleNormalized: "Corporate Events Coordinator",
          managementLevel: "Low",
          classification: {
            title: "Events managers and organisers",
            minorGroup: "Sales, Marketing and Related Associate Professionals",
            subMajorGroup:
              "BUSINESS AND PUBLIC SERVICE ASSOCIATE PROFESSIONALS",
            majorGroup: "ASSOCIATE PROFESSIONAL OCCUPATIONS",
            socCode: 3557,
          },
        },
      },
      {
        id: 12220131,
        jobTitle: "Student Athletic Training Intern",
        organization: "San Dimas High School",
        location: {
          formatted: "San Dimas, CA, USA",
          postalCode: null,
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "San Dimas, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "San Dimas",
        },
        jobDescription:
          " Provide support and travel with football, wrestling, basketball, soccer, and volleyball teams \n•Develop rehabilitation programs for a variety of ankle and knee injuries from the acute stage until return to play ",
        dates: {
          startDate: "2014-08-01T00:00:00.000Z",
          endDate: "2022-11-09T00:00:00.000Z",
          monthsInPosition: 99,
          isCurrent: true,
        },
        occupation: {
          jobTitle: "Student Athletic Training Intern",
          jobTitleNormalized: "Athletic Training Intern",
          managementLevel: "Low",
          classification: null,
        },
      },
      {
        id: 12220132,
        jobTitle: "Personal Fitness Trainer",
        organization: "24 Hour Fitness",
        location: {
          formatted: "Glendora, CA, USA",
          postalCode: null,
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "Glendora, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "Glendora",
        },
        jobDescription:
          " Design workouts and diet plans to assist clients reach their nutrition goals \n•Conduct weekly check-ins to monitor client's progress which resulted in an increased weight loss percentage \n•Create individual training sessions to focus on specific problems (i.e. injuries, obesity, etc.) for gym members. Other Work Experience ",
        dates: null,
        occupation: {
          jobTitle: "Personal Fitness Trainer",
          jobTitleNormalized: "Personal Fitness Trainer",
          managementLevel: "Low",
          classification: {
            title: "Fitness and wellbeing instructors",
            minorGroup: "Sports and Fitness Occupations",
            subMajorGroup: "CULTURE, MEDIA AND SPORTS OCCUPATIONS",
            majorGroup: "ASSOCIATE PROFESSIONAL OCCUPATIONS",
            socCode: 3433,
          },
        },
      },
      {
        id: 12220133,
        jobTitle: "Barista",
        organization: "Starbucks",
        location: {
          formatted: "La Verne, CA 91750, USA",
          postalCode: "91750",
          state: "California",
          country: "United States",
          countryCode: "US",
          rawInput: "La Verne, CA",
          streetNumber: null,
          street: null,
          apartmentNumber: null,
          city: "La Verne",
        },
        jobDescription:
          " Served customers quickly while maintaining a cheerful attitude in a high-stress workplace. \n•Awarded employee of the month July 2012 ",
        dates: {
          startDate: "2009-06-01T00:00:00.000Z",
          endDate: "2012-11-01T00:00:00.000Z",
          monthsInPosition: 41,
          isCurrent: false,
        },
        occupation: {
          jobTitle: "Barista",
          jobTitleNormalized: "Barista",
          managementLevel: null,
          classification: {
            title: "Coffee shop workers",
            minorGroup: "Other Elementary Services Occupations",
            subMajorGroup: "ELEMENTARY ADMINISTRATION AND SERVICE OCCUPATIONS",
            majorGroup: "ELEMENTARY OCCUPATIONS",
            socCode: 9266,
          },
        },
      },
      {
        id: 12220134,
        jobTitle: "IT Assistant",
        organization:
          "University of La Verne, Office of Information Technology",
        location: null,
        jobDescription:
          " Provided over-the-phone and in-person troubleshooting for various on-campus departments \n•Coordinated with departments to utilize technology for improved communication \n•Managed documentation and records maintenance according to entry procedures \n•Made recommendations for improved processes ",
        dates: {
          startDate: "2013-07-01T00:00:00.000Z",
          endDate: "2022-11-09T00:00:00.000Z",
          monthsInPosition: 112,
          isCurrent: true,
        },
        occupation: {
          jobTitle: "IT Assistant",
          jobTitleNormalized: "IT Assistant",
          managementLevel: "Low",
          classification: {
            title: "IT operations technicians",
            minorGroup: "Information Technology Technicians",
            subMajorGroup:
              "SCIENCE, ENGINEERING AND TECHNOLOGY ASSOCIATE PROFESSIONALS",
            majorGroup: "ASSOCIATE PROFESSIONAL OCCUPATIONS",
            socCode: 3131,
          },
        },
      },
      {
        id: 12220135,
        jobTitle: "On-air Personality",
        organization: "LeoFM (FM 107.9)",
        location: null,
        jobDescription:
          "Lead a 3-hour shift on LeoFM. Provide an entertaining voice and perspective for listeners and operate the board efficiently throughout broadcast. Take, edit, and playback on-air phone calls using shortcuts. Integrate promotions and public service announcements into show. ",
        dates: {
          startDate: "2012-09-01T00:00:00.000Z",
          endDate: "2022-11-09T00:00:00.000Z",
          monthsInPosition: 122,
          isCurrent: true,
        },
        occupation: {
          jobTitle: "On-air Personality",
          jobTitleNormalized: "On-Air Personality",
          managementLevel: "Low",
          classification: {
            title: "Actors, entertainers and presenters",
            minorGroup: "Artistic, Literary and Media Occupations",
            subMajorGroup: "CULTURE, MEDIA AND SPORTS OCCUPATIONS",
            majorGroup: "ASSOCIATE PROFESSIONAL OCCUPATIONS",
            socCode: 3413,
          },
        },
      },
      {
        id: 12220136,
        jobTitle: "Intern",
        organization: "KROQ (FM 106.7)",
        location: null,
        jobDescription:
          "Assisted with in-studio and off-site performances. Set up and took down remote gear. Promoted station events by blogging and posting on social media. Assisted with stage production during KROQ Weenie Roast. Provided research for various stories used by on-air personalities. ",
        dates: {
          startDate: "2014-09-01T00:00:00.000Z",
          endDate: "2014-12-01T00:00:00.000Z",
          monthsInPosition: 3,
          isCurrent: false,
        },
        occupation: {
          jobTitle: "Intern",
          jobTitleNormalized: "Intern",
          managementLevel: "Low",
          classification: {
            title: "Business, research and administrative professionals n.e.c.",
            minorGroup: "Business, Research and Administrative Professionals",
            subMajorGroup: "BUSINESS, MEDIA AND PUBLIC SERVICE PROFESSIONALS",
            majorGroup: "PROFESSIONAL OCCUPATIONS",
            socCode: 2439,
          },
        },
      },
      {
        id: 12220137,
        jobTitle: "Program Director",
        organization: "LeoFM (FM 107.9)",
        location: null,
        jobDescription:
          "Managed LeoFM station to ensure proper broadcast coverage, consistent on-air messages, and execution of all promotions. Supervised entire crew including music director, promotions director, sports director, and all on-air talent. ",
        dates: {
          startDate: "2013-08-01T00:00:00.000Z",
          endDate: "2014-08-01T00:00:00.000Z",
          monthsInPosition: 12,
          isCurrent: false,
        },
        occupation: {
          jobTitle: "Program Director",
          jobTitleNormalized: "Program Director",
          managementLevel: "Upper",
          classification: {
            title: "Health services and public health managers and directors",
            minorGroup: "Health and Social Services Managers and Directors",
            subMajorGroup: "CORPORATE MANAGERS AND DIRECTORS",
            majorGroup: "MANAGERS, DIRECTORS AND SENIOR OFFICIALS",
            socCode: 1171,
          },
        },
      },
      {
        id: 12220138,
        jobTitle: "Music Director",
        organization: "LeoFM (FM 107.9)",
        location: null,
        jobDescription:
          "Programmed music list for LeoFM, a top-40 station. Led weekly meetings regarding the inclusion of new music. Conducted music surveys and studies with listeners to determine satisfaction. Used selector and protocols to add new music. ",
        dates: {
          startDate: "2013-01-01T00:00:00.000Z",
          endDate: "2014-08-01T00:00:00.000Z",
          monthsInPosition: 19,
          isCurrent: false,
        },
        occupation: {
          jobTitle: "Music Director",
          jobTitleNormalized: "Music Director",
          managementLevel: "Low",
          classification: {
            title: "Musicians",
            minorGroup: "Artistic, Literary and Media Occupations",
            subMajorGroup: "CULTURE, MEDIA AND SPORTS OCCUPATIONS",
            majorGroup: "ASSOCIATE PROFESSIONAL OCCUPATIONS",
            socCode: 3415,
          },
        },
      },
      {
        id: 12220139,
        jobTitle: "Paralegal",
        organization: "SMITH, ROGERS AND ANDERSON",
        location: {
          formatted: "Main St, Denver, CO 80238, USA",
          postalCode: "80238",
          state: "Colorado",
          country: "United States",
          countryCode: "US",
          rawInput: "100 Main Street, Denver, Colorado",
          streetNumber: null,
          street: "Main Street",
          apartmentNumber: null,
          city: "Denver",
        },
        jobDescription:
          "Salary: $30,000 per year 40 hours per week Supervisor: John Doe (You may contact at 111-111-1111) ACCOMPLISHMENTS: \n•Researched case law on five multi-million dollar lawsuits involving exposures to toxic chemicals, and summarized results in memos for four senior attorneys \n•Tracked all document submission deadlines for cases and court appearance dates, and informed senior attorneys of approaching deadlines and dates \n•Drafted about two letters per week to clients requesting information or updating them on case status \n•Excellent reputation: Promoted from Paralegal I to Paralegal II 6 months after being hired; received very positive performance evaluations and bonuses every year ",
        dates: {
          startDate: "2012-09-01T00:00:00.000Z",
          endDate: "2014-06-01T00:00:00.000Z",
          monthsInPosition: 21,
          isCurrent: false,
        },
        occupation: {
          jobTitle: "Paralegal",
          jobTitleNormalized: "Paralegal",
          managementLevel: "Low",
          classification: {
            title: "Legal professionals n.e.c.",
            minorGroup: "Legal Professionals",
            subMajorGroup: "BUSINESS, MEDIA AND PUBLIC SERVICE PROFESSIONALS",
            majorGroup: "PROFESSIONAL OCCUPATIONS",
            socCode: 2419,
          },
        },
      },
    ],
    skills: [
      {
        id: 65953674,
        emsiId: "KS1226Y6DNDT05G7FJ4J",
        name: "Computer Science",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953675,
        emsiId: "KS120HX7126XRCB5L34J",
        name: "Anthropology",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953676,
        emsiId: "KS1227V6WBR3BH3SJYSZ",
        name: "Information Technology",
        lastUsed: "2022-11-09",
        numberOfMonths: 112,
        type: "soft_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 7,
            workExperienceId: 12220134,
          },
        ],
      },
      {
        id: 65953677,
        emsiId: "KSFJTTHIYSVS7DXDWKHO",
        name: "Agenda (Meeting)",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953678,
        emsiId: "KS124VM6SRCQVPJWHY2N",
        name: "Human Services",
        lastUsed: "2013-08-01",
        numberOfMonths: 2,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 1,
            workExperienceId: 12220128,
          },
        ],
      },
      {
        id: 65953679,
        emsiId: "KSWRVW5LY58PB13JNSKK",
        name: "Text Files",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953680,
        emsiId: "KS1203C6N9B52QGB4H67",
        name: "Research",
        lastUsed: "2014-12-01",
        numberOfMonths: 24,
        type: "soft_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: 9,
            workExperienceId: 12220136,
          },
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
          {
            section: "WorkExperience",
            position: 9,
            workExperienceId: 12220136,
          },
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
        ],
      },
      {
        id: 65953681,
        emsiId: "KS1200X6V3937RSF8VVM",
        name: "First Aid",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Training/Certifications",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953682,
        emsiId: "KS122VW78Q67XR4C3ZDW",
        name: "Operating Systems",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953683,
        emsiId: "KS440Q175XN9R2LCQBTG",
        name: "Sociology",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953684,
        emsiId: "KS440PQ73246B9ZJBSBP",
        name: "Social Change",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953685,
        emsiId: "KS1281L64DB6GGCS37X4",
        name: "Pro Tools",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953686,
        emsiId: "KS122HK6LN2MZHFY69GJ",
        name: "Creativity",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953687,
        emsiId: "KS1218H6LSPWQHWXPLCD",
        name: "Microsoft Outlook",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953688,
        emsiId: "KS1276Y6TJVYF6YLD3G7",
        name: "Office Assistant",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953689,
        emsiId: "KS120ZH69WYL1431RP7P",
        name: "Social Security",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "PersonalDetails",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953690,
        emsiId: "KS1218P66BGK5X5JGKLF",
        name: "Business Ethics",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953691,
        emsiId: "KS4425C7820LCHZS7VGX",
        name: "Writing",
        lastUsed: "2013-08-01",
        numberOfMonths: 2,
        type: "soft_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 1,
            workExperienceId: 12220128,
          },
        ],
      },
      {
        id: 65953692,
        emsiId: "KS9A8LU3MUNAP28Q3ESI",
        name: "Greet Guests",
        lastUsed: "2022-11-09",
        numberOfMonths: 123,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 2,
            workExperienceId: 12220129,
          },
        ],
      },
      {
        id: 65953693,
        emsiId: "KS127ZG6DBSF76WF7VYX",
        name: "Microsoft PowerPoint",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953694,
        emsiId: "KS121DD6PJVP5J55TD7Q",
        name: "Cardiopulmonary Resuscitation (CPR)",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Training/Certifications",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953695,
        emsiId: "KS1200H6XYN1CR0G5NZ0",
        name: "Microsoft Excel",
        lastUsed: "2014-06-01",
        numberOfMonths: 21,
        type: "soft_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
        ],
      },
      {
        id: 65953696,
        emsiId: "KS122556LMQ829GZCCRV",
        name: "Communications",
        lastUsed: "2022-11-09",
        numberOfMonths: 112,
        type: "soft_skill",
        sources: [
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Summary",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: 7,
            workExperienceId: 12220134,
          },
        ],
      },
      {
        id: 65953697,
        emsiId: "KS1206Y6W7F5JS3VBTFL",
        name: "Adobe Photoshop",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953698,
        emsiId: "KS126BX7995P0YWSV75T",
        name: "Weight Loss",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 5,
            workExperienceId: 12220132,
          },
        ],
      },
      {
        id: 65953699,
        emsiId: "KS125BW74QLLYL9MMFR3",
        name: "Storage Area Network (SAN)",
        lastUsed: "2022-11-09",
        numberOfMonths: 99,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 4,
            workExperienceId: 12220131,
          },
        ],
      },
      {
        id: 65953700,
        emsiId: "KS4QDIEYZ09ECRF6K9U7",
        name: "Tumblr",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953701,
        emsiId: "KS126TT5X14LXC9KC03X",
        name: "MVS (OS)",
        lastUsed: "2014-12-01",
        numberOfMonths: 26,
        type: "hard_skill",
        sources: [
          {
            section: "PersonalDetails",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Summary",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Training/Certifications",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: 1,
            workExperienceId: 12220128,
          },
          {
            section: "WorkExperience",
            position: 5,
            workExperienceId: 12220132,
          },
          {
            section: "WorkExperience",
            position: 9,
            workExperienceId: 12220136,
          },
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
        ],
      },
      {
        id: 65953702,
        emsiId: "KS120265WKHSMJ6HYX8P",
        name: "Microsoft Windows",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953703,
        emsiId: "KS1219S69HLWD9V0GPMS",
        name: "Unix",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953705,
        emsiId: "KS1218W78FGVPVP2KXPX",
        name: "Management",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953706,
        emsiId: "KS125MY63SM2LYJYD7L5",
        name: "Kinesiology",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953707,
        emsiId: "KS123PC6DY2MQV0XP43Q",
        name: "Registration Evaluation Authorisation And Restriction Of Chemicals (REACH) Regulations",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: 5,
            workExperienceId: 12220132,
          },
        ],
      },
      {
        id: 65953708,
        emsiId: "KS125LJ6SDQF89N2J4ZP",
        name: "Junit",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953709,
        emsiId: "KS1244K68C6XP7VF1ZCX",
        name: "Front Office",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953710,
        emsiId: "KS121F56HCNN8HS317LM",
        name: "Case Management",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953711,
        emsiId: "ES140C2940D2F6FBB573",
        name: "Athletic Training",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953712,
        emsiId: "KS128716PCLBYDMS1KR5",
        name: "Public Service",
        lastUsed: "2022-11-09",
        numberOfMonths: 122,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 8,
            workExperienceId: 12220135,
          },
        ],
      },
      {
        id: 65953713,
        emsiId: "KS1222J74V913YX7MFYV",
        name: "Encodings",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953714,
        emsiId: "KS121XX660DWPDPRLVW2",
        name: "Lawsuits",
        lastUsed: "2014-06-01",
        numberOfMonths: 21,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
        ],
      },
      {
        id: 65953715,
        emsiId: "KS120076FGP5WGWYMP0F",
        name: "Java (Programming Language)",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953717,
        emsiId: "KS122VT6S2JJ5C5D80NF",
        name: "Linux",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953718,
        emsiId: "KS440W865GC4VRBW6LJP",
        name: "SQL (Programming Language)",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953722,
        emsiId: "KS120KK6YQY9YQSK6DKW",
        name: "Mac OS",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953723,
        emsiId: "KS1200578T5QCYT0Z98G",
        name: "HyperText Markup Language (HTML)",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953726,
        emsiId: "ES64A2C14FD174A5DDF6",
        name: "Liberal Arts",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953727,
        emsiId: "KS4413Y6BTT254HZKWTZ",
        name: "Swimming",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953728,
        emsiId: "KS1200365FTR9X0M96T9",
        name: "Microsoft Word",
        lastUsed: null,
        numberOfMonths: null,
        type: "soft_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953732,
        emsiId: "ES58B589F1D2D5363714",
        name: "Database Systems",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953734,
        emsiId: "KS125ZB6BWF5RY40BH1B",
        name: "Risk Management",
        lastUsed: null,
        numberOfMonths: null,
        type: "hard_skill",
        sources: [
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
        ],
      },
      {
        id: 65953716,
        emsiId: "KS1242W68Y5QN3S32W3C",
        name: "FourGen Computer-Aided Software Engineering (CASE) Tools",
        lastUsed: "2014-06-01",
        numberOfMonths: 21,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
        ],
      },
      {
        id: 65953720,
        emsiId: "KS7G0Z579RRP7TRC2L9T",
        name: "Surveys",
        lastUsed: "2014-08-01",
        numberOfMonths: 19,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 11,
            workExperienceId: 12220138,
          },
        ],
      },
      {
        id: 65953721,
        emsiId: "KS440PV6FRJ90X0QFNLY",
        name: "Social Media",
        lastUsed: "2014-12-01",
        numberOfMonths: 3,
        type: "soft_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: 9,
            workExperienceId: 12220136,
          },
        ],
      },
      {
        id: 65953724,
        emsiId: "KS1270F60DPK430ZBJBG",
        name: "Rehabilitation",
        lastUsed: "2022-11-09",
        numberOfMonths: 99,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 4,
            workExperienceId: 12220131,
          },
        ],
      },
      {
        id: 65953725,
        emsiId: "KS126CM78T30RTP4PBYM",
        name: "Memos",
        lastUsed: "2014-06-01",
        numberOfMonths: 21,
        type: "soft_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
        ],
      },
      {
        id: 65953729,
        emsiId: "KS441K2756CXYXBG990G",
        name: "Troubleshooting (Problem Solving)",
        lastUsed: "2022-11-09",
        numberOfMonths: 112,
        type: "soft_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 7,
            workExperienceId: 12220134,
          },
        ],
      },
      {
        id: 65953730,
        emsiId: "KS124JB619VXG6RQ810C",
        name: "Leadership",
        lastUsed: "2013-08-01",
        numberOfMonths: 2,
        type: "soft_skill",
        sources: [
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: 1,
            workExperienceId: 12220128,
          },
          {
            section: "WorkExperience",
            position: 1,
            workExperienceId: 12220128,
          },
        ],
      },
      {
        id: 65953731,
        emsiId: "KS1200364C9C1LK3V5Q1",
        name: "C (Programming Language)",
        lastUsed: "2022-11-09",
        numberOfMonths: 655,
        type: "hard_skill",
        sources: [
          {
            section: "Achievements",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Extracurriculars/Leadership",
            position: null,
            workExperienceId: null,
          },
          {
            section: "PersonalDetails",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Projects",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Skills/Interests/Languages",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Summary",
            position: null,
            workExperienceId: null,
          },
          {
            section: "Training/Certifications",
            position: null,
            workExperienceId: null,
          },
          {
            section: "WorkExperience",
            position: 0,
            workExperienceId: 12220127,
          },
          {
            section: "WorkExperience",
            position: 1,
            workExperienceId: 12220128,
          },
          {
            section: "WorkExperience",
            position: 2,
            workExperienceId: 12220129,
          },
          {
            section: "WorkExperience",
            position: 4,
            workExperienceId: 12220131,
          },
          {
            section: "WorkExperience",
            position: 5,
            workExperienceId: 12220132,
          },
          {
            section: "WorkExperience",
            position: 6,
            workExperienceId: 12220133,
          },
          {
            section: "WorkExperience",
            position: 7,
            workExperienceId: 12220134,
          },
          {
            section: "WorkExperience",
            position: 8,
            workExperienceId: 12220135,
          },
          {
            section: "WorkExperience",
            position: 9,
            workExperienceId: 12220136,
          },
          {
            section: "WorkExperience",
            position: 10,
            workExperienceId: 12220137,
          },
          {
            section: "WorkExperience",
            position: 11,
            workExperienceId: 12220138,
          },
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
        ],
      },
      {
        id: 65953733,
        emsiId: "ES32966BEA118E4E7E2B",
        name: "Case Law",
        lastUsed: "2014-06-01",
        numberOfMonths: 21,
        type: "hard_skill",
        sources: [
          {
            section: "WorkExperience",
            position: 12,
            workExperienceId: 12220139,
          },
        ],
      },
    ],
    certifications: [
      "Certified Personal Trainer Ace Fitness October 2012",
      "Relevant Coursework Environmental Law Natural Resources Law Advanced Epidemiology Federal Health",
    ],
    publications: [],
    referees: [
      {
        name: "Bob Bobby",
        text: "Bob Bobby Professor of _____________________ Department Chair Communications University of La Verne 1950 Third Street La Verne, CA, 91750 bbobby@laverne.edu Dr.",
        email: "bbobby@laverne.edu",
        number: null,
      },
      {
        name: "Matt Mathewson",
        text: "Matt Mathewson Professor",
        email: null,
        number: null,
      },
      {
        name: "Karlson",
        text: "Karlson Station Manager KROQ, CBS Radio Inc.",
        email: null,
        number: null,
      },
    ],
    sections: [
      {
        sectionType: "PersonalDetails",
        bbox: [570.3995, 39.191956, 575.06744, 47.27997],
        pageIndex: 0,
        text: "1",
      },
      {
        sectionType: "Projects",
        bbox: [36.0792, 54.046997, 341.23987, 278.72498],
        pageIndex: 0,
        text: "Undergraduate Student Resume Examples 1. Freshman/Sophomore 2. Liberal Arts Resume 3. Kinesiology Resume 4. Technical Resume (Computer Science/Engineering) 5. Communications Resume 6. Federal Government Job Resume (New Graduate)",
      },
      {
        sectionType: "PersonalDetails",
        bbox: [225.01761, 39.191956, 575.0315, 108.37201],
        pageIndex: 1,
        text: "2 Leo Leopard 555 La Verne Way, La Verne, CA lleopard@laverne.edu (909) 555-5555",
      },
      {
        sectionType: "Summary",
        bbox: [36.384, 125.83197, 554.78143, 162.32397],
        pageIndex: 1,
        text: "OBJECTIVE To obtain an on-campus position serving my fellow students which utilizes my strong communication skills.",
      },
      {
        sectionType: "Education",
        bbox: [36.444, 182.232, 574.97864, 232.64398],
        pageIndex: 1,
        text: "EDUCATION University of La Verne, La Verne, CA Expected Graduation: June 2016 Bachelor of Arts, Business Administration GPA: 3.5",
      },
      {
        sectionType: "Achievements",
        bbox: [36.564, 251.77203, 574.78894, 276.68396],
        pageIndex: 1,
        text: "HONORS/AWARDS Dean's List Fall 2013 – Spring 2014",
      },
      {
        sectionType: "Extracurriculars/Leadership",
        bbox: [36.096, 294.072, 574.4868, 576.204],
        pageIndex: 1,
        text: "ON CAMPUS INVOLVEMENT Enactus, University of La Verne August 2013 – Present Member • Implement collective ideas to sponsor campus and community events which promote educational and social change • Led groups of 9 junior high students in discussion on success skills, business ethics, and personal finances • Co-designed 17 minute audio-visual presentation accurately and creatively describing project for use in regional and national competition VOLUNTEER EXPERIENCE LionLike MindState, Pomona, CA June 2012 – Present Volunteer • Plan two yearly outreach events to highlight community members' creativity in spoken word, poetry, music, and art YMCA, Pomona, CA Summer 2013, 2014 Volunteer Swim Coach • Instructed classes of up to 15 children on basic swimming skills • Communicated regularly with parents on children's progress",
      },
      {
        sectionType: "Skills/Interests/Languages",
        bbox: [36.492, 593.592, 478.158, 646.524],
        pageIndex: 1,
        text: "SKILLS Computer: Proficient in Windows and Mac OS, Microsoft Word, PowerPoint, and Excel Language: Fluent in Spanish Social Media: Facebook, Twitter, Instagram",
      },
      {
        sectionType: "PersonalDetails",
        bbox: [200.773, 39.191956, 575.04346, 91.05719],
        pageIndex: 2,
        text: "3 Lea Leopard 1750 First Street, La Verne, CA 91750 (909) 243-5678, Lea.Leopard@laverne.edu",
      },
      {
        sectionType: "Education",
        bbox: [36.7884, 119.097595, 575.3542, 154.41724],
        pageIndex: 2,
        text: "EDUCATION Bachelor of Science, Sociology May 2015 University of La Verne, La Verne, CA",
      },
      {
        sectionType: "Skills/Interests/Languages",
        bbox: [36.7884, 169.49762, 569.87634, 206.4972],
        pageIndex: 2,
        text: "RELATED COUSEWORK (in progress *) • Social Problems • Research Methods • Sociology of Deviance* • Senior Thesis *(Adolescents and deviance)",
      },
      {
        sectionType: "WorkExperience",
        bbox: [36.0324, 221.57758, 574.9227, 518.1384],
        pageIndex: 2,
        text: "INTERNSHIP EXPERIENCE Case Management Intern June 2014 – Present T.Y.K.E.S. Resource Center, Chino, CA • Collaborate with community agencies and nonprofit organizations to locate available resources for parents in need of social services • Assess need and recommend services for diverse families with children birth to five years of age • Co-lead the facilitation of court mandated parenting classes Intern June 2013 – August 2013 Pals Program, Human Services Department, Anaheim, CA • Facilitated educational workshops and activities aimed in promoting positive self-esteem and leadership skills among diverse adolescents • Delivered one-on-one mentoring to at risk and troubled teens • Provided tutoring in math, science, and writing to high school age students WORK EXPERIENCE Front Office Assistant August 2012 - Present University of La Verne, Career Services • Greet guests, answer questions, and provide information to client inquiries • Schedule appointments, with proper follow-up to clients and counselors • Answer telephones, direct calls, monitor voicemail and take messages • Create, monitor and file office records • Maintain supplies, resources. Keep office clean and resources/supplies stocked.",
      },
      {
        sectionType: "Extracurriculars/Leadership",
        bbox: [36.4644, 533.3376, 574.3211, 595.53723],
        pageIndex: 2,
        text: "On-Campus Involvement President August 2013 - Present Sociology and Anthropology Club • Lead weekly meetings, create agenda, and follow up on member inquires • Schedule guest speakers to enhance member knowledge and create networking opportunities",
      },
      {
        sectionType: "WorkExperience",
        bbox: [36.7884, 610.8576, 573.39844, 620.9772],
        pageIndex: 2,
        text: "Events Coordinator September 2012 – May 2013",
      },
      {
        sectionType: "Extracurriculars/Leadership",
        bbox: [36.54, 623.3376, 154.94043, 633.3384],
        pageIndex: 2,
        text: "Campus Activities Board",
      },
      {
        sectionType: "WorkExperience",
        bbox: [36.918, 636.7776, 341.46902, 646.7784],
        pageIndex: 2,
        text: "• Contacted and hired vendors for various events on campus",
      },
      {
        sectionType: "Extracurriculars/Leadership",
        bbox: [36.918, 650.34717, 413.59338, 673.7772],
        pageIndex: 2,
        text: "• Worked with University Risk Management Department to secure contracts • Managed a budget of $8000",
      },
      {
        sectionType: "Skills/Interests/Languages",
        bbox: [36, 688.8576, 350.63345, 739.0572],
        pageIndex: 2,
        text: "ADDITIONAL SKILLS • Fluent in Spanish • Proficient in Microsoft Word, Excel, Outlook and PowerPoint • Knowledge of Adobe",
      },
      {
        sectionType: "PersonalDetails",
        bbox: [246.53291, 39.23999, 575.5475, 169.62],
        pageIndex: 3,
        text: "4 Lea Leopard 123 Main Street La Verne, CA 91750 Home: (909) 555-1234 Cell: (909) 555-1235 lea.leopard@laverne.edu",
      },
      {
        sectionType: "Education",
        bbox: [36.06, 187.05316, 574.8702, 267.54004],
        pageIndex: 3,
        text: "Education Bachelor of Science, Kinesiology May 2015 University of La Verne, La Verne, CA Associate of Arts May 2013 Mt. San Antonio Community College, Walnut, CA",
      },
      {
        sectionType: "WorkExperience",
        bbox: [36.24624, 285.9331, 575.82855, 567.06],
        pageIndex: 3,
        text: "Relevant Experience Student Athletic Training Intern August 2014 - Present San Dimas High School – San Dimas, CA • Provide support and travel with football, wrestling, basketball, soccer, and volleyball teams • Develop rehabilitation programs for a variety of ankle and knee injuries from the acute stage until return to play Personal Fitness Trainer November 2012 - Present 24 Hour Fitness– Glendora, CA • Design workouts and diet plans to assist clients reach their nutrition goals • Conduct weekly check-ins to monitor client's progress which resulted in an increased weight loss percentage • Create individual training sessions to focus on specific problems (i.e. injuries, obesity, etc.) for gym members. Other Work Experience Barista June 2009 – November 2012 Starbucks – La Verne, CA • Served customers quickly while maintaining a cheerful attitude in a high-stress workplace. • Awarded employee of the month July 2012",
      },
      {
        sectionType: "Training/Certifications",
        bbox: [36.096, 584.0131, 572.3184, 620.808],
        pageIndex: 3,
        text: "Certifications Adult CPR and First Aid – Red Cross September 2013 Certified Personal Trainer - Ace Fitness October 2012",
      },
      {
        sectionType: "Skills/Interests/Languages",
        bbox: [36.67392, 640.4131, 322.0464, 680.712],
        pageIndex: 3,
        text: "Special Skills • Fluent in Spanish • Proficient in Microsoft Word, PowerPoint, and Outlook",
      },
      {
        sectionType: "PersonalDetails",
        bbox: [223.23152, 38.891968, 575.10345, 129.492],
        pageIndex: 4,
        text: "5 C.S. Whiz 1234 Leopard Way, La Verne, CA cs.whiz@laverne.edu (909) 555-5555",
      },
      {
        sectionType: "Education",
        bbox: [36.528, 146.95197, 574.53876, 289.404],
        pageIndex: 4,
        text: "EDUCATION Bachelor of Science, Computer Science Expected: May 2015 Concentration: Software University of La Verne, La Verne, CA G.P.A. 3.55 RELATED COURSES • Principles of Computer Networks • Data Structures • Digital Logic Systems • Assembly Language • Operating Systems • Database Management Systems",
      },
      {
        sectionType: "Projects",
        bbox: [36.564, 306.792, 575.3728, 375.324],
        pageIndex: 4,
        text: "COURSE PROJECT Huffman Tree Text Compressor Fall 2014 • Implemented in Java SE 6 and tested in JUnit • Compressed text files by assigning new bit encodings to characters according to frequency • Re-expanded text files that were previously compressed with Huffman encoding",
      },
      {
        sectionType: "Skills/Interests/Languages",
        bbox: [36.384, 392.71198, 365.1816, 463.788],
        pageIndex: 4,
        text: "TECHNICAL SKILLS • Languages: C++, HTML, Java, Visual Basic, SQL, JUnit • Operating Systems: Windows, Linux, UNIX • Database Systems: Oracle, ADB2 • Software: Microsoft Word, Excel, PowerPoint, Photoshop",
      },
      {
        sectionType: "WorkExperience",
        bbox: [36.252, 481.27197, 573.88324, 580.428],
        pageIndex: 4,
        text: "RELATED WORK EXPERIENCE University of La Verne, Office of Information Technology July 2013 – Present IT Assistant • Provided over-the-phone and in-person troubleshooting for various on-campus departments • Coordinated with departments to utilize technology for improved communication • Managed documentation and records maintenance according to entry procedures • Made recommendations for improved processes",
      },
      {
        sectionType: "Extracurriculars/Leadership",
        bbox: [35.964, 597.912, 575.2895, 680.364],
        pageIndex: 4,
        text: "ON CAMPUS INVOLVEMENT Associated Students of ULV August 2014 – Present Senator of the College of Arts & Sciences • Represent the interests of the College of Arts & Sciences • Collaborate with other student government leaders on issues concerning the ULV student body at large",
      },
      {
        sectionType: "Skills/Interests/Languages",
        bbox: [35.964, 697.75195, 451.8938, 739.404],
        pageIndex: 4,
        text: "ADDITIONAL SKILLS • Language: Fluent in Vietnamese • Social Media: Proficient using Facebook, Yelp, Twitter, Instagram, Tumblr",
      },
      {
        sectionType: "PersonalDetails",
        bbox: [36.552002, 39.191956, 575.41547, 106.93201],
        pageIndex: 5,
        text: "6 Sarah Lane 321 Leo Way, La Verne, CA sarah.lane@laverne.edu (714) 555-1234",
      },
      {
        sectionType: "Education",
        bbox: [36.528, 125.83197, 333.16547, 164.79602],
        pageIndex: 5,
        text: "EDUCATION Bachelor of Arts in Broadcasting, Radio Concentration University of La Verne, La Verne, CA G.P.A. 3.6",
      },
      {
        sectionType: "Skills/Interests/Languages",
        bbox: [417.13464, 125.83197, 570.93396, 361.548],
        pageIndex: 5,
        text: "PERSONAL TRAITS • Passionate about music • Strong communication skills • Thrive in fast-paced situations • Detail-oriented SKILLS • Proficient with Pro Tools and Selector • Experience in multiple aspects of pre and post production • Skilled using social media • Leadership experience",
      },
      {
        sectionType: "WorkExperience",
        bbox: [36.036, 182.232, 395.2346, 643.068],
        pageIndex: 5,
        text: "RADIO EXPERIENCE LeoFM (FM 107.9) On-air Personality September 2012 – Present Lead a 3-hour shift on LeoFM. Provide an entertaining voice and perspective for listeners and operate the board efficiently throughout broadcast. Take, edit, and playback on-air phone calls using shortcuts. Integrate promotions and public service announcements into show. KROQ (FM 106.7) Intern September 2014 – December 2014 Assisted with in-studio and off-site performances. Set up and took down remote gear. Promoted station events by blogging and posting on social media. Assisted with stage production during KROQ Weenie Roast. Provided research for various stories used by on-air personalities. LeoFM (FM 107.9) Program Director August 2013 – August 2014 Managed LeoFM station to ensure proper broadcast coverage, consistent on-air messages, and execution of all promotions. Supervised entire crew including music director, promotions director, sports director, and all on-air talent. LeoFM (FM 107.9) Music Director January 2013 – August 2014 Programmed music list for LeoFM, a top-40 station. Led weekly meetings regarding the inclusion of new music. Conducted music surveys and studies with listeners to determine satisfaction. Used selector and protocols to add new music.",
      },
      {
        sectionType: "Referees",
        bbox: [416.91864, 379.27197, 574.69104, 542.004],
        pageIndex: 5,
        text: "REFERENCES Dr. Bob Bobby Professor of _____________________ Department Chair Communications University of La Verne 1950 Third Street La Verne, CA, 91750 bbobby@laverne.edu Dr. Matt Mathewson Professor of",
      },
      {
        sectionType: "Education",
        bbox: [417.13464, 542.64, 574.69104, 613.14],
        pageIndex: 5,
        text: "_____________________ Communications University of La Verne 1950 Third Street La Verne, CA, 91750 mmathwewson@laverne.edu",
      },
      {
        sectionType: "PersonalDetails",
        bbox: [417.24265, 632.172, 491.29346, 640.64404],
        pageIndex: 5,
        text: "Carla Karlson",
      },
      {
        sectionType: "Referees",
        bbox: [417.30264, 646.39197, 525.14185, 670.872],
        pageIndex: 5,
        text: "Station Manager KROQ, CBS Radio Inc.",
      },
      {
        sectionType: "Achievements",
        bbox: [36.036, 660.54, 394.71677, 699.324],
        pageIndex: 5,
        text: "HONORS & AWARDS Academic Recognition Award Spring 2013 Certificate of Achievement Fall 2012, Spring 2011, Fall 2013",
      },
      {
        sectionType: "PersonalDetails",
        bbox: [417.25464, 674.412, 534.377, 713.388],
        pageIndex: 5,
        text: "555 L.A. Way Los Angeles, CA, 90210 carlak@kroq.com",
      },
      {
        sectionType: "PersonalDetails",
        bbox: [36.486, 39.27594, 575.3675, 192.57721],
        pageIndex: 6,
        text: "7 Jane Q. Public 1234 Yellow Brick Road ♦ City, State 12345 Work: (123) 123-4567 ♦ Cell: (123) 123-3456 ♦ Home: (123) 123-3456 ♦ Email: JPublic@Email.com Social Security Number: 012-34-5678 U.S. Citizen O BJ ECTIVE POLICY ANALYST: GS-0301-11 Vacancy Number: 12345",
      },
      {
        sectionType: "Education",
        bbox: [36.7668, 205.9776, 575.4507, 497.25842],
        pageIndex: 6,
        text: 'EDUCATION Masters in Arts, Environmental Management 5/2014 University of Colorado Denver, Colorado • Graduated with Distinction; 3.8 GPA. • One-of-10 US graduate students out of 1,500 applicants awarded a $20,000 Aldo Leopold Research Grant • Thesis: Will the Endangered Species Act Survive? • Presented thesis results to 50 ecologists at American Institute of Ecology Annual Meeting; Institute newsletter described presentation as a "tour de force Relevant Coursework: Environmental Law; Natural Resources Law; Advanced Epidemiology; Federal Health Policy; Quantitative Analysis; Environmental Crises in Developing Countries; Toxicology; Wildlife Ecology Bachelor of Arts, Political Science 5/2012 Minor: Legal Studies University of La Verne La Verne, California • Graduated with Departmental Honors • Fluent in French • Captain of the Basketball Team',
      },
      {
        sectionType: "WorkExperience",
        bbox: [36, 511.9776, 576.0137, 725.3772],
        pageIndex: 6,
        text: "WORK EXPERIENCE SMITH, ROGERS AND ANDERSON 100 Main Street, Denver, Colorado Paralegal 9/2012 to 6/2014 Salary: $30,000 per year 40 hours per week Supervisor: John Doe (You may contact at 111-111-1111) ACCOMPLISHMENTS: • Researched case law on five multi-million dollar lawsuits involving exposures to toxic chemicals, and summarized results in memos for four senior attorneys • Tracked all document submission deadlines for cases and court appearance dates, and informed senior attorneys of approaching deadlines and dates • Drafted about two letters per week to clients requesting information or updating them on case status • Excellent reputation: Promoted from Paralegal I to Paralegal II 6 months after being hired; received very positive performance evaluations and bonuses every year",
      },
    ],
    isResumeProbability: 83,
    rawText:
      "1\nUndergraduate Student Resume Examples 1. Freshman/Sophomore 2. Liberal Arts Resume 3. Kinesiology Resume 4. Technical Resume (Computer Science/Engineering) 5. Communications Resume 6. Federal Government Job Resume (New Graduate)\n2 Leo Leopard 555 La Verne Way, La Verne, CA lleopard@laverne.edu (909) 555-5555\nOBJECTIVE To obtain an on-campus position serving my fellow students which utilizes my strong communication skills.\nEDUCATION University of La Verne, La Verne, CA Expected Graduation: June 2016 Bachelor of Arts, Business Administration GPA: 3.5\nHONORS/AWARDS Dean's List Fall 2013 – Spring 2014\nON CAMPUS INVOLVEMENT Enactus, University of La Verne August 2013 – Present Member • Implement collective ideas to sponsor campus and community events which promote educational and social change • Led groups of 9 junior high students in discussion on success skills, business ethics, and personal finances • Co-designed 17 minute audio-visual presentation accurately and creatively describing project for use in regional and national competition VOLUNTEER EXPERIENCE LionLike MindState, Pomona, CA June 2012 – Present Volunteer • Plan two yearly outreach events to highlight community members' creativity in spoken word, poetry, music, and art YMCA, Pomona, CA Summer 2013, 2014 Volunteer Swim Coach • Instructed classes of up to 15 children on basic swimming skills • Communicated regularly with parents on children's progress\nSKILLS Computer: Proficient in Windows and Mac OS, Microsoft Word, PowerPoint, and Excel Language: Fluent in Spanish Social Media: Facebook, Twitter, Instagram\n3 Lea Leopard 1750 First Street, La Verne, CA 91750 (909) 243-5678, Lea.Leopard@laverne.edu\nEDUCATION Bachelor of Science, Sociology May 2015 University of La Verne, La Verne, CA\nRELATED COUSEWORK (in progress *) • Social Problems • Research Methods • Sociology of Deviance* • Senior Thesis *(Adolescents and deviance)\nINTERNSHIP EXPERIENCE Case Management Intern June 2014 – Present T.Y.K.E.S. Resource Center, Chino, CA • Collaborate with community agencies and nonprofit organizations to locate available resources for parents in need of social services • Assess need and recommend services for diverse families with children birth to five years of age • Co-lead the facilitation of court mandated parenting classes Intern June 2013 – August 2013 Pals Program, Human Services Department, Anaheim, CA • Facilitated educational workshops and activities aimed in promoting positive self-esteem and leadership skills among diverse adolescents • Delivered one-on-one mentoring to at risk and troubled teens • Provided tutoring in math, science, and writing to high school age students WORK EXPERIENCE Front Office Assistant August 2012 - Present University of La Verne, Career Services • Greet guests, answer questions, and provide information to client inquiries • Schedule appointments, with proper follow-up to clients and counselors • Answer telephones, direct calls, monitor voicemail and take messages • Create, monitor and file office records • Maintain supplies, resources. Keep office clean and resources/supplies stocked.\nOn-Campus Involvement President August 2013 - Present Sociology and Anthropology Club • Lead weekly meetings, create agenda, and follow up on member inquires • Schedule guest speakers to enhance member knowledge and create networking opportunities\nEvents Coordinator September 2012 – May 2013\nCampus Activities Board\n• Contacted and hired vendors for various events on campus\n• Worked with University Risk Management Department to secure contracts • Managed a budget of $8000\nADDITIONAL SKILLS • Fluent in Spanish • Proficient in Microsoft Word, Excel, Outlook and PowerPoint • Knowledge of Adobe\n4 Lea Leopard 123 Main Street La Verne, CA 91750 Home: (909) 555-1234 Cell: (909) 555-1235 lea.leopard@laverne.edu\nEducation Bachelor of Science, Kinesiology May 2015 University of La Verne, La Verne, CA Associate of Arts May 2013 Mt. San Antonio Community College, Walnut, CA\nRelevant Experience Student Athletic Training Intern August 2014 - Present San Dimas High School – San Dimas, CA • Provide support and travel with football, wrestling, basketball, soccer, and volleyball teams • Develop rehabilitation programs for a variety of ankle and knee injuries from the acute stage until return to play Personal Fitness Trainer November 2012 - Present 24 Hour Fitness– Glendora, CA • Design workouts and diet plans to assist clients reach their nutrition goals • Conduct weekly check-ins to monitor client's progress which resulted in an increased weight loss percentage • Create individual training sessions to focus on specific problems (i.e. injuries, obesity, etc.) for gym members. Other Work Experience Barista June 2009 – November 2012 Starbucks – La Verne, CA • Served customers quickly while maintaining a cheerful attitude in a high-stress workplace. • Awarded employee of the month July 2012\nCertifications Adult CPR and First Aid – Red Cross September 2013 Certified Personal Trainer - Ace Fitness October 2012\nSpecial Skills • Fluent in Spanish • Proficient in Microsoft Word, PowerPoint, and Outlook\n5 C.S. Whiz 1234 Leopard Way, La Verne, CA cs.whiz@laverne.edu (909) 555-5555\nEDUCATION Bachelor of Science, Computer Science Expected: May 2015 Concentration: Software University of La Verne, La Verne, CA G.P.A. 3.55 RELATED COURSES • Principles of Computer Networks • Data Structures • Digital Logic Systems • Assembly Language • Operating Systems • Database Management Systems\nCOURSE PROJECT Huffman Tree Text Compressor Fall 2014 • Implemented in Java SE 6 and tested in JUnit • Compressed text files by assigning new bit encodings to characters according to frequency • Re-expanded text files that were previously compressed with Huffman encoding\nTECHNICAL SKILLS • Languages: C++, HTML, Java, Visual Basic, SQL, JUnit • Operating Systems: Windows, Linux, UNIX • Database Systems: Oracle, ADB2 • Software: Microsoft Word, Excel, PowerPoint, Photoshop\nRELATED WORK EXPERIENCE University of La Verne, Office of Information Technology July 2013 – Present IT Assistant • Provided over-the-phone and in-person troubleshooting for various on-campus departments • Coordinated with departments to utilize technology for improved communication • Managed documentation and records maintenance according to entry procedures • Made recommendations for improved processes\nON CAMPUS INVOLVEMENT Associated Students of ULV August 2014 – Present Senator of the College of Arts & Sciences • Represent the interests of the College of Arts & Sciences • Collaborate with other student government leaders on issues concerning the ULV student body at large\nADDITIONAL SKILLS • Language: Fluent in Vietnamese • Social Media: Proficient using Facebook, Yelp, Twitter, Instagram, Tumblr\n6 Sarah Lane 321 Leo Way, La Verne, CA sarah.lane@laverne.edu (714) 555-1234\nEDUCATION Bachelor of Arts in Broadcasting, Radio Concentration University of La Verne, La Verne, CA G.P.A. 3.6\nRADIO EXPERIENCE LeoFM (FM 107.9) On-air Personality September 2012 – Present Lead a 3-hour shift on LeoFM. Provide an entertaining voice and perspective for listeners and operate the board efficiently throughout broadcast. Take, edit, and playback on-air phone calls using shortcuts. Integrate promotions and public service announcements into show. KROQ (FM 106.7) Intern September 2014 – December 2014 Assisted with in-studio and off-site performances. Set up and took down remote gear. Promoted station events by blogging and posting on social media. Assisted with stage production during KROQ Weenie Roast. Provided research for various stories used by on-air personalities. LeoFM (FM 107.9) Program Director August 2013 – August 2014 Managed LeoFM station to ensure proper broadcast coverage, consistent on-air messages, and execution of all promotions. Supervised entire crew including music director, promotions director, sports director, and all on-air talent. LeoFM (FM 107.9) Music Director January 2013 – August 2014 Programmed music list for LeoFM, a top-40 station. Led weekly meetings regarding the inclusion of new music. Conducted music surveys and studies with listeners to determine satisfaction. Used selector and protocols to add new music.\nHONORS & AWARDS Academic Recognition Award Spring 2013 Certificate of Achievement Fall 2012, Spring 2011, Fall 2013\nPERSONAL TRAITS • Passionate about music • Strong communication skills • Thrive in fast-paced situations • Detail-oriented SKILLS • Proficient with Pro Tools and Selector • Experience in multiple aspects of pre and post production • Skilled using social media • Leadership experience\nREFERENCES Dr. Bob Bobby Professor of _____________________ Department Chair Communications University of La Verne 1950 Third Street La Verne, CA, 91750 bbobby@laverne.edu Dr. Matt Mathewson Professor of\n_____________________ Communications University of La Verne 1950 Third Street La Verne, CA, 91750 mmathwewson@laverne.edu\nCarla Karlson\nStation Manager KROQ, CBS Radio Inc.\n555 L.A. Way Los Angeles, CA, 90210 carlak@kroq.com\n7 Jane Q. Public 1234 Yellow Brick Road ♦ City, State 12345 Work: (123) 123-4567 ♦ Cell: (123) 123-3456 ♦ Home: (123) 123-3456 ♦ Email: JPublic@Email.com Social Security Number: 012-34-5678 U.S. Citizen O BJ ECTIVE POLICY ANALYST: GS-0301-11 Vacancy Number: 12345\nEDUCATION Masters in Arts, Environmental Management 5/2014 University of Colorado Denver, Colorado • Graduated with Distinction; 3.8 GPA. • One-of-10 US graduate students out of 1,500 applicants awarded a $20,000 Aldo Leopold Research Grant • Thesis: Will the Endangered Species Act Survive? • Presented thesis results to 50 ecologists at American Institute of Ecology Annual Meeting; Institute newsletter described presentation as a \"tour de force Relevant Coursework: Environmental Law; Natural Resources Law; Advanced Epidemiology; Federal Health Policy; Quantitative Analysis; Environmental Crises in Developing Countries; Toxicology; Wildlife Ecology Bachelor of Arts, Political Science 5/2012 Minor: Legal Studies University of La Verne La Verne, California • Graduated with Departmental Honors • Fluent in French • Captain of the Basketball Team\nWORK EXPERIENCE SMITH, ROGERS AND ANDERSON 100 Main Street, Denver, Colorado Paralegal 9/2012 to 6/2014 Salary: $30,000 per year 40 hours per week Supervisor: John Doe (You may contact at 111-111-1111) ACCOMPLISHMENTS: • Researched case law on five multi-million dollar lawsuits involving exposures to toxic chemicals, and summarized results in memos for four senior attorneys • Tracked all document submission deadlines for cases and court appearance dates, and informed senior attorneys of approaching deadlines and dates • Drafted about two letters per week to clients requesting information or updating them on case status • Excellent reputation: Promoted from Paralegal I to Paralegal II 6 months after being hired; received very positive performance evaluations and bonuses every year",
  },
  meta: {
    identifier: "tqHlnxsv",
    fileName: "Undergraduate-Student-Resume-Examples.pdf",
    ready: true,
    readyDt: "2022-11-09T18:10:57.980Z",
    failed: false,
    expiryTime: null,
    language: "en",
    pdf: "https://affinda-api.s3.amazonaws.com/media/documents/Undergraduate-Student-Resume-Examples.pdf?AWSAccessKeyId=ASIAU2V7FN3BWAG33O64&Signature=8ud9RbXhUsMl2gGplOQr63bZeYU%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEGkaDmFwLXNvdXRoZWFzdC0yIkYwRAIgJTisp6s4syHGKQlLdfdbun754m49Eb7GSOLGKkbQlcMCIDmtNsx9LxjARhmZeCvs7FjoLJjlgl0n3RZt%2F%2BY70YGgKu4DCGIQABoMMzMyMTg3MTM1NjgzIgy95dvRDbJ8nTlSoXYqywPHGTPm%2BlTIdNkGuixGduSdOEufpGk1oKcNgwrCaTtHbST5RcBQMvzl3vyZhIDnUvJteYL8%2FGYkDvFVIkIuGudUEyFe%2FjIdtIJN7LfHRQYK36JbUJNhJy3EueJGFnn1i5tIayTAOWDJecDOsse0wbxJxjR%2BcbUEEdcIi6lDGgUfP0NKfAq52eh7XtopSJxtyhOSsMS7%2BRSmWfG1foyjW9ylbovEqlMIdv78LJlQCLnHw8vwhtZv%2BeaG%2BE9pOEkl66yMx%2BrvJJyDh%2BgHo%2FAnHPJeDj5NtHkkeaOqUCBR5HhDk9ZOIWPdtp0Fk0v00UpQsP3A3jG29xr3%2FbpQFTL%2FTorBN7SrTUtY83MRmmXvtkHY3mW1rt2yf8RBQqXrSUjVxblgOfDraD7b5mEy2nweAxRz6Q1xQ6ikruEj2I%2BWYxzru0Rok2%2BSN%2FhqzStf4pg%2BL4cSCkSXXYSpE4j7nNzvpN23ZfwV9kMQGvU8go7c%2BHrwCSrDVPSQXmKctClFEcj4%2BcmGdB1QaC37hauBM9Zz3HVbWJVE%2FweJaTXMEUtsVB5V91PYdBvpfd4IaReKj9gn81pn6%2F%2BTFBQYwrZrt84HEtLKjc0icdl56ceLCzUwxrevmwY6pgEd8ubuhSUOcRtBftS%2BG%2FeIvlKpws4hBnFtcDW2Uml2xBpXdBuuVXcgezjgKo%2BVDel%2BEooHNjkXCKcj5f%2BBHWh7Dr89%2BsbLZNMDPFLVx1TqDVwYj%2BBThGvD8IXT3jaUyDqLFtCCKaBLoZIqe%2BwPVVttllEtguY9Z5wP3EixNMudmF6t1xMZM2UixibiQYgmpLGy99Ai9Ikfn1L07nN4ScfE%2Fv%2F4aRCI&Expires=1668021058",
    parentDocument: null,
    childDocuments: [],
    pages: [
      {
        id: 7393747,
        pageIndex: 0,
        image: null,
        height: 792,
        width: 612,
        rotation: 0,
      },
      {
        id: 7393748,
        pageIndex: 1,
        image: null,
        height: 792,
        width: 612,
        rotation: 0,
      },
      {
        id: 7393749,
        pageIndex: 2,
        image: null,
        height: 792,
        width: 612,
        rotation: 0,
      },
      {
        id: 7393750,
        pageIndex: 3,
        image: null,
        height: 792,
        width: 612,
        rotation: 0,
      },
      {
        id: 7393751,
        pageIndex: 4,
        image: null,
        height: 792,
        width: 612,
        rotation: 0,
      },
      {
        id: 7393752,
        pageIndex: 5,
        image: null,
        height: 792,
        width: 612,
        rotation: 0,
      },
      {
        id: 7393753,
        pageIndex: 6,
        image: null,
        height: 792,
        width: 612,
        rotation: 0,
      },
    ],
    ocrConfidence: null,
    reviewUrl: null,
    isVerified: true,
  },
  error: {
    errorCode: null,
    errorDetail: null,
  },
};

function getWorkplaces(data) {
  let education = data.data.education;
  let finalData = [];
  for (let i = 0; i < education.length; i++) {
    let educationData = { workplace: "", category: "education", imageurl: "" };
    educationData.workplace = education[i].organization;
    //other function to fetch image url > save to backend
    finalData.push(educationData);
  }
  let workExperience = data.data.workExperience;
  for (let i = 0; i < workExperience.length; i++) {
    let workplaceData = { workplace: "", category: "job", imageurl: "" };
    workplaceData.workplace = workExperience[i].organization;
    //other function to fetch image url > save to backend
    finalData.push(workplaceData);
  }
  console.log("finalData", finalData)
  return finalData;
}
let testWorkplaces = [
  {
    workplace: "University of La Verne",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "University of La Verne",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "University of La Verne",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "Mt. San Antonio Community College",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "University of La Verne",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "University of La Verne",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "University of La Verne",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "University of Colorado",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "University of La Verne",
    category: "education",
    imageurl: "",
  },
  {
    workplace: "T.Y.K.E.S. Resource Center",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "Pals Program, Human Services Department",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "University of La Verne, Career Services",
    category: "job",
    imageurl: "",
  },
  {
    workplace: null,
    category: "job",
    imageurl: "",
  },
  {
    workplace: "San Dimas High School",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "24 Hour Fitness",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "Starbucks",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "University of La Verne, Office of Information Technology",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "LeoFM (FM 107.9)",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "KROQ (FM 106.7)",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "LeoFM (FM 107.9)",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "LeoFM (FM 107.9)",
    category: "job",
    imageurl: "",
  },
  {
    workplace: "SMITH, ROGERS AND ANDERSON",
    category: "job",
    imageurl: "",
  },
];

function sendWorkplaces(workplaces) {
    console.log("HEREEEEEEEEE")
  console.log("sendWorkpalces function was called", workplaces);
  return fetch(PORT + "/api/workplaces", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(workplaces),
  });
}

let workplaceData = getWorkplaces(testData);
//return an array containing an object with keys

function Students(props) {
  let user = props.user;
  // this is my original state with an array of students
  const [students, setStudents] = useState([]);
  const [workplaces, setWorkplace] = useState([]);
  const [resumeUrl, setResumeUrl] = useState("");
  const [resumeData, setResumeData] = useState("");

  // New State to contro the existing student Id that the user wants to edit
  const [editStudentId, setEditStudentId] = useState(null);

  const loadStudents = () => {
    // A function to fetch the list of students that will be load anytime that list change
    fetch(PORT + "/api/students")
      .then((response) => response.json())
      .then((workplaces) => {
        setWorkplace(workplaces);
        console.log(workplaces[0].workplace);
      });
  };

  const images = {};

  //   const loadImages = () => {
  //     // A function to fetch the list of workpalces so that we can fetch the images
  //     fetch("/api/images", {
  //       method: "GET",
  //     })
  //       .then((response) => response.json())
  //       .then((images) => {
  //         const images.map
  //         console.log(workplaces[0].workplace);
  //       });
  //   };

  useEffect(() => {
    loadStudents();
  }, []);

  function onSumbit() {
    let url =
      "https://www.mediafire.com/view/tb0wmdsj50b23hd/testresume.png/file";
    //query parameter > still matches on resume bc doesn't read anything after "?"
    fetch(`/resume?url=${url}`, {
      method: "GET",
    })
      //data comes in as string, gets converted to json object
      .then((response) => response.json())
      .then((data) => {
        //sets outfits as the JSON data by replacing the empty array
        //changes value from null to new value, after setting it, it triggers a re-render
        setResumeData(data);
      });
  }
  console.log("resumeData", resumeData);

  //A function to handle the Delete funtionality
  const onDelete = (student) => {
    return fetch(`http://localhost:8080/api/students/${student.id}`, {
      method: "DELETE",
    }).then((response) => {
      //console.log(response);
      if (response.ok) {
        loadStudents();
      }
    });
  };

  const addStudent = (newStudent) => {
    //console.log(newStudent);
    //postStudent(newStudent);
    setStudents((students) => [...students, newStudent]);
  };

  //A function to control the update in the parent (student component)

  const updateStudent = (savedStudent) => {
    console.log("Line 29 savedStudent", savedStudent);
    // This function should update the whole list of students -
    setStudents((students) => {
      const newArrayStudents = [];
      for (let student of students) {
        if (student.id === savedStudent.id) {
          newArrayStudents.push(savedStudent);
        } else {
          newArrayStudents.push(student);
        }
      }
      return newArrayStudents;
    });
    // This line is only to close the form;
    setEditStudentId(null);
  };

  const onEdit = (student) => {
    console.log("This is line 26 on student component", student);
    const editingID = student.id;
    console.log("Just the student id", student.id);
    setEditStudentId(editingID);
  };

  return (
    <div className="students">
      {/* <h2> List of Workplaces </h2>
      <button onClick={onSumbit}>
        Resume Parser Test
      </button>*/}
      <button onClick={() => sendWorkplaces(workplaceData)}>
        Workplace Table Update Test
      </button>
      <ul>
        {students.map((student) => {
          if (student.id === editStudentId) {
            //something needs to happento allow the user edit that existing student
            // At some point I need to pass the update function as props - connect this to the backend
            return (
              <Form initialStudent={student} saveStudent={updateStudent} />
            );
          } else {
            return (
              <li key={student.id}>
                {student.firstname} {student.lastname}
                <button
                  type="button"
                  onClick={() => {
                    onEdit(student);
                  }}
                >
                  EDIT
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onDelete(student);
                  }}
                >
                  DELETE
                </button>
              </li>
            );
          }
        })}
      </ul>
      {/* {!user ? (
        <h4>Please signup to see full network tree. </h4>
      ) : (
        <ul>
          {workplaces.map((workplace) => {
            return workplace.workplace;
          })}
        </ul>
      )} */}
    </div>
  );
}

export default Students;
