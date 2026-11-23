
import {useEffect,useState} from 'react'
export function useLocalStorage(key,fallback){
 const [value,setValue]=useState(()=>{try{const raw=localStorage.getItem(key);return raw?JSON.parse(raw):fallback}catch{return fallback}})
 useEffect(()=>{try{localStorage.setItem(key,JSON.stringify(value))}catch(e){console.warn('Unable to persist data',e)}},[key,value])
 return [value,setValue]
}
