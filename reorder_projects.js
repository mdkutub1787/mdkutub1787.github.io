const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find all project indices
let projects = [
    { name: 'Platform HRM', marker: '<!-- Platform HRM -->' },
    { name: 'Smart Track', marker: '<!-- Smart Track -->' },
    { name: 'PIIS', marker: '<!-- PIIS -->' },
    { name: 'School Management System', marker: '<!-- School Management System -->' },
    { name: 'Fflipy', marker: '<!-- Fflipy -->' },
    { name: 'Daily Finance', marker: '<!-- Daily Finance -->' },
    { name: 'Smart Shop (Clone)', marker: '<!-- Smart Shop (Clone) -->' },
    { name: 'GIMS (Insurance System)', marker: '<!-- GIMS (Insurance System) -->' },
];

for(let i=0; i<projects.length; i++) {
    projects[i].start = html.indexOf(projects[i].marker);
}

// Ensure all are found
let allFound = projects.every(p => p.start !== -1);
if (!allFound) {
    console.log('Some projects not found');
    process.exit(1);
}

// Sort by current index
projects.sort((a, b) => a.start - b.start);

// Extract chunks
for(let i=0; i<projects.length; i++) {
    let nextStart = (i === projects.length - 1) ? html.indexOf('<!-- Comprehensive Skills -->') : projects[i+1].start;
    // We want the closing tag of the section. The container of projects ends at </section>
    if (i === projects.length - 1) {
        nextStart = html.indexOf('</div>\n        </section>');
    }
    projects[i].content = html.substring(projects[i].start, nextStart);
}

// Current order in UI: HRM, Smart Track, PIIS, School, Fflipy, Daily Finance, Smart Shop, GIMS
// New requested order: HRM, Smart Track, Daily Finance, PIIS, School, ...

let pHRM = projects.find(p => p.name === 'Platform HRM').content;
let pST = projects.find(p => p.name === 'Smart Track').content;
let pDF = projects.find(p => p.name === 'Daily Finance').content;
let pPIIS = projects.find(p => p.name === 'PIIS').content;
let pSchool = projects.find(p => p.name === 'School Management System').content;
let pFflipy = projects.find(p => p.name === 'Fflipy').content;
let pSS = projects.find(p => p.name === 'Smart Shop (Clone)').content;
let pGIMS = projects.find(p => p.name === 'GIMS (Insurance System)').content;

let newContent = pHRM + pST + pDF + pPIIS + pSchool + pFflipy + pSS + pGIMS;

let before = html.substring(0, projects[0].start);
let after = html.substring(projects[projects.length - 1].start + projects[projects.length - 1].content.length);

fs.writeFileSync('index.html', before + newContent + after);
console.log('Success');
