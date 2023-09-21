import { ILanguages } from '@/i18n/config';
import { getPath } from '@/utils/getPath';
import { useParams, usePathname, useRouter } from 'next/navigation'


const useLanguage = () => {
  const params = useParams();
  const path = usePathname();
  const router = useRouter();
  const changeLanguage = (lng:ILanguages)=>{
    const newPath = getPath(path);
    router.push(`/${lng}${newPath}`)
  }
  return {
    lng:params.lng,
    changeLanguage
  }
}

export default useLanguage