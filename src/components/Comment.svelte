<script>
	import formatDistance from 'date-fns/formatDistance/index.js';
	import snarkdown from 'snarkdown';
	import Reactions from './Reactions.svelte';
	/** @type {import('$lib/types').GHComment} */
	export let comment;
	const doc = new DOMParser().parseFromString(
		snarkdownEnhanced(comment.body.replace(/\r\n/g, '\n')), // https://github.com/developit/snarkdown/issues/69
		'text/html'
	);
	doc.normalize();
	_sanitize(doc.body);
	let body = doc.body.innerHTML;

	// https://github.com/developit/snarkdown/issues/11
	function snarkdownEnhanced(markdown) {
		return markdown
			.split(/(?:\r?\n){2,}/)
			.map((l) =>
				[' ', '\t', '#', '-', '*', '>'].some((char) => l.startsWith(char))
					? snarkdown(l)
					: `<p>${snarkdown(l)}</p>`
			)
			.join('\n');
	}

	// https://github.com/developit/snarkdown/issues/70
	function _sanitize(node) {
		if (node.nodeType === 3) return;
		if (node.nodeType !== 1 || /^(script|iframe|object|embed|svg)$/i.test(node.tagName)) {
			return node.remove();
		}
		for (let i = node.attributes.length; i--; ) {
			const name = node.attributes[i].name;
			if (!/^(class|id|name|href|src|alt|align|valign)$/i.test(name)) {
				node.attributes.removeNamedItem(name);
			}
		}
		for (let i = node.childNodes.length; i--; ) _sanitize(node.childNodes[i]);
	}
	// let html = null
	// async function getContents() {
	//   const snarkdown = await import('snarkdown')
	//   const res = await (await fetch(comment.url)).json()
	//   html = snarkdown.default(res.body);
	// }
</script>


<div
	class="mb-4 border-y-2 px-2 pt-4 dark:border-blue-700 sm:border-x sm:border-blue-200 sm:border-opacity-40 sm:px-4"
>
	<div class="flex flex-row md-10">
		<img 
			class="w-12 h-12 border-2 border-gray-300 rounded-full" 
			alt={`avatar of commenter ${comment.user.login}`}
			src={comment.user.avatar_url}
		/>
		<div class="flex-col mt-1">
			<div class="flex items-center flex-1 px-4 font-bold leading-tight" class:text-green-600={comment.author_association === 'OWNER'}>
				{comment.user.login}
				<span class="ml-2 text-xs font-normal text-gray-500">
					<a href={comment.html_url} class="no-underline" rel="external" target="_blank">
						<time>{formatDistance(new Date(comment.created_at), new Date())} ago</time>
					</a>
				</span>
			</div>
			<div class="flex-1 px-2 ml-2">
				{@html body}
				
			</div>
			<div class="flex-1 px-2 ml-2 mb-4">
				<Reactions issueUrl={comment.issue_url} reactions={comment.reactions} />
			</div>
		</div>
	</div>
</div>
