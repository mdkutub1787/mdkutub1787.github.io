const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');

let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<!-- Education History -->')) startIndex = i;
    if (lines[i].includes('<!-- Details & References Grid -->')) {
        endIndex = i;
        break;
    }
}

if (startIndex !== -1 && endIndex !== -1) {
    const replacement = \        <!-- Education & Training -->
        <section id="education" class="mb-32">
            <h2 class="text-3xl font-extrabold mb-10 tracking-tight text-center text-white">Education & Training</h2>
            <div class="max-w-4xl mx-auto space-y-6">
                <!-- Training -->
                <div class="premium-card p-8 flex flex-col md:flex-row gap-6 items-start hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.2)] transition-all duration-500 group" data-aos="fade-up">
                    <div class="w-16 h-16 bg-white rounded-2xl border border-slate-700 flex items-center justify-center shrink-0 overflow-hidden p-1.5 shadow-sm group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500">
                        <img src="idb.png" alt="IsDB-BISEW Logo" class="w-full h-full object-contain rounded-xl">
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1">Professional Diploma in Full Stack Java Development</h3>
                        <p class="text-accent font-bold text-sm mb-2 uppercase tracking-widest">IsDB-BISEW IT Scholarship Programme</p>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">1-year intensive training on enterprise web & mobile development. Core focus on Java Enterprise Editions (JEE), Spring Boot, Angular Framework, and REST Architectures.</p>
                        <span class="bg-transparent border border-slate-700 text-slate-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Jan 2024 – Nov 2024</span>
                    </div>
                </div>

                <!-- MSS -->
                <div class="premium-card p-8 flex flex-col md:flex-row gap-6 items-start hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_10px_30px_-10px_rgba(0,229,255,0.2)] transition-all duration-500 group" data-aos="fade-up" data-aos-delay="100">
                    <div class="w-16 h-16 bg-white rounded-2xl border border-slate-700 flex items-center justify-center shrink-0 overflow-hidden p-1.5 shadow-sm group-hover:border-accent/50 group-hover:scale-110 transition-all duration-500">
                        <img src="dc.png" alt="Dhaka College Logo" class="w-full h-full object-contain rounded-xl">
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-1">MSS & BSS in Economics</h3>
                        <p class="text-accent font-bold text-sm mb-2 uppercase tracking-widest">Dhaka College</p>
                        <p class="text-slate-400 text-sm leading-relaxed mb-4">Developed strong analytical and statistical skills, forming a solid foundation for complex problem-solving in software engineering and enterprise applications.</p>
                        <span class="bg-transparent border border-slate-700 text-slate-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Graduated: 2023</span>
                    </div>
                </div>
            </div>
        </section>
\;
    lines.splice(startIndex, endIndex - startIndex, replacement);
    fs.writeFileSync('index.html', lines.join('\n'));
    console.log('Success');
} else {
    console.log('Failed to find indices', startIndex, endIndex);
}
