const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

let projectGridStart = html.indexOf('<!-- Projects Grid -->');
let skillsStart = html.indexOf('<!-- Comprehensive Skills -->');

if (projectGridStart !== -1 && skillsStart !== -1) {
    let beforeProjects = html.substring(0, projectGridStart);
    let afterProjects = html.substring(skillsStart);
    let projectsContent = html.substring(projectGridStart, skillsStart);

    let hrm = projectsContent.match(/<!-- Platform HRM -->[\s\S]*?(?=<!-- Smart Track -->)/)[0];
    let smartTrack = projectsContent.match(/<!-- Smart Track -->[\s\S]*?(?=<!-- PIIS -->)/)[0];
    let piis = projectsContent.match(/<!-- PIIS -->[\s\S]*?(?=<!-- School Management System -->)/)[0];
    let school = projectsContent.match(/<!-- School Management System -->[\s\S]*?(?=<!-- Fflipy -->)/)[0];
    let fflipy = projectsContent.match(/<!-- Fflipy -->[\s\S]*?(?=<!-- Daily Finance -->)/)[0];
    let dailyFinance = projectsContent.match(/<!-- Daily Finance -->[\s\S]*?(?=<!-- Smart Shop \(Clone\) -->)/)[0];
    
    let remainder = projectsContent.substring(projectsContent.indexOf('<!-- Smart Shop (Clone) -->'));

    let newProjectsContent = projectsContent.substring(0, projectsContent.indexOf('<!-- Platform HRM -->')) + 
        hrm + smartTrack + dailyFinance + piis + school + fflipy + remainder;

    fs.writeFileSync('index.html', beforeProjects + newProjectsContent + afterProjects);
    console.log('Success');
} else {
    console.log('Failed');
}
