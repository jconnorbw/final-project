// This js file implements an entire About section without the use of any HTML
// code. There are two sections; a professional and personal section, both of
// which are biographies.

// For appending elements to the DOM
let main = document.querySelector("main");

// Initialize and append a header to the DOM
let sectionHeader = document.createElement("h1");
sectionHeader.textContent = "About Me";
main.append(sectionHeader);

// - - - - - Professional Section - - - - -
// Initialize a container for the professional biography. Set to match
// container class in CSS file.
let bioProfessional = document.createElement("section");
bioProfessional.setAttribute("class", "container");

// Create and source professional image to the DOM. Set to match img class in
// CSS file.
let professionalPhoto = document.createElement("img");
professionalPhoto.setAttribute("class", "img");

professionalPhoto.src = "../images/connor-work-photo.jpg";
professionalPhoto.alt = "Connor wearing professional clothes";
bioProfessional.append(professionalPhoto);

// Initialize a section to hold three paragraphs of the professional biography.
let introProfessional = document.createElement("section");

// Initialize first sentence of each paragraph
let introOneStart = document.createElement("span");
let introTwoStart = document.createElement("span");
let introThreeStart = document.createElement("span");
introOneStart.style.fontWeight = "bold";
introTwoStart.style.fontWeight = "bold";
introThreeStart.style.fontWeight = "bold";

introOneStart.textContent = "My name is James Connor Baron-Williams (he/him). ";
introTwoStart.textContent = "Throughout the last 16 years, ";
introThreeStart.textContent =
  "Building off these skills in self-leadership and contribution for the greater good, ";

// Initialize remaining spans for each paragraph
let introOneRemaining = document.createElement("span");
let introTwoRemaining = document.createElement("span");
let introThreeRemaining = document.createElement("span");

introOneRemaining.textContent =
  "Having started my journey in the realm of Computer Science through the field of Aviation, I am skilled in detail-oriented thinking, collaboration, and a careful dedication with everything I do. As an employee, co-worker, part-business owner, and current student, my strengths include an on-going curiosity about the sciences, enthusiasm for continued learning, and a commitment to working in tandem with the community for the purpose of a more equitable and accessible technological future.";
introTwoRemaining.textContent =
  "I have worked my way up from an intern doing survey data entry work to a co-owner of an urban planning consulting firm, specializing as a data analyst and GIS Technician, highlighting my ability to commit to projects and generate energy for taking it upon myself to be self-led. This has included learning different programs and cultivating new, more efficient ways for the company to conduct data field work and analysis.";
introThreeRemaining.textContent =
  "I am pursuing a career in Artificial Intelligence and Machine Learning, in which I hope to be part of the creation of new resources that will help support people and our planet.";

// Initialize each paragraph and set to match bio class in CSS file.
let introOne = document.createElement("p");
let introTwo = document.createElement("p");
let introThree = document.createElement("p");

introOne.setAttribute("class", "bio");
introTwo.setAttribute("class", "bio");
introThree.setAttribute("class", "bio");

// Append each span to each respective p element.
introOne.append(introOneStart);
introOne.append(introOneRemaining);
introTwo.append(introTwoStart);
introTwo.append(introTwoRemaining);
introThree.append(introThreeStart);
introThree.append(introThreeRemaining);

// Append each p element to the section that holds all paragraphs and then
// append it to the container holding the professional biography.
introProfessional.append(introOne);
introProfessional.append(introTwo);
introProfessional.append(introThree);

bioProfessional.append(introProfessional);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - - - - - Personal Section - - - - -
// Initialize a container for the personal biography. Set to match
// container class in CSS file.
let bioPersonal = document.createElement("section");
bioPersonal.setAttribute("class", "container");

// Intialize a section to hold the personal biography.
let introPersonal = document.createElement("section");

// Initialize a subheader to introduce this section.
let subheader = document.createElement("h2");
subheader.style.color = "var(--coral-pink)";
subheader.textContent = "A little more about me...";
introPersonal.append(subheader);

// Initialize first sentence of paragraph
let personalBioStart = document.createElement("span");
personalBioStart.style.fontWeight = "bold";

personalBioStart.textContent =
  "I am a graduate student at Portland State University (PSU). ";

// Initialize remaining paragraph
let personalBioRemaining = document.createElement("span");

personalBioRemaining.textContent =
  "This is my first term as a graduate student and I am currently enrolled in two classes, CS 463/563: Intro to Web Development and CS 584/684: Algorithm Design and Analysis. In my free time, I love to experience the outdoors with my wife and two dogs.";

// Initialize, combine, and append the spans to a p element.
let personalBioComplete = document.createElement("p");
personalBioComplete.setAttribute("class", "bio");

personalBioComplete.append(personalBioStart);
personalBioComplete.append(personalBioRemaining);

// Append the new p element to the container holding the personal biography.
introPersonal.append(personalBioComplete);
bioPersonal.append(introPersonal);

// Create, source, and append a personal image to the personal container. Set
// to match img class in CSS file.
let personalPhoto = document.createElement("img");
personalPhoto.setAttribute("class", "img");

personalPhoto.src = "../images/connor-and-dogs.png";
personalPhoto.alt = "Connor and his two dogs";
bioPersonal.append(personalPhoto);

bioPersonal.append(personalPhoto);
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Append both containers to the DOM
main.append(bioProfessional);
main.append(bioPersonal);
