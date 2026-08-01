const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target =             <div
              class="w-full md:w-1/3 bg-white flex items-center justify-center p-12 shrink-0 border-b md:border-b-0 md:border-r border-slate-700/50 relative overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gradient-to-br from-slate-100 to-white opacity-50"
              ></div>
              <img
                src="old_idb.png"
                alt="IsDB-BISEW Logo"
                class="w-full max-w-[180px] h-auto object-contain group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-500 relative z-10"
              />
            </div>;

const replacement =             <div
              class="w-full md:w-1/3 bg-white flex flex-col items-center justify-center p-8 shrink-0 border-b md:border-b-0 md:border-r border-slate-700/50 relative overflow-hidden group"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-slate-100 to-white opacity-50"></div>
              <img
                src="idb.png"
                alt="IsDB-BISEW Logo"
                class="w-full max-w-[120px] h-auto object-contain group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-500 relative z-10"
              />
              <div class="mt-4 text-center relative z-10 group-hover:scale-105 transition-all duration-500">
                <h4 class="text-[#0e8a38] font-extrabold text-[16px] leading-tight font-sans tracking-wide">IsDB-BISEW IT</h4>
                <h4 class="text-[#0e8a38] font-extrabold text-[16px] leading-tight font-sans tracking-wide">Scholarship Programme</h4>
              </div>
            </div>;

// Since there are formatting differences (like newlines in class attributes), doing a generic string replacement is fragile.
// Let's do it array based on exact lines
let lines = html.split('\n');
let replaced = false;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('src="old_idb.png"')) {
        // found it
        // The div starts roughly at i-7 and ends at i+4
        let start = i - 7;
        let end = i + 4;
        
        let before = lines.slice(0, start).join('\n');
        let after = lines.slice(end + 1).join('\n');
        fs.writeFileSync('index.html', before + '\n' + replacement + '\n' + after);
        replaced = true;
        break;
    }
}
if (!replaced) console.log("Failed");
else console.log("Success");
