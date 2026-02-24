const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'public', 'cms', 'index.html');
if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf-8');
    content = content.replace(/href="\/static/g, 'href="/cms/static');
    content = content.replace(/src="\/static/g, 'src="/cms/static');
    fs.writeFileSync(indexPath, content);
    console.log('Successfully patched CMS absolute asset paths.');
} else {
    console.error('Could not find public/cms/index.html to patch.');
    process.exit(1);
}
