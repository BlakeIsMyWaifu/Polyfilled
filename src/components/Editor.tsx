import { useRouter } from 'next/router'
import { type ReactNode,useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import useWindowSize from '~/hooks/useWindowSize'
import { useApplicationStore } from '~/state/useApplicationStore'
import { useExplorerStore } from '~/state/useExplorerStore'

const EditorContainer = styled.div`
	height: 100%;
	/* 36px (tabs) + 24px (footer) */
	max-height: calc(100vh - 60px);
	background-color: ${props => props.theme.colours.editor.background};
	display: flex;
	flex-direction: row;
	overflow-y: auto;
	scroll-behavior: smooth;
`

const Article = styled.article`
	width: 100%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	color: ${props => props.theme.colours.text};
`

interface LineNumberContainer {
	articleHeight: number;
}

const LineNumberContainer = styled.pre<LineNumberContainer>`
	height: ${props => props.articleHeight}px;
	width: min-content;
	counter-reset: none;
	display: flex;
	flex-direction: column;
	padding-left: 8px;
`

const LineNumber = styled.span`
	min-height: 20px;
	color: ${props => props.theme.colours.editor.lineNumberText};
	text-align: right;
	counter-increment: line;
	&::before {
		content: counter(line);
	}
`

interface EditorProps {
	children?: ReactNode;
}

const Editor = ({ children }: EditorProps) => {

	const articleRef = useRef<HTMLElement>(null)
	const [articleHeight, setArticleHeight] = useState(0)

	const { asPath } = useRouter()

	const { height, width } = useWindowSize()

	useEffect(() => {
		if (!articleRef.current) return
		setArticleHeight(articleRef.current.scrollHeight)
	}, [articleRef, asPath, height, width])

	const setOutline = useExplorerStore(state => state.setOutline)

	useEffect(() => {
		if (!articleRef.current) return
		const headers = [...articleRef.current.childNodes].filter(node => node.nodeName.match(/^H[0-9]$/)) as HTMLHeadingElement[]
		const outline = headers.map<[string, string, number]>(header => [header.innerText, header.id, +header.nodeName[1]])
		setOutline(outline)
	}, [articleRef, asPath, setOutline])

	const isMobile = useApplicationStore(state => state.isMobile)

	return (
		<EditorContainer>
			{
				!isMobile && <LineNumberContainer articleHeight={articleHeight}>
					{
						Array.from({ length: ~~(articleHeight / 20) + (articleHeight > height ? 8 : 0) }).map((_, i) => {
							return <LineNumber key={i} />
						})
					}
				</LineNumberContainer>
			}

			<Article ref={articleRef}>
				{children}
			</Article>
		</EditorContainer>
	)
}

export default Editor