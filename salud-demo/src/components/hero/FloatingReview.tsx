import { useLocale as useSiteLocale, t as tr } from '../../site/locale';
export default function FloatingReview() {
  useSiteLocale();
  return <aside className="hidden lg:block rounded-3xl bg-white/10 p-10 border border-white/20 text-white">
    <h2 className="text-2xl font-bold">{tr("text.59aeff1440")}</h2>
    <p className="mt-5">{tr("text.3d9ca227d2")}</p>
    <ul className="mt-5 space-y-4"><li>{tr("text.7585b11221")}</li><li>{tr("text.c6b3c5d328")}</li><li>{tr("text.7a6c92a921")}</li></ul>
  </aside>;
}
