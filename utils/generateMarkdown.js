// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
${data.description}
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Badges](#badges)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact](#contact)
  
  
  ## Installation
${data.installation}
  
  ## Usage 
${data.usage}
  
  ## Credits
${data.credits}
  
  ## License
${data.license}
  
  ## Badges
${data.badges}
  
  ## Contributing
${data.contributing}
  
  ## Tests
${data.test}
  
## Contact
  ${data.githubProfile}
  ${data.email}
`;
}

module.exports = generateMarkdown;
