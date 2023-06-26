import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FcFile } from 'react-icons/fc'
import { VscChromeClose } from 'react-icons/vsc'
import styled from 'styled-components'

import { useApplicationStore } from '~/state/useApplicationStore'
import themeDarkPlus from '~/themes/darkplus'

const TabBarContainer = styled.div`
	grid-area: tabs;
	background-color: ${themeDarkPlus.colours.tabBar.background};
	display: flex;
	flex-direction: row;
`

interface TabContainerProps {
	isActive: boolean;
}

const TabContainer = styled.div<TabContainerProps>`
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 2px;
	padding: 0 1em;
	background-color: ${props => themeDarkPlus.colours.tabBar[props.isActive ? 'activeTabBackground' : 'inactiveTabBackground']};
	color: ${props => themeDarkPlus.colours.tabBar[props.isActive ? 'activeTabText' : 'inactiveTabText']};
	cursor: pointer;
`

const TabText = styled.p``

const TabCloseWrapper = styled.span`
	height: 20px;
	aspect-ratio: 1 / 1;
	display: flex;
	align-items: center;
	justify-content: center;
	&:hover {
		background-color: ${themeDarkPlus.colours.tabBar.inactiveTabBackground};
	}
`

const TabBar = () => {

	const router = useRouter()

	const currentTab = useApplicationStore(state => state.currentTab)
	const tabs = useApplicationStore(state => state.tabs)
	const addTab = useApplicationStore(state => state.addTab)
	const removeTab = useApplicationStore(state => state.removeTab)

	useEffect(() => {
		addTab(router.asPath, true)
	}, [addTab, router.asPath])

	return (
		<TabBarContainer>
			{
				tabs.map(tab => {
					const tabName = tab.split('/').at(-1) || 'index'
					const isActive = tab === currentTab
					const fileExtension = tab.startsWith('/blog') ? 'md' : 'tsx'
					return <TabContainer
						key={tab}
						isActive={isActive}
						onClick={() => {
							if (isActive) return
							void router.push(`${tab}`)
						}}
					>
						<FcFile />
						<TabText>{tabName}.{fileExtension}</TabText>
						{
							isActive && <TabCloseWrapper onClick={() =>  {
								if (tab === '/' && !(tabs.length - 1)) return
								removeTab(tab)
								const newRoute = (tabs.find(t => t !== tab) ?? '/')
								void router.push(newRoute)
							}}>
								<VscChromeClose />
							</TabCloseWrapper>
						}
					</TabContainer>
				})
			}
		</TabBarContainer>
	)
}

export default TabBar