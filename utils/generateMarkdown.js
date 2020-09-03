// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
${data.description}
  
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
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
  
  
## Questions
  ${data.githubProfile}
  ${data.email}

`;
}

module.exports = generateMarkdown;
