import { useEffect, useRef, useState } from "react";
import { useLocale, t } from "../site/locale";
import { track } from "../site/analytics";
import {
  availableSlots,
  specialistFor,
  upcomingDates,
} from "../site/booking.mjs";
import { services, doctors } from "../site/dental-data";
export default function Booking() {
  const formRef = useRef<HTMLFormElement>(null);
  const locale = useLocale();
  const [dates] = useState(() => upcomingDates());
  const [step, setStep] = useState(0);
  const [reason, setReason] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (step > 0)
      formRef.current?.querySelector<HTMLElement>("select,h3")?.focus();
  }, [step]);
  const slots = availableSlots(date, doctor, dates);
  const reasonItem = services.find((s) => s.id === reason);
  const doctorItem = doctors.find((d) => d.id === doctor);
  const formatDate = (d: string) =>
    new Intl.DateTimeFormat(locale, {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(new Date(d + "T12:00:00"));
  const touch = () => {
    track("form_start", "demo-appointment");
    setError(false);
  };
  function next() {
    const valid =
      step === 0
        ? Boolean(reason && doctor && specialistFor[reason]?.includes(doctor))
        : Boolean(dates.includes(date) && slots.includes(time));
    if (!valid) {
      setError(true);
      track("form_validation_error", "demo-appointment", "validation");
      return;
    }
    setError(false);
    setStep(step + 1);
  }
  return (
    <section className="d-section d-book" id="booking">
      <div className="d-wrap d-split">
        <div>
          <p className="d-eyebrow">BRISA / 04</p>
          <h1>{t("dental.bookTitle")}</h1>
          <p>{t("dental.bookBody")}</p>
          <p className="d-small">{t("dental.simulation")}</p>
        </div>
        <div className="d-book-panel">
          {done ? (
            <div role="status">
              <span className="d-success-symbol" aria-hidden="true">
                ✓
              </span>
              <h3>{t("dental.success")}</h3>
              <button
                className="d-button"
                onClick={() => {
                  setDone(false);
                  setStep(0);
                  setReason("");
                  setDoctor("");
                  setDate("");
                  setTime("");
                  setError(false);
                }}
              >
                {t("dental.reset")}
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                if (step !== 2) {
                  next();
                  return;
                }
                track("form_submit_attempt", "demo-appointment");
                if (
                  !reasonItem ||
                  !doctorItem ||
                  !specialistFor[reason].includes(doctor) ||
                  !slots.includes(time)
                ) {
                  setError(true);
                  return;
                }
                setDone(
                  true,
                ); /* A simulated booking is not a real form success. */
              }}
            >
              <ol className="d-progress" aria-label={t("dental.booking")}>
                {[1, 2, 3].map((n) => (
                  <li
                    key={n}
                    aria-current={step === n - 1 ? "step" : undefined}
                  >
                    <span>{n}</span>
                    {t("dental.stage" + n)}
                  </li>
                ))}
              </ol>
              {step === 0 && (
                <div>
                  <label>
                    {t("dental.reason")}
                    <select
                      required
                      value={reason}
                      onChange={(e) => {
                        setReason(e.target.value);
                        setDoctor("");
                        setTime("");
                        touch();
                      }}
                    >
                      <option value="">{t("dental.choose")}</option>
                      {services.map((s) => (
                        <option value={s.id} key={s.id}>
                          {t("dental.service" + s.n)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    {t("dental.dentist")}
                    <select
                      required
                      disabled={!reason}
                      value={doctor}
                      onChange={(e) => {
                        setDoctor(e.target.value);
                        setTime("");
                        touch();
                      }}
                    >
                      <option value="">{t("dental.choose")}</option>
                      {doctors
                        .filter((d) => specialistFor[reason]?.includes(d.id))
                        .map((d) => (
                          <option value={d.id} key={d.id}>
                            {t("dental.person" + d.n)}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>
              )}
              {step === 1 && (
                <div>
                  <label>
                    {t("dental.date")}
                    <select
                      required
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setTime("");
                        touch();
                      }}
                    >
                      <option value="">{t("dental.choose")}</option>
                      {dates.map((d) => (
                        <option value={d} key={d}>
                          {formatDate(d)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <fieldset className="d-slots">
                    <legend>{t("dental.time")}</legend>
                    {slots.map((s) => (
                      <label key={s}>
                        <input
                          type="radio"
                          name="time"
                          value={s}
                          checked={time === s}
                          onChange={() => {
                            setTime(s);
                            touch();
                          }}
                        />
                        <span>{s}</span>
                      </label>
                    ))}
                    {date && !slots.length && <p>{t("dental.noSlots")}</p>}
                  </fieldset>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h3 tabIndex={-1}>{t("dental.review")}</h3>
                  <dl className="d-review">
                    {[
                      [
                        t("dental.reason"),
                        reasonItem ? t("dental.service" + reasonItem.n) : "",
                      ],
                      [
                        t("dental.dentist"),
                        doctorItem ? t("dental.person" + doctorItem.n) : "",
                      ],
                      [t("dental.date"), date ? formatDate(date) : ""],
                      [t("dental.time"), time],
                    ].map(([key, value]) => (
                      <div key={key}>
                        <dt>{key}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="d-small">{t("dental.simulation")}</p>
                </div>
              )}
              {error && (
                <p role="alert" className="d-error">
                  {t("dental.validation")}
                </p>
              )}
              <div className="d-actions">
                {step > 0 && (
                  <button
                    type="button"
                    className="d-button d-outline"
                    onClick={() => {
                      setError(false);
                      setStep(step - 1);
                    }}
                  >
                    {t("dental.back")}
                  </button>
                )}
                <button className="d-button" type="submit">
                  {t(step === 2 ? "dental.confirm" : "dental.continue")} →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
