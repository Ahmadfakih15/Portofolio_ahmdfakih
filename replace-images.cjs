const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

const replacements = [
  { old: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop', new: '/images/profil-utama.jpg' },
  { old: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop', new: '/images/avatar-kecil.jpg' },
  { old: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', new: '/images/proyek1.jpg' },
  { old: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', new: '/images/proyek2.jpg' },
  { old: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', new: '/images/proyek3.jpg' },
  { old: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop', new: '/images/galeri1.jpg' },
  { old: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop', new: '/images/galeri2.jpg' },
  { old: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop', new: '/images/galeri3.jpg' },
  { old: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop', new: '/images/galeri4.jpg' }
];

replacements.forEach(r => {
  content = content.replace(r.old, r.new);
});

fs.writeFileSync('src/App.jsx', content);
