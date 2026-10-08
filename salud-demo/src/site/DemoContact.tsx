import { useLocale as useSiteLocale, t as tr } from './locale';
import { useState } from 'react';
import { track } from './analytics';
export default function DemoContact() {
  useSiteLocale();
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState(false);
  return <section id="contact" className="py-20 bg-gray-50"><div className="max-w-3xl mx-auto px-6">
    <h2 className="text-3xl font-bold">{tr("text.85cc4ce846")}</h2>
    <p className="mt-4">{tr("text.8dc39ac1f6")}</p>
    <form noValidate className="mt-8 grid gap-4" onChangeCapture={() => track('form_start','demo-appointment')} onSubmit={e => {
      e.preventDefault(); track('form_submit_attempt','demo-appointment');
      if (!e.currentTarget.reportValidity()) { setValidationError(true); track('form_validation_error','demo-appointment','validation'); return; }
      setValidationError(false); setSubmitted(true);
    }}>
      <label htmlFor="demo-service">{tr("text.b1bc62da22")}</label>
      <select id="demo-service" required className="p-3 border rounded-xl"><option value="">{tr("text.e49e028311")}</option><option value="general">{tr("text.6750da7559")}</option><option value="design">{tr("text.34e62ff810")}</option></select>
      <label htmlFor="demo-slot">{tr("text.2320f5bf23")}</label>
      <select id="demo-slot" required className="p-3 border rounded-xl"><option value="">{tr("text.4bef5433cf")}</option><option value="morning">{tr("text.eb993f86c0")}</option><option value="afternoon">{tr("text.4f81c724c7")}</option></select>
      <button className="px-6 py-3 bg-[#A69232] text-white rounded-xl">{tr("text.df14356d6d")}</button>
      {submitted && <p role="status">{tr("text.28994c5e79")}</p>}
    {validationError && <p role="alert">{tr('ui.validation')}</p>}
        </form>
  </div></section>;
}
