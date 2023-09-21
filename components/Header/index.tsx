"use client"
import { ILanguages } from '@/i18n/config';
import React  from 'react'
import {languages} from "@/i18n/config"
import useLanguage from '@/hook/useLanguage';
const Header = () => {
  const {lng,changeLanguage} = useLanguage()
  const changeLanguages=(e:React.ChangeEvent<HTMLSelectElement>)=>{
    const newLng = e.target.value
    changeLanguage(newLng as ILanguages)
  }
  return (
    <div className='px-6 py-4'>
      <select defaultValue={lng} onChange={changeLanguages}>
        {
          languages.map((item)=>{
            return (<option key={item}>{item}</option>)
          })
        }
      </select>
    </div>
  )
}

export default Header