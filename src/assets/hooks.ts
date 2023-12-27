import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store/store'



export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const useFindHashtag = (text: string) => {
    const hashtag = text.includes('#') ? text.substring(text.indexOf('#')) : '';
    return hashtag;
}

