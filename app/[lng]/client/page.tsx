"use client"
import { useTranslation } from '@/i18n/client'
import { ILanguages } from '@/i18n/config'
import { useParams } from 'next/navigation'
import React from 'react'

const ClientPage = () => {
  const params = useParams();
  const {t} = useTranslation(params?.lng as ILanguages,"client")
  console.log("params",params);
  
  return (
    <div>
      ClientPage
      <div>{t("title")}</div>
    </div>
  )
}

export default ClientPage