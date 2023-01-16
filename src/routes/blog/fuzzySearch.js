
import uFuzzy from '@leeoniya/ufuzzy'

// https://github.com/leeoniya/uFuzzy#options
const u = new uFuzzy({ intraMode: 1 });

/**
 * @param {import('$lib/types').ContentItem[]} items
 * @param {string[]} selectedCategories
 * @param {string} search
 * @return {Object[]}
 */
export function fuzzySearch(items, selectedCategories, search) {
  const filteredItems = items.filter((item) => {
    if (selectedCategories?.length < 1) return true
    return selectedCategories
      .map((element) => {
        return element.toLowerCase();
      })
      .includes(item.category.toLowerCase());
  })
  if (search) {
    const haystack = filteredItems.map(v => [v.title, v.subtitle, v.tags, v.content, v.description].join(' '))
    const idxs = u.filter(haystack, search);
    const info = u.info(idxs, haystack, search);
    const order = u.sort(info, haystack, search);
    const mark = (part, matched) => matched ? '<b style="color:var(--brand-accent)">' + part + '</b>' : part;
    const list = order.map(i => {
      const x = filteredItems[info.idx[order[i]]]
      const hl = uFuzzy.highlight(
        haystack[info.idx[order[i]]]
          // sanitize html as we dont actually want to render it
          .replaceAll("<", " ")
          .replaceAll("/>", "  ")
          .replaceAll(">", " "),
        info.ranges[order[i]],
        mark
      )
        // highlight whats left
        .slice(Math.max(info.ranges[order[i]][0] - 200, 0), Math.min(info.ranges[order[i]][1] + 200, haystack[info.idx[order[i]]].length))
        // slice clean words
        .split(' ').slice(1, -1).join(' ')
      return { ...x, highlightedResults: hl }
    })
    return list
  } else {
    return filteredItems
  }
}