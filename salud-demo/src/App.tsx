import {
  BrowserRouter,
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";
import { useEffect, useRef } from "react";
import { useLocale, setLocale, t } from "./site/locale";
import { track } from "./site/analytics";
import {
  HomePage,
  TreatmentsPage,
  TeamPage,
  ClinicPage,
  QuestionsPage,
} from "./pages/DentalPages";
import Booking from "./pages/Booking";
import routes from "./site/routes.json";
import "./pages/Dental.css";
const legacy: Record<string, string> = {
  treatments: "/tratamientos",
  team: "/equipo",
  faq: "/preguntas",
  booking: "/reservar",
  contact: "/reservar",
};
function ToothMark() {
  return (
    <svg className="d-tooth" viewBox="0 0 32 36" fill="none" aria-hidden="true">
      <path
        d="M16 5C11-1 2 2 3 11c1 7 2 20 7 21 3 0 2-12 6-12s3 12 6 12c5-1 6-14 7-21 1-9-8-12-13-6Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path
        d="m12 7 4 2 4-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function Site() {
  const locale = useLocale();
  const location = useLocation();
  const main = useRef<HTMLElement>(null);
  const current = routes.find(
    (r) => r.path === (location.pathname.replace(/\/$/, "") || "/"),
  );
  useEffect(() => {
    document.title =
      (current ? t("dental." + current.key) + " · " : "") + t("dental.brand");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t("dental.intro"));
  }, [locale, current]);
  useEffect(() => {
    if (location.pathname === "/" && legacy[location.hash.slice(1)]) return;
    window.scrollTo({ top: 0, behavior: "instant" });
    main.current?.focus({ preventScroll: true });
    track("page_view");
  }, [location.pathname, location.hash]);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            entry.target.classList.add("d-revealed");
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.08 },
    );
    for (const el of document.querySelectorAll(
      ".d-service,.d-team-grid article,.d-clinic-media,.d-preview",
    )) {
      el.classList.add("d-reveal");
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, [location.pathname]);
  if (location.pathname === "/" && legacy[location.hash.slice(1)])
    return <Navigate replace to={legacy[location.hash.slice(1)]} />;
  return (
    <div className="dental">
      <a href="#main" className="d-skip">
        {t("dental.skip")}
      </a>
      <div className="d-notice">{t("dental.notice")}</div>
      <header className="d-nav d-wrap">
        <Link className="d-brand" to="/">
          <ToothMark />
          <span>
            Dent<span className="d-brand-blue">Smile</span>
          </span>
        </Link>
        <nav aria-label={t("dental.nav")}>
          {routes
            .filter((r) => r.path !== "/reservar")
            .map((r) => (
              <NavLink key={r.path} to={r.path} end>
                {t("dental." + r.key)}
              </NavLink>
            ))}
        </nav>
        <label className="d-language">
          <span className="d-sr-only">{t("dental.language")}</span>
          <select value={locale} onChange={(e) => setLocale(e.target.value)}>
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </label>
        <NavLink className="d-button" to="/reservar">
          {t("dental.booking")} ↗
        </NavLink>
      </header>
      <main id="main" tabIndex={-1} ref={main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tratamientos" element={<TreatmentsPage />} />
          <Route path="/equipo" element={<TeamPage />} />
          <Route path="/clinica" element={<ClinicPage />} />
          <Route path="/preguntas" element={<QuestionsPage />} />
          <Route path="/reservar" element={<Booking />} />
          <Route
            path="*"
            element={
              <section className="d-section d-wrap">
                <h1>{t("dental.notfound")}</h1>
                <Link className="d-button" to="/">
                  {t("dental.home")}
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="d-footer d-wrap">
        <Link className="d-brand" to="/">
          DentSmile
        </Link>
        <p>{t("dental.footer")}</p>
        <Link to="/reservar">{t("dental.booking")} ↗</Link>
      </footer>
    </div>
  );
}
export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
