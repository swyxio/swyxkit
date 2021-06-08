// import unified from 'unified'
// import {VFile} from 'vfile'
// import {reporter} from 'vfile-reporter'

import { resolve, basename } from 'path'
import { promises as fs } from 'fs'
import grayMatter from 'gray-matter'

// let _preset = {
// 	settings: {},
// 	plugins: [
// 		// require('remark-parse'),
// 		// require('remark-slug'),
// 		// [
// 		// 	require('remark-autolink-headings'),
// 		// 	{
// 		// 		behavior: 'wrap',
// 		// 		linkProperties: { class: 'highlightOnHover' }
// 		// 		// content: {
// 		// 		//   type: 'element',
// 		// 		//   tagName: 'span',
// 		// 		//   properties: { className: ['icon', 'icon-link'] },
// 		// 		//   children: [{ type: 'text', value: ' 🔗' }],
// 		// 		// },
// 		// 	}
// 		// ],
// 		// require('remark-toc'),
// 		// require('remark-sectionize'),
// 		// require('remark-rehype'),
// 		// require('rehype-format'),
// 		// [require('remark-frontmatter'), ['yaml']],
// 		// //   [require('./rehype-shiki'), { theme: 'material-theme-palenight' }],
// 		// require('rehype-stringify')
// 		// //   require('./remark-replace'),
// 	]
// };

export async function listBlogposts() {
	let content = [];
	for await (const _path of getFiles('content')) {
		const src = await fs.readFile(_path, 'utf8');
		const data = grayMatter(src)
		content.push({content: data.content, data: data.data, slug: data.data.slug ?? basename(_path, '.md')});
	}
	return content
}
export async function getBlogpost(slug) {
	const _path = resolve('content', slug + '.md')
	const src = await fs.readFile(_path, 'utf8');
	const data = grayMatter(src)
	return {content: data.content, data: data.data, slug: data.data.slug ?? basename(_path, '.md')}
}

async function* getFiles(dir) {
	const dirents = await fs.readdir(dir, { withFileTypes: true });
	for (const dirent of dirents) {
		const res = resolve(dir, dirent.name);
		if (dirent.isDirectory()) {
			yield* getFiles(res);
		} else {
			yield res;
		}
	}
}

// export async function parseMarkdown({ filePath, markdown }) {
// 	// const result = await remark().use(remarkHtml).process(markdown);
// 	var post_vfile = new VFile({ path: filePath, contents: markdown });
// 	const file = await unified()
// 		.use(_preset)
// 		.process(post_vfile)
// 		.catch((err) => {
// 			console.error(reporter(post_vfile));
// 			throw err;
// 		});
// 	file.extname = '.html';
// 	return file.toString();
// }
