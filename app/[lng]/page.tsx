import { ILanguages } from '@/i18n/config';
import { useTranslation } from '@/i18n/server';

export default async function Home({params:{lng}}:{params:{lng:ILanguages}}) {
  console.log("lng",lng);
  const {t} =await useTranslation(lng,["home","common"]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>{t("home:title")}</span>
      <div>{t("common:name")}</div>
    </main>
  )
}
