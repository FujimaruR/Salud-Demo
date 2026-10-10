import { Link } from "react-router";
import { t } from "../site/locale";
import { services, doctors } from "../site/dental-data";
function Photo({
  kind,
  priority = false,
}: {
  kind: string;
  priority?: boolean;
}) {
  return (
    <img
      src={"/media/" + kind + ".jpg"}
      alt={t(
        kind === "clinic"
          ? "dental.photoClinic"
          : kind === "care"
            ? "dental.photoCare"
            : "dental.photoPeople",
      )}
      width="1200"
      height="1600"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
export function HomePage() {
  return (
    <>
      <section className="d-hero d-wrap">
        <div className="d-hero-copy">
          <p className="d-eyebrow">{t("dental.tag")}</p>
          <h1>{t("dental.title")}</h1>
          <p>{t("dental.intro")}</p>
          <div className="d-actions">
            <Link className="d-button" to="/reservar">
              {t("dental.cta")}
            </Link>
            <Link className="d-link" to="/tratamientos">
              {t("dental.explore")}
            </Link>
          </div>
          <div className="d-trust">
            {[1, 2, 3].map((i) => (
              <span key={i}>✓ {t("dental.trust" + i)}</span>
            ))}
          </div>
        </div>
        <div className="d-hero-media">
          <Photo kind="care" priority />
          <div className="d-media-label">
            <span aria-hidden="true">✧</span>
            <div>
              <strong>{t("dental.clinicTitle")}</strong>
              <p>{t("dental.clinicMedia")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="d-section d-wrap d-home-preview">
        <p className="d-eyebrow">DentSmile / 01</p>
        <h2>{t("dental.servicesTitle")}</h2>
        <div className="d-preview-grid">
          {services.slice(0, 3).map((s) => (
            <Link className="d-preview" to="/tratamientos" key={s.id}>
              <div className="d-preview-photo">
                <Photo kind={["dentist", "care", "clinic"][s.n - 1]} />
              </div>
              <span>{s.icon}</span>
              <h3>{t("dental.service" + s.n)}</h3>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
export function TreatmentsPage() {
  return (
    <>
      <section className="d-section d-wrap" id="treatments">
        <div className="d-section-head">
          <p className="d-eyebrow">DentSmile / 01</p>
          <h1>{t("dental.servicesTitle")}</h1>
        </div>
        <div className="d-services">
          {services.map((s) => (
            <article className="d-service" key={s.id}>
              <div className="d-treatment-photo">
                <Photo kind={s.n % 2 === 0 ? "dentist" : "care"} />
              </div>
              <span className="d-icon" aria-hidden="true">
                {s.icon}
              </span>
              <h3>{t("dental.service" + s.n)}</h3>
              <p>{t("dental.service" + s.n + "body")}</p>
              <div className="d-service-bottom">
                <span>
                  {t("dental.duration")}: {s.minutes} min
                </span>
                <Link
                  to="/reservar"
                  aria-label={
                    t("dental.booking") + " · " + t("dental.service" + s.n)
                  }
                >
                  ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export function TeamPage() {
  return (
    <>
      <section className="d-section d-team" id="team">
        <div className="d-wrap">
          <div className="d-section-head">
            <p className="d-eyebrow">DentSmile / 02</p>
            <h1>{t("dental.teamTitle")}</h1>
            <p>{t("dental.teamBody")}</p>
          </div>
          <div className="d-team-grid">
            {doctors.map((d) => (
              <article key={d.id}>
                <div className="d-portrait">
                  <img
                    src={
                      [
                        "/media/dentist.jpg",
                        "/media/team.jpg",
                        "/media/care.jpg",
                      ][d.n - 1]
                    }
                    alt={t("dental.photoPeople")}
                    width="600"
                    height="800"
                    loading="lazy"
                  />
                </div>
                <h3>{t("dental.person" + d.n)}</h3>
                <p>{t("dental.role" + d.n)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <p className="d-wrap d-small d-photo-note">{t("dental.photoNotice")}</p>
    </>
  );
}
export function ClinicPage() {
  return (
    <>
      <section className="d-section d-wrap d-split">
        <div className="d-clinic-media">
          <Photo kind="clinic" />
          <p>{t("dental.clinicMedia")}</p>
        </div>
        <div>
          <p className="d-eyebrow">{t("dental.space")}</p>
          <h1>{t("dental.clinicTitle")}</h1>
          <p>{t("dental.clinicBody")}</p>
        </div>
      </section>
      <section className="d-section d-wrap">
        <h2>{t("dental.processTitle")}</h2>
        <div className="d-process">
          {[1, 2, 3].map((i) => (
            <article key={i}>
              <span>0{i}</span>
              <h3>{t("dental.step" + i)}</h3>
              <p>{t("dental.step" + i + "body")}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
export function QuestionsPage() {
  return (
    <>
      <section className="d-section d-wrap d-split" id="faq">
        <h1>{t("dental.faq")}</h1>
        <div>
          {[1, 2, 3].map((i) => (
            <details key={i}>
              <summary>{t("dental.question" + i)}</summary>
              <p>{t("dental.answer" + i)}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
