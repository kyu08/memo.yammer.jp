import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import html from 'remark-html'
import footnotes from 'remark-footnotes'
import gfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import codeTitle from 'remark-code-titles'
import rehypeStringify from 'rehype-stringify'
import dockerfile from 'highlight.js/lib/languages/dockerfile'
import vim from 'highlight.js/lib/languages/vim'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(gfm)
    .use(footnotes)
    .use(codeTitle)
    .use(rehypeHighlight, { languages: { dockerfile, vim }, aliases: { bash: 'zsh' } })
    .use(html)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown)
  return result.toString()
}
