import { type EffectCallback, useEffect } from 'react'

const useMountEffect = (callback: EffectCallback) => {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(callback, [])
}

export default useMountEffect