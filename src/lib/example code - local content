
import { resolve, basename } from 'path';
import { promises as fs } from 'fs';
// // use this if you want your content in a local '/content' folder rather than github issues
// export async function listBlogposts() {
// 	let content = [];
// 	for await (const _path of getFiles('content')) {
// 		const src = await fs.readFile(_path, 'utf8');
// 		const data = grayMatter(src);
// 		content.push({
// 			content: data.content,
// 			data: data.data,
// 			slug: data.data.slug ?? basename(_path, '.md')
// 		});
// 	}
// 	return content;
// }

export async function getBlogpost(slug) {
	const _path = resolve('content', slug + '.md');
	const src = await fs.readFile(_path, 'utf8');
	const data = grayMatter(src);
	// const content = await parseMarkdown({ filePath: _path, markdown: data.content })
	const content = (await compile(data.content, {})).code;
	return { content, data: data.data, slug: data.data.slug ?? basename(_path, '.md') };
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
