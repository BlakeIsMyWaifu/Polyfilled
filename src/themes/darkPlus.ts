import { type Theme } from '~/types/theme'

const themeDarkPlus: Theme = {
	type: 'dark',
	colours: {
		activityBar: {
			background: '#333333',
			iconsActive: '#ffffff',
			iconsInactive: '#ffffff66'
		},
		sideBar: {
			background: '#252526',
			headerText: '#bbbbbb',
			accordion: {
				headerText: '#ffffff',
				contentText: '#ffffff',
				border: '#cccccc33'
			}
		},
		tabBar: {
			background: '#252526',
			activeTabBackground: '#1e1e1e',
			activeTabText: '#ffffff',
			inactiveTabBackground: '#2d2d2d',
			inactiveTabText: '#ffffff80'
		},
		editor: {
			background: '#1e1e1e',
			text: '#ffffff',
			lineNumberText: '#c6c6c6'
		},
		footer: {
			background: '#414339',
			hoverBackground: '#585a51',
			text: '#ffffff'
		}
	}
}

export default themeDarkPlus

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _themeDarkPlus = {
	'type': 'dark',
	'colours': {
		'activityBarBadge.background': '#007acc',
		'checkbox.border': '#6b6b6b',
		'editor.background': '#1e1e1e',
		'editor.foreground': '#d4d4d4',
		'editor.inactiveSelectionBackground': '#3a3d41',
		'editor.selectionHighlightBackground': '#add6ff26',
		'editorIndentGuide.activeBackground': '#707070',
		'editorIndentGuide.background': '#404040',
		'input.placeholderForeground': '#a6a6a6',
		'list.activeSelectionIconForeground': '#ffffff',
		'list.dropBackground': '#383b3d',
		'menu.background': '#252526',
		'menu.border': '#454545',
		'menu.foreground': '#cccccc',
		'menu.separatorBackground': '#454545',
		'ports.iconRunningProcessForeground': '#369432',
		'sideBarSectionHeader.background': '#00000000',
		'sideBarSectionHeader.border': '#cccccc33',
		'sideBarTitle.foreground': '#bbbbbb',
		'statusBarItem.remoteBackground': '#16825d',
		'statusBarItem.remoteForeground': '#ffffff',
		'tab.lastPinnedBorder': '#cccccc33',
		'terminal.inactiveSelectionBackground': '#3a3d41',
		'widget.border': '#303031',
		'activityBar.activeBorder': '#ffffff',
		'activityBar.background': '#333333',
		'activityBar.dropBorder': '#ffffff',
		'activityBar.foreground': '#ffffff',
		'activityBar.inactiveForeground': '#ffffff66',
		'activityBarBadge.foreground': '#ffffff',
		'badge.background': '#4d4d4d',
		'badge.foreground': '#ffffff',
		'banner.background': '#04395e',
		'banner.foreground': '#ffffff',
		'banner.iconForeground': '#3794ff',
		'bookmarks.lineBackground': '#00000000',
		'bookmarks.lineBorder': '#00000000',
		'bookmarks.overviewRuler': '#157efb88',
		'breadcrumb.activeSelectionForeground': '#e0e0e0',
		'breadcrumb.background': '#1e1e1e',
		'breadcrumb.focusForeground': '#e0e0e0',
		'breadcrumb.foreground': '#cccccccc',
		'breadcrumbPicker.background': '#252526',
		'button.background': '#0e639c',
		'button.foreground': '#ffffff',
		'button.hoverBackground': '#1177bb',
		'button.secondaryBackground': '#3a3d41',
		'button.secondaryForeground': '#ffffff',
		'button.secondaryHoverBackground': '#45494e',
		'button.separator': '#ffffff66',
		'charts.blue': '#3794ff',
		'charts.foreground': '#cccccc',
		'charts.green': '#89d185',
		'charts.lines': '#cccccc80',
		'charts.orange': '#d18616',
		'charts.purple': '#b180d7',
		'charts.red': '#f14c4c',
		'charts.yellow': '#cca700',
		'chat.requestBackground': '#ffffff08',
		'chat.requestBorder': '#ffffff1a',
		'checkbox.background': '#3c3c3c',
		'checkbox.foreground': '#f0f0f0',
		'checkbox.selectBackground': '#252526',
		'checkbox.selectBorder': '#c5c5c5',
		'commandCenter.activeBackground': '#ffffff14',
		'commandCenter.activeBorder': '#cccccc4d',
		'commandCenter.activeForeground': '#cccccc',
		'commandCenter.background': '#ffffff0d',
		'commandCenter.border': '#cccccc33',
		'commandCenter.foreground': '#cccccc',
		'commandCenter.inactiveBorder': '#cccccc26',
		'commandCenter.inactiveForeground': '#cccccc99',
		'commentsView.resolvedIcon': '#cccccc80',
		'commentsView.unresolvedIcon': '#007fd4',
		'consoleninja.logTime': '#6a9955',
		'debugConsole.errorForeground': '#f48771',
		'debugConsole.infoForeground': '#3794ff',
		'debugConsole.sourceForeground': '#cccccc',
		'debugConsole.warningForeground': '#cca700',
		'debugConsoleInputIcon.foreground': '#cccccc',
		'debugExceptionWidget.background': '#420b0d',
		'debugExceptionWidget.border': '#a31515',
		'debugIcon.breakpointCurrentStackframeForeground': '#ffcc00',
		'debugIcon.breakpointDisabledForeground': '#848484',
		'debugIcon.breakpointForeground': '#e51400',
		'debugIcon.breakpointStackframeForeground': '#89d185',
		'debugIcon.breakpointUnverifiedForeground': '#848484',
		'debugIcon.continueForeground': '#75beff',
		'debugIcon.disconnectForeground': '#f48771',
		'debugIcon.pauseForeground': '#75beff',
		'debugIcon.restartForeground': '#89d185',
		'debugIcon.startForeground': '#89d185',
		'debugIcon.stepBackForeground': '#75beff',
		'debugIcon.stepIntoForeground': '#75beff',
		'debugIcon.stepOutForeground': '#75beff',
		'debugIcon.stepOverForeground': '#75beff',
		'debugIcon.stopForeground': '#f48771',
		'debugTokenExpression.boolean': '#4e94ce',
		'debugTokenExpression.error': '#f48771',
		'debugTokenExpression.name': '#c586c0',
		'debugTokenExpression.number': '#b5cea8',
		'debugTokenExpression.string': '#ce9178',
		'debugTokenExpression.value': '#cccccc99',
		'debugToolBar.background': '#333333',
		'debugView.exceptionLabelBackground': '#6c2022',
		'debugView.exceptionLabelForeground': '#cccccc',
		'debugView.stateLabelBackground': '#88888844',
		'debugView.stateLabelForeground': '#cccccc',
		'debugView.valueChangedHighlight': '#569cd6',
		'descriptionForeground': '#ccccccb3',
		'diffEditor.diagonalFill': '#cccccc33',
		'diffEditor.insertedLineBackground': '#9bb95533',
		'diffEditor.insertedTextBackground': '#9ccc2c33',
		'diffEditor.removedLineBackground': '#ff000033',
		'diffEditor.removedTextBackground': '#ff000033',
		'diffEditor.unchangedRegionBackground': '#000000',
		'disabledForeground': '#cccccc80',
		'dropdown.background': '#3c3c3c',
		'dropdown.border': '#3c3c3c',
		'dropdown.foreground': '#f0f0f0',
		'editor.findMatchBackground': '#515c6a',
		'editor.findMatchHighlightBackground': '#ea5c0055',
		'editor.findRangeHighlightBackground': '#3a3d4166',
		'editor.focusedStackFrameHighlightBackground': '#7abd7a4d',
		'editor.foldBackground': '#264f784d',
		'editor.hoverHighlightBackground': '#264f7840',
		'editor.inlineValuesBackground': '#ffc80033',
		'editor.inlineValuesForeground': '#ffffff80',
		'editor.lineHighlightBorder': '#282828',
		'editor.linkedEditingBackground': '#ff00004d',
		'editor.rangeHighlightBackground': '#ffffff0b',
		'editor.selectionBackground': '#264f78',
		'editor.snippetFinalTabstopHighlightBorder': '#525252',
		'editor.snippetTabstopHighlightBackground': '#7c7c7c4d',
		'editor.stackFrameHighlightBackground': '#ffff0033',
		'editor.symbolHighlightBackground': '#ea5c0055',
		'editor.wordHighlightBackground': '#575757b8',
		'editor.wordHighlightStrongBackground': '#004972b8',
		'editor.wordHighlightTextBackground': '#575757b8',
		'editorActiveLineNumber.foreground': '#c6c6c6',
		'editorBracketHighlight.foreground1': '#ffd700',
		'editorBracketHighlight.foreground2': '#da70d6',
		'editorBracketHighlight.foreground3': '#179fff',
		'editorBracketHighlight.foreground4': '#00000000',
		'editorBracketHighlight.foreground5': '#00000000',
		'editorBracketHighlight.foreground6': '#00000000',
		'editorBracketHighlight.unexpectedBracket.foreground': '#ff1212cc',
		'editorBracketMatch.background': '#0064001a',
		'editorBracketMatch.border': '#888888',
		'editorBracketPairGuide.activeBackground1': '#00000000',
		'editorBracketPairGuide.activeBackground2': '#00000000',
		'editorBracketPairGuide.activeBackground3': '#00000000',
		'editorBracketPairGuide.activeBackground4': '#00000000',
		'editorBracketPairGuide.activeBackground5': '#00000000',
		'editorBracketPairGuide.activeBackground6': '#00000000',
		'editorBracketPairGuide.background1': '#00000000',
		'editorBracketPairGuide.background2': '#00000000',
		'editorBracketPairGuide.background3': '#00000000',
		'editorBracketPairGuide.background4': '#00000000',
		'editorBracketPairGuide.background5': '#00000000',
		'editorBracketPairGuide.background6': '#00000000',
		'editorCodeLens.foreground': '#999999',
		'editorCommentsWidget.rangeActiveBackground': '#007fd41a',
		'editorCommentsWidget.rangeActiveBorder': '#007fd466',
		'editorCommentsWidget.rangeBackground': '#007fd41a',
		'editorCommentsWidget.rangeBorder': '#007fd466',
		'editorCommentsWidget.resolvedBorder': '#cccccc80',
		'editorCommentsWidget.unresolvedBorder': '#007fd4',
		'editorCursor.foreground': '#aeafad',
		'editorError.foreground': '#f14c4c',
		'editorGhostText.foreground': '#ffffff56',
		'editorGroup.border': '#444444',
		'editorGroup.dropBackground': '#53595d80',
		'editorGroup.dropIntoPromptBackground': '#252526',
		'editorGroup.dropIntoPromptForeground': '#cccccc',
		'editorGroupHeader.noTabsBackground': '#1e1e1e',
		'editorGroupHeader.tabsBackground': '#252526',
		'editorGutter.addedBackground': '#487e02',
		'editorGutter.background': '#1e1e1e',
		'editorGutter.commentGlyphForeground': '#d4d4d4',
		'editorGutter.commentRangeForeground': '#37373d',
		'editorGutter.commentUnresolvedGlyphForeground': '#d4d4d4',
		'editorGutter.deletedBackground': '#f14c4c',
		'editorGutter.foldingControlForeground': '#c5c5c5',
		'editorGutter.modifiedBackground': '#1b81a8',
		'editorHint.foreground': '#eeeeeeb3',
		'editorHoverWidget.background': '#252526',
		'editorHoverWidget.border': '#454545',
		'editorHoverWidget.foreground': '#cccccc',
		'editorHoverWidget.highlightForeground': '#2aaaff',
		'editorHoverWidget.statusBarBackground': '#2c2c2d',
		'editorInfo.foreground': '#3794ff',
		'editorInlayHint.background': '#4d4d4dcc',
		'editorInlayHint.foreground': '#ffffff',
		'editorInlayHint.parameterBackground': '#4d4d4dcc',
		'editorInlayHint.parameterForeground': '#ffffff',
		'editorInlayHint.typeBackground': '#4d4d4dcc',
		'editorInlayHint.typeForeground': '#ffffff',
		'editorLightBulb.foreground': '#ffcc00',
		'editorLightBulbAutoFix.foreground': '#75beff',
		'editorLineNumber.activeForeground': '#c6c6c6',
		'editorLineNumber.foreground': '#858585',
		'editorLink.activeForeground': '#4e94ce',
		'editorMarkerNavigation.background': '#1e1e1e',
		'editorMarkerNavigationError.background': '#f14c4c',
		'editorMarkerNavigationError.headerBackground': '#f14c4c1a',
		'editorMarkerNavigationInfo.background': '#3794ff',
		'editorMarkerNavigationInfo.headerBackground': '#3794ff1a',
		'editorMarkerNavigationWarning.background': '#cca700',
		'editorMarkerNavigationWarning.headerBackground': '#cca7001a',
		'editorOverviewRuler.addedForeground': '#487e0299',
		'editorOverviewRuler.border': '#7f7f7f4d',
		'editorOverviewRuler.bracketMatchForeground': '#a0a0a0',
		'editorOverviewRuler.commentForeground': '#37373d',
		'editorOverviewRuler.commentUnresolvedForeground': '#37373d',
		'editorOverviewRuler.commonContentForeground': '#60606066',
		'editorOverviewRuler.currentContentForeground': '#40c8ae80',
		'editorOverviewRuler.deletedForeground': '#f14c4c99',
		'editorOverviewRuler.errorForeground': '#ff1212b3',
		'editorOverviewRuler.findMatchForeground': '#d186167e',
		'editorOverviewRuler.incomingContentForeground': '#40a6ff80',
		'editorOverviewRuler.infoForeground': '#3794ff',
		'editorOverviewRuler.modifiedForeground': '#1b81a899',
		'editorOverviewRuler.rangeHighlightForeground': '#007acc99',
		'editorOverviewRuler.selectionHighlightForeground': '#a0a0a0cc',
		'editorOverviewRuler.warningForeground': '#cca700',
		'editorOverviewRuler.wordHighlightForeground': '#a0a0a0cc',
		'editorOverviewRuler.wordHighlightStrongForeground': '#c0a0c0cc',
		'editorOverviewRuler.wordHighlightTextForeground': '#a0a0a0cc',
		'editorPane.background': '#1e1e1e',
		'editorRuler.foreground': '#5a5a5a',
		'editorStickyScroll.background': '#1e1e1e',
		'editorStickyScrollHover.background': '#2a2d2e',
		'editorSuggestWidget.background': '#252526',
		'editorSuggestWidget.border': '#454545',
		'editorSuggestWidget.focusHighlightForeground': '#2aaaff',
		'editorSuggestWidget.foreground': '#d4d4d4',
		'editorSuggestWidget.highlightForeground': '#2aaaff',
		'editorSuggestWidget.selectedBackground': '#04395e',
		'editorSuggestWidget.selectedForeground': '#ffffff',
		'editorSuggestWidget.selectedIconForeground': '#ffffff',
		'editorSuggestWidgetStatus.foreground': '#d4d4d480',
		'editorUnicodeHighlight.background': '#bd9b0326',
		'editorUnicodeHighlight.border': '#bd9b03',
		'editorUnnecessaryCode.opacity': '#000000aa',
		'editorWarning.foreground': '#cca700',
		'editorWhitespace.foreground': '#e3e4e229',
		'editorWidget.background': '#252526',
		'editorWidget.border': '#454545',
		'editorWidget.foreground': '#cccccc',
		'errorForeground': '#f48771',
		'errorLens.errorBackground': '#e454541b',
		'errorLens.errorBackgroundLight': '#e4545420',
		'errorLens.errorForeground': '#ff6464',
		'errorLens.errorForegroundLight': '#e45454',
		'errorLens.errorMessageBackground': '#e4545419',
		'errorLens.hintBackground': '#17a2a220',
		'errorLens.hintBackgroundLight': '#17a2a220',
		'errorLens.hintForeground': '#2faf64',
		'errorLens.hintForegroundLight': '#2faf64',
		'errorLens.hintMessageBackground': '#17a2a219',
		'errorLens.infoBackground': '#00b7e420',
		'errorLens.infoBackgroundLight': '#00b7e420',
		'errorLens.infoForeground': '#00b7e4',
		'errorLens.infoForegroundLight': '#00b7e4',
		'errorLens.infoMessageBackground': '#00b7e419',
		'errorLens.statusBarErrorForeground': '#ff6464',
		'errorLens.statusBarHintForeground': '#2faf64',
		'errorLens.statusBarIconErrorForeground': '#ff6464',
		'errorLens.statusBarIconWarningForeground': '#fa973a',
		'errorLens.statusBarInfoForeground': '#00b7e4',
		'errorLens.statusBarWarningForeground': '#fa973a',
		'errorLens.warningBackground': '#ff942f1b',
		'errorLens.warningBackgroundLight': '#ff942f20',
		'errorLens.warningForeground': '#fa973a',
		'errorLens.warningForegroundLight': '#ff942f',
		'errorLens.warningMessageBackground': '#ff942f19',
		'extensionBadge.remoteBackground': '#007acc',
		'extensionBadge.remoteForeground': '#ffffff',
		'extensionButton.background': '#0e639c',
		'extensionButton.foreground': '#ffffff',
		'extensionButton.hoverBackground': '#1177bb',
		'extensionButton.prominentBackground': '#0e639c',
		'extensionButton.prominentForeground': '#ffffff',
		'extensionButton.prominentHoverBackground': '#1177bb',
		'extensionButton.separator': '#ffffff66',
		'extensionIcon.preReleaseForeground': '#1d9271',
		'extensionIcon.sponsorForeground': '#d758b3',
		'extensionIcon.starForeground': '#ff8e00',
		'extensionIcon.verifiedForeground': '#3794ff',
		'focusBorder': '#007fd4',
		'foreground': '#cccccc',
		'gitDecoration.addedResourceForeground': '#81b88b',
		'gitDecoration.conflictingResourceForeground': '#e4676b',
		'gitDecoration.deletedResourceForeground': '#c74e39',
		'gitDecoration.ignoredResourceForeground': '#8c8c8c',
		'gitDecoration.modifiedResourceForeground': '#e2c08d',
		'gitDecoration.renamedResourceForeground': '#73c991',
		'gitDecoration.stageDeletedResourceForeground': '#c74e39',
		'gitDecoration.stageModifiedResourceForeground': '#e2c08d',
		'gitDecoration.submoduleResourceForeground': '#8db9e2',
		'gitDecoration.untrackedResourceForeground': '#73c991',
		'gitlens.closedAutolinkedIssueIconColor': '#a371f7',
		'gitlens.closedPullRequestIconColor': '#f85149',
		'gitlens.decorations.addedForegroundColor': '#81b88b',
		'gitlens.decorations.branchAheadForegroundColor': '#35b15e',
		'gitlens.decorations.branchBehindForegroundColor': '#b15e35',
		'gitlens.decorations.branchDivergedForegroundColor': '#d8af1b',
		'gitlens.decorations.branchMissingUpstreamForegroundColor': '#c74e39',
		'gitlens.decorations.branchUnpublishedForegroundColor': '#35b15e',
		'gitlens.decorations.copiedForegroundColor': '#73c991',
		'gitlens.decorations.deletedForegroundColor': '#c74e39',
		'gitlens.decorations.ignoredForegroundColor': '#8c8c8c',
		'gitlens.decorations.modifiedForegroundColor': '#e2c08d',
		'gitlens.decorations.renamedForegroundColor': '#73c991',
		'gitlens.decorations.untrackedForegroundColor': '#73c991',
		'gitlens.decorations.workspaceRepoMissingForegroundColor': '#909090',
		'gitlens.decorations.workspaceRepoOpenForegroundColor': '#35b15e',
		'gitlens.decorations.worktreeView.hasUncommittedChangesForegroundColor': '#e2c08d',
		'gitlens.graphChangesColumnAddedColor': '#347d39',
		'gitlens.graphChangesColumnDeletedColor': '#c93c37',
		'gitlens.graphLane10Color': '#2ece9d',
		'gitlens.graphLane1Color': '#15a0bf',
		'gitlens.graphLane2Color': '#0669f7',
		'gitlens.graphLane3Color': '#8e00c2',
		'gitlens.graphLane4Color': '#c517b6',
		'gitlens.graphLane5Color': '#d90171',
		'gitlens.graphLane6Color': '#cd0101',
		'gitlens.graphLane7Color': '#f25d2e',
		'gitlens.graphLane8Color': '#f2ca33',
		'gitlens.graphLane9Color': '#7bd938',
		'gitlens.graphMinimapMarkerHeadColor': '#05e617',
		'gitlens.graphMinimapMarkerHighlightsColor': '#fbff0a',
		'gitlens.graphMinimapMarkerLocalBranchesColor': '#3087cf',
		'gitlens.graphMinimapMarkerRemoteBranchesColor': '#2b5e88',
		'gitlens.graphMinimapMarkerStashesColor': '#b34db3',
		'gitlens.graphMinimapMarkerTagsColor': '#6b562e',
		'gitlens.graphMinimapMarkerUpstreamColor': '#09ae17',
		'gitlens.graphScrollMarkerHeadColor': '#05e617',
		'gitlens.graphScrollMarkerHighlightsColor': '#fbff0a',
		'gitlens.graphScrollMarkerLocalBranchesColor': '#3087cf',
		'gitlens.graphScrollMarkerRemoteBranchesColor': '#2b5e88',
		'gitlens.graphScrollMarkerStashesColor': '#b34db3',
		'gitlens.graphScrollMarkerTagsColor': '#6b562e',
		'gitlens.graphScrollMarkerUpstreamColor': '#09ae17',
		'gitlens.gutterBackgroundColor': '#ffffff13',
		'gitlens.gutterForegroundColor': '#bebebe',
		'gitlens.gutterUncommittedForegroundColor': '#00bcf299',
		'gitlens.lineHighlightBackgroundColor': '#00bcf233',
		'gitlens.lineHighlightOverviewRulerColor': '#00bcf299',
		'gitlens.mergedPullRequestIconColor': '#a371f7',
		'gitlens.openAutolinkedIssueIconColor': '#3fb950',
		'gitlens.openPullRequestIconColor': '#3fb950',
		'gitlens.trailingLineBackgroundColor': '#00000000',
		'gitlens.trailingLineForegroundColor': '#99999959',
		'gitlens.unpublishedChangesIconColor': '#35b15e',
		'gitlens.unpublishedCommitIconColor': '#35b15e',
		'gitlens.unpulledChangesIconColor': '#b15e35',
		'icon.foreground': '#c5c5c5',
		'input.background': '#3c3c3c',
		'input.foreground': '#cccccc',
		'inputOption.activeBackground': '#007fd466',
		'inputOption.activeBorder': '#007acc',
		'inputOption.activeForeground': '#ffffff',
		'inputOption.hoverBackground': '#5a5d5e80',
		'inputValidation.errorBackground': '#5a1d1d',
		'inputValidation.errorBorder': '#be1100',
		'inputValidation.infoBackground': '#063b49',
		'inputValidation.infoBorder': '#007acc',
		'inputValidation.warningBackground': '#352a05',
		'inputValidation.warningBorder': '#b89500',
		'interactive.activeCodeBorder': '#3794ff',
		'interactive.inactiveCodeBorder': '#37373d',
		'interactiveEditor.border': '#454545',
		'interactiveEditor.regionHighlight': '#264f7840',
		'interactiveEditor.shadow': '#0000005c',
		'interactiveEditorDiff.inserted': '#9ccc2c1a',
		'interactiveEditorDiff.removed': '#ff00001a',
		'interactiveEditorInput.background': '#3c3c3c',
		'interactiveEditorInput.border': '#454545',
		'interactiveEditorInput.focusBorder': '#007fd4',
		'interactiveEditorInput.placeholderForeground': '#a6a6a6',
		'issues.closed': '#cb2431',
		'issues.newIssueDecoration': '#ffffff48',
		'issues.open': '#3fb950',
		'keybindingLabel.background': '#8080802b',
		'keybindingLabel.border': '#33333399',
		'keybindingLabel.bottomBorder': '#44444499',
		'keybindingLabel.foreground': '#cccccc',
		'keybindingTable.headerBackground': '#cccccc0a',
		'keybindingTable.rowsBackground': '#cccccc0a',
		'list.activeSelectionBackground': '#04395e',
		'list.activeSelectionForeground': '#ffffff',
		'list.deemphasizedForeground': '#8c8c8c',
		'list.errorForeground': '#f88070',
		'list.filterMatchBackground': '#ea5c0055',
		'list.focusHighlightForeground': '#2aaaff',
		'list.focusOutline': '#007fd4',
		'list.highlightForeground': '#2aaaff',
		'list.hoverBackground': '#2a2d2e',
		'list.inactiveSelectionBackground': '#37373d',
		'list.invalidItemForeground': '#b89500',
		'list.warningForeground': '#cca700',
		'listFilterWidget.background': '#252526',
		'listFilterWidget.noMatchesOutline': '#be1100',
		'listFilterWidget.outline': '#00000000',
		'listFilterWidget.shadow': '#0000005c',
		'menu.selectionBackground': '#04395e',
		'menu.selectionForeground': '#ffffff',
		'menubar.selectionBackground': '#5a5d5e50',
		'menubar.selectionForeground': '#cccccc',
		'merge.commonContentBackground': '#60606029',
		'merge.commonHeaderBackground': '#60606066',
		'merge.currentContentBackground': '#40c8ae33',
		'merge.currentHeaderBackground': '#40c8ae80',
		'merge.incomingContentBackground': '#40a6ff33',
		'merge.incomingHeaderBackground': '#40a6ff80',
		'mergeEditor.change.background': '#9bb95533',
		'mergeEditor.change.word.background': '#9ccc2c33',
		'mergeEditor.changeBase.background': '#4b1818',
		'mergeEditor.changeBase.word.background': '#6f1313',
		'mergeEditor.conflict.handled.minimapOverViewRuler': '#adaca8ee',
		'mergeEditor.conflict.handledFocused.border': '#c1c1c1cc',
		'mergeEditor.conflict.handledUnfocused.border': '#86868649',
		'mergeEditor.conflict.input1.background': '#40c8ae33',
		'mergeEditor.conflict.input2.background': '#40a6ff33',
		'mergeEditor.conflict.unhandled.minimapOverViewRuler': '#fcba03',
		'mergeEditor.conflict.unhandledFocused.border': '#ffa600',
		'mergeEditor.conflict.unhandledUnfocused.border': '#ffa6007a',
		'mergeEditor.conflictingLines.background': '#ffea0047',
		'minimap.errorHighlight': '#ff1212b3',
		'minimap.findMatchHighlight': '#d18616',
		'minimap.foregroundOpacity': '#000000',
		'minimap.selectionHighlight': '#264f78',
		'minimap.selectionOccurrenceHighlight': '#676767',
		'minimap.warningHighlight': '#cca700',
		'minimapGutter.addedBackground': '#487e02',
		'minimapGutter.deletedBackground': '#f14c4c',
		'minimapGutter.modifiedBackground': '#1b81a8',
		'minimapSlider.activeBackground': '#bfbfbf33',
		'minimapSlider.background': '#79797933',
		'minimapSlider.hoverBackground': '#64646459',
		'notebook.cellBorderColor': '#37373d',
		'notebook.cellEditorBackground': '#252526',
		'notebook.cellInsertionIndicator': '#007fd4',
		'notebook.cellStatusBarItemHoverBackground': '#ffffff26',
		'notebook.cellToolbarSeparator': '#80808059',
		'notebook.editorBackground': '#1e1e1e',
		'notebook.focusedCellBorder': '#007fd4',
		'notebook.focusedEditorBorder': '#007fd4',
		'notebook.inactiveFocusedCellBorder': '#37373d',
		'notebook.selectedCellBackground': '#37373d',
		'notebook.selectedCellBorder': '#37373d',
		'notebook.symbolHighlightBackground': '#ffffff0b',
		'notebookEditorOverviewRuler.runningCellForeground': '#89d185',
		'notebookScrollbarSlider.activeBackground': '#bfbfbf66',
		'notebookScrollbarSlider.background': '#79797966',
		'notebookScrollbarSlider.hoverBackground': '#646464b3',
		'notebookStatusErrorIcon.foreground': '#f48771',
		'notebookStatusRunningIcon.foreground': '#cccccc',
		'notebookStatusSuccessIcon.foreground': '#89d185',
		'notificationCenter.border': '#303031',
		'notificationCenterHeader.background': '#303031',
		'notificationLink.foreground': '#3794ff',
		'notificationToast.border': '#303031',
		'notifications.background': '#252526',
		'notifications.border': '#303031',
		'notifications.foreground': '#cccccc',
		'notificationsErrorIcon.foreground': '#f14c4c',
		'notificationsInfoIcon.foreground': '#3794ff',
		'notificationsWarningIcon.foreground': '#cca700',
		'panel.background': '#1e1e1e',
		'panel.border': '#80808059',
		'panel.dropBorder': '#e7e7e7',
		'panelSection.border': '#80808059',
		'panelSection.dropBackground': '#53595d80',
		'panelSectionHeader.background': '#80808033',
		'panelTitle.activeBorder': '#e7e7e7',
		'panelTitle.activeForeground': '#e7e7e7',
		'panelTitle.inactiveForeground': '#e7e7e799',
		'peekView.border': '#3794ff',
		'peekViewEditor.background': '#001f33',
		'peekViewEditor.matchHighlightBackground': '#ff8f0099',
		'peekViewEditorGutter.background': '#001f33',
		'peekViewEditorStickyScroll.background': '#001f33',
		'peekViewResult.background': '#252526',
		'peekViewResult.fileForeground': '#ffffff',
		'peekViewResult.lineForeground': '#bbbbbb',
		'peekViewResult.matchHighlightBackground': '#ea5c004d',
		'peekViewResult.selectionBackground': '#3399ff33',
		'peekViewResult.selectionForeground': '#ffffff',
		'peekViewTitle.background': '#252526',
		'peekViewTitleDescription.foreground': '#ccccccb3',
		'peekViewTitleLabel.foreground': '#ffffff',
		'pickerGroup.border': '#3f3f46',
		'pickerGroup.foreground': '#3794ff',
		'problemsErrorIcon.foreground': '#f14c4c',
		'problemsInfoIcon.foreground': '#3794ff',
		'problemsWarningIcon.foreground': '#cca700',
		'profileBadge.background': '#4d4d4d',
		'profileBadge.foreground': '#ffffff',
		'progressBar.background': '#0e70c0',
		'pullRequests.closed': '#cb2431',
		'pullRequests.draft': '#6e7681',
		'pullRequests.merged': '#8957e5',
		'pullRequests.notification': '#3794ff',
		'pullRequests.open': '#3fb950',
		'quickInput.background': '#252526',
		'quickInput.foreground': '#cccccc',
		'quickInputList.focusBackground': '#04395e',
		'quickInputList.focusForeground': '#ffffff',
		'quickInputList.focusIconForeground': '#ffffff',
		'quickInputTitle.background': '#ffffff1b',
		'remoteHub.decorations.addedForegroundColor': '#81b88b',
		'remoteHub.decorations.conflictForegroundColor': '#e4676b',
		'remoteHub.decorations.deletedForegroundColor': '#c74e39',
		'remoteHub.decorations.ignoredResourceForeground': '#8c8c8c',
		'remoteHub.decorations.incomingAddedForegroundColor': '#81b88b',
		'remoteHub.decorations.incomingDeletedForegroundColor': '#c74e39',
		'remoteHub.decorations.incomingModifiedForegroundColor': '#e2c08d',
		'remoteHub.decorations.incomingRenamedForegroundColor': '#73c991',
		'remoteHub.decorations.modifiedForegroundColor': '#e2c08d',
		'remoteHub.decorations.possibleConflictForegroundColor': '#cca700',
		'remoteHub.decorations.submoduleForegroundColor': '#8db9e2',
		'remoteHub.decorations.workspaceRepositoriesView.hasUncommittedChangesForegroundColor': '#e2c08d',
		'sash.hoverBorder': '#007fd4',
		'scm.providerBorder': '#454545',
		'scrollbar.shadow': '#000000',
		'scrollbarSlider.activeBackground': '#bfbfbf66',
		'scrollbarSlider.background': '#79797966',
		'scrollbarSlider.hoverBackground': '#646464b3',
		'search.resultsInfoForeground': '#cccccca6',
		'searchEditor.findMatchBackground': '#ea5c0038',
		'settings.checkboxBackground': '#3c3c3c',
		'settings.checkboxBorder': '#6b6b6b',
		'settings.checkboxForeground': '#f0f0f0',
		'settings.dropdownBackground': '#3c3c3c',
		'settings.dropdownBorder': '#3c3c3c',
		'settings.dropdownForeground': '#f0f0f0',
		'settings.dropdownListBorder': '#454545',
		'settings.focusedRowBackground': '#2a2d2e99',
		'settings.focusedRowBorder': '#007fd4',
		'settings.headerBorder': '#80808059',
		'settings.headerForeground': '#e7e7e7',
		'settings.modifiedItemIndicator': '#0c7d9d',
		'settings.numberInputBackground': '#3c3c3c',
		'settings.numberInputForeground': '#cccccc',
		'settings.rowHoverBackground': '#2a2d2e4d',
		'settings.sashBorder': '#80808059',
		'settings.settingsHeaderHoverForeground': '#e7e7e7b3',
		'settings.textInputBackground': '#3c3c3c',
		'settings.textInputForeground': '#cccccc',
		'sideBar.background': '#252526',
		'sideBar.dropBackground': '#53595d80',
		'sideBySideEditor.horizontalBorder': '#444444',
		'sideBySideEditor.verticalBorder': '#444444',
		'statusBar.background': '#007acc',
		'statusBar.debuggingBackground': '#cc6633',
		'statusBar.debuggingForeground': '#ffffff',
		'statusBar.focusBorder': '#ffffff',
		'statusBar.foreground': '#ffffff',
		'statusBar.noFolderBackground': '#68217a',
		'statusBar.noFolderForeground': '#ffffff',
		'statusBar.offlineBackground': '#6c1717',
		'statusBar.offlineForeground': '#ffffff',
		'statusBarItem.activeBackground': '#ffffff2e',
		'statusBarItem.compactHoverBackground': '#ffffff33',
		'statusBarItem.errorBackground': '#c72e0f',
		'statusBarItem.errorForeground': '#ffffff',
		'statusBarItem.focusBorder': '#ffffff',
		'statusBarItem.hoverBackground': '#ffffff1f',
		'statusBarItem.prominentBackground': '#00000080',
		'statusBarItem.prominentForeground': '#ffffff',
		'statusBarItem.prominentHoverBackground': '#0000004d',
		'statusBarItem.warningBackground': '#7a6400',
		'statusBarItem.warningForeground': '#ffffff',
		'symbolIcon.arrayForeground': '#cccccc',
		'symbolIcon.booleanForeground': '#cccccc',
		'symbolIcon.classForeground': '#ee9d28',
		'symbolIcon.colorForeground': '#cccccc',
		'symbolIcon.constantForeground': '#cccccc',
		'symbolIcon.constructorForeground': '#b180d7',
		'symbolIcon.enumeratorForeground': '#ee9d28',
		'symbolIcon.enumeratorMemberForeground': '#75beff',
		'symbolIcon.eventForeground': '#ee9d28',
		'symbolIcon.fieldForeground': '#75beff',
		'symbolIcon.fileForeground': '#cccccc',
		'symbolIcon.folderForeground': '#cccccc',
		'symbolIcon.functionForeground': '#b180d7',
		'symbolIcon.interfaceForeground': '#75beff',
		'symbolIcon.keyForeground': '#cccccc',
		'symbolIcon.keywordForeground': '#cccccc',
		'symbolIcon.methodForeground': '#b180d7',
		'symbolIcon.moduleForeground': '#cccccc',
		'symbolIcon.namespaceForeground': '#cccccc',
		'symbolIcon.nullForeground': '#cccccc',
		'symbolIcon.numberForeground': '#cccccc',
		'symbolIcon.objectForeground': '#cccccc',
		'symbolIcon.operatorForeground': '#cccccc',
		'symbolIcon.packageForeground': '#cccccc',
		'symbolIcon.propertyForeground': '#cccccc',
		'symbolIcon.referenceForeground': '#cccccc',
		'symbolIcon.snippetForeground': '#cccccc',
		'symbolIcon.stringForeground': '#cccccc',
		'symbolIcon.structForeground': '#cccccc',
		'symbolIcon.textForeground': '#cccccc',
		'symbolIcon.typeParameterForeground': '#cccccc',
		'symbolIcon.unitForeground': '#cccccc',
		'symbolIcon.variableForeground': '#75beff',
		'tab.activeBackground': '#1e1e1e',
		'tab.activeForeground': '#ffffff',
		'tab.activeModifiedBorder': '#3399cc',
		'tab.border': '#252526',
		'tab.inactiveBackground': '#2d2d2d',
		'tab.inactiveForeground': '#ffffff80',
		'tab.inactiveModifiedBorder': '#3399cc80',
		'tab.unfocusedActiveBackground': '#1e1e1e',
		'tab.unfocusedActiveForeground': '#ffffff80',
		'tab.unfocusedActiveModifiedBorder': '#3399cc80',
		'tab.unfocusedInactiveBackground': '#2d2d2d',
		'tab.unfocusedInactiveForeground': '#ffffff40',
		'tab.unfocusedInactiveModifiedBorder': '#3399cc40',
		'terminal.ansiBlack': '#000000',
		'terminal.ansiBlue': '#2472c8',
		'terminal.ansiBrightBlack': '#666666',
		'terminal.ansiBrightBlue': '#3b8eea',
		'terminal.ansiBrightCyan': '#29b8db',
		'terminal.ansiBrightGreen': '#23d18b',
		'terminal.ansiBrightMagenta': '#d670d6',
		'terminal.ansiBrightRed': '#f14c4c',
		'terminal.ansiBrightWhite': '#e5e5e5',
		'terminal.ansiBrightYellow': '#f5f543',
		'terminal.ansiCyan': '#11a8cd',
		'terminal.ansiGreen': '#0dbc79',
		'terminal.ansiMagenta': '#bc3fbc',
		'terminal.ansiRed': '#cd3131',
		'terminal.ansiWhite': '#e5e5e5',
		'terminal.ansiYellow': '#e5e510',
		'terminal.border': '#80808059',
		'terminal.dropBackground': '#53595d80',
		'terminal.findMatchBackground': '#515c6a',
		'terminal.findMatchHighlightBackground': '#ea5c0055',
		'terminal.foreground': '#cccccc',
		'terminal.hoverHighlightBackground': '#264f7820',
		'terminal.selectionBackground': '#264f78',
		'terminalCommandDecoration.defaultBackground': '#ffffff40',
		'terminalCommandDecoration.errorBackground': '#f14c4c',
		'terminalCommandDecoration.successBackground': '#1b81a8',
		'terminalOverviewRuler.cursorForeground': '#a0a0a0cc',
		'terminalOverviewRuler.findMatchForeground': '#d186167e',
		'testing.iconErrored': '#f14c4c',
		'testing.iconFailed': '#f14c4c',
		'testing.iconPassed': '#73c991',
		'testing.iconQueued': '#cca700',
		'testing.iconSkipped': '#848484',
		'testing.iconUnset': '#848484',
		'testing.message.error.decorationForeground': '#f14c4c',
		'testing.message.error.lineBackground': '#ff000033',
		'testing.message.info.decorationForeground': '#d4d4d480',
		'testing.peekBorder': '#f14c4c',
		'testing.peekHeaderBackground': '#f14c4c1a',
		'testing.runAction': '#73c991',
		'textBlockQuote.background': '#7f7f7f1a',
		'textBlockQuote.border': '#007acc80',
		'textCodeBlock.background': '#0a0a0a66',
		'textLink.activeForeground': '#3794ff',
		'textLink.foreground': '#3794ff',
		'textPreformat.foreground': '#d7ba7d',
		'textSeparator.foreground': '#ffffff2e',
		'titleBar.activeBackground': '#3c3c3c',
		'titleBar.activeForeground': '#cccccc',
		'titleBar.inactiveBackground': '#3c3c3c99',
		'titleBar.inactiveForeground': '#cccccc99',
		'toolbar.activeBackground': '#63666750',
		'toolbar.hoverBackground': '#5a5d5e50',
		'tree.inactiveIndentGuidesStroke': '#58585866',
		'tree.indentGuidesStroke': '#585858',
		'tree.tableColumnsBorder': '#cccccc20',
		'tree.tableOddRowsBackground': '#cccccc0a',
		'walkThrough.embeddedEditorBackground': '#00000066',
		'walkthrough.stepTitle.foreground': '#ffffff',
		'welcomePage.progress.background': '#3c3c3c',
		'welcomePage.progress.foreground': '#3794ff',
		'welcomePage.tileBackground': '#252526',
		'welcomePage.tileBorder': '#ffffff1a',
		'welcomePage.tileHoverBackground': '#2c2c2d',
		'widget.shadow': '#0000005c',
		'activityBar.activeBackground': null,
		'activityBar.activeFocusBorder': null,
		'activityBar.border': null,
		'button.border': null,
		'contrastActiveBorder': null,
		'contrastBorder': null,
		'debugToolBar.border': null,
		'diffEditor.border': null,
		'diffEditor.insertedTextBorder': null,
		'diffEditor.removedTextBorder': null,
		'diffEditorGutter.insertedLineBackground': null,
		'diffEditorGutter.removedLineBackground': null,
		'diffEditorOverview.insertedForeground': null,
		'diffEditorOverview.removedForeground': null,
		'dropdown.listBackground': null,
		'editor.findMatchBorder': null,
		'editor.findMatchHighlightBorder': null,
		'editor.findRangeHighlightBorder': null,
		'editor.lineHighlightBackground': null,
		'editor.rangeHighlightBorder': null,
		'editor.selectionForeground': null,
		'editor.selectionHighlightBorder': null,
		'editor.snippetFinalTabstopHighlightBackground': null,
		'editor.snippetTabstopHighlightBorder': null,
		'editor.symbolHighlightBorder': null,
		'editor.wordHighlightBorder': null,
		'editor.wordHighlightStrongBorder': null,
		'editor.wordHighlightTextBorder': null,
		'editorCursor.background': null,
		'editorError.background': null,
		'editorError.border': null,
		'editorGhostText.background': null,
		'editorGhostText.border': null,
		'editorGroup.dropIntoPromptBorder': null,
		'editorGroup.emptyBackground': null,
		'editorGroup.focusedEmptyBorder': null,
		'editorGroupHeader.border': null,
		'editorGroupHeader.tabsBorder': null,
		'editorHint.border': null,
		'editorInfo.background': null,
		'editorInfo.border': null,
		'editorLineNumber.dimmedForeground': null,
		'editorOverviewRuler.background': null,
		'editorUnnecessaryCode.border': null,
		'editorWarning.background': null,
		'editorWarning.border': null,
		'editorWidget.resizeBorder': null,
		'gitlens.decorations.branchUpToDateForegroundColor': null,
		'input.border': null,
		'inputValidation.errorForeground': null,
		'inputValidation.infoForeground': null,
		'inputValidation.warningForeground': null,
		'list.filterMatchBorder': null,
		'list.focusAndSelectionOutline': null,
		'list.focusBackground': null,
		'list.focusForeground': null,
		'list.hoverForeground': null,
		'list.inactiveFocusBackground': null,
		'list.inactiveFocusOutline': null,
		'list.inactiveSelectionForeground': null,
		'list.inactiveSelectionIconForeground': null,
		'menu.selectionBorder': null,
		'menubar.selectionBorder': null,
		'merge.border': null,
		'minimap.background': null,
		'notebook.cellHoverBackground': null,
		'notebook.focusedCellBackground': null,
		'notebook.inactiveSelectedCellBorder': null,
		'notebook.outputContainerBackgroundColor': null,
		'notebook.outputContainerBorderColor': null,
		'notificationCenterHeader.foreground': null,
		'panelInput.border': null,
		'panelSectionHeader.border': null,
		'panelSectionHeader.foreground': null,
		'peekViewEditor.matchHighlightBorder': null,
		'quickInput.list.focusBackground': null,
		'searchEditor.findMatchBorder': null,
		'searchEditor.textInputBorder': null,
		'selection.background': null,
		'settings.numberInputBorder': null,
		'settings.textInputBorder': null,
		'sideBar.border': null,
		'sideBar.foreground': null,
		'sideBarSectionHeader.foreground': null,
		'statusBar.border': null,
		'statusBar.debuggingBorder': null,
		'statusBar.noFolderBorder': null,
		'tab.activeBorder': null,
		'tab.activeBorderTop': null,
		'tab.hoverBackground': null,
		'tab.hoverBorder': null,
		'tab.hoverForeground': null,
		'tab.unfocusedActiveBorder': null,
		'tab.unfocusedActiveBorderTop': null,
		'tab.unfocusedHoverBackground': null,
		'tab.unfocusedHoverBorder': null,
		'tab.unfocusedHoverForeground': null,
		'terminal.background': null,
		'terminal.findMatchBorder': null,
		'terminal.findMatchHighlightBorder': null,
		'terminal.selectionForeground': null,
		'terminal.tab.activeBorder': null,
		'terminalCursor.background': null,
		'terminalCursor.foreground': null,
		'testing.message.info.lineBackground': null,
		'titleBar.border': null,
		'toolbar.hoverOutline': null,
		'welcomePage.background': null,
		'window.activeBorder': null,
		'window.inactiveBorder': null
	}
}