# AGENTS.md

## Project purpose

This repository is a portfolio demo for a fictional dental clinic. The goal is to present a calm, trustworthy, modern healthcare website that demonstrates strong frontend development, thoughtful UX, responsive design, and clear conversion paths.

The site should feel appropriate for a real dental practice that wants patients to feel safe, informed, and confident booking an appointment.

Do not treat this as a generic medical template. The visual identity, copy, interactions, and information architecture should be tailored specifically to dentistry.

## Product goals

The experience should answer these questions clearly:

- What dental services are offered?
- Why should a patient trust this clinic?
- Who are the dentists or specialists?
- What is the appointment process?
- How can a patient book or contact the clinic quickly?

Primary conversion actions should include booking an appointment, contacting the clinic, or exploring treatments.

## Design direction

Use a combination of:

- Minimalism
- Soft UI / restrained Neumorphism
- Bento Grid

The overall result should feel clean, reassuring, polished, friendly, and professional.

### Visual language

Prefer:

- White or very light backgrounds
- Soft blue, aqua, teal, or mint accents
- Rounded cards with subtle depth
- Generous whitespace
- Clear hierarchy
- Calm typography
- Friendly but professional photography
- Soft shadows and subtle borders
- Bento-style content organization where useful
- Prominent but non-aggressive appointment CTAs

Avoid:

- Harsh black-heavy layouts
- Excessive neon or futuristic effects
- Strong brutalist styling
- Overly decorative healthcare clichés
- Large amounts of text without visual hierarchy
- Dense dashboard-like layouts

Neumorphism should be used selectively. Accessibility and readability are more important than preserving a purely neumorphic aesthetic.

## Suggested page structure

A strong landing page may include:

1. Hero section with a calm value proposition and booking CTA
2. Trust indicators such as experience, patient ratings, or certifications using fictional demo data
3. Dental treatments / services
4. Meet the dentists or specialists
5. Why patients choose the clinic
6. Appointment process
7. Clinic facilities / technology
8. Testimonials
9. FAQ
10. Booking / contact section
11. Footer with practical clinic information

Use natural, patient-friendly headings rather than generic template labels.

## Signature interaction

The demo should include an appointment-booking experience.

Preferred functionality:

- Select a treatment or reason for visit
- Choose a dentist or specialist when relevant
- Select a date
- Select an available time slot
- Review the appointment selection
- Submit a simulated booking

No real backend is required. Mock availability and confirmation states are acceptable as long as the interaction feels coherent and production-ready.

Do not collect real sensitive medical information in the demo.

## Treatment presentation

Treatments should be easy to scan and understand.

Useful fields can include:

- Treatment name
- Short patient-friendly description
- Typical appointment duration
- Dentist / specialty
- Optional starting-price placeholder if clearly fictional

Avoid making medical guarantees or unrealistic claims.

## Motion and interaction

Motion should reinforce calmness and clarity.

Good examples:

- Soft section reveals
- Gentle hover states
- Smooth booking-step transitions
- Subtle card elevation
- Small icon or illustration motion

Avoid excessive animation, fast parallax, strong zooms, or distracting effects.

## Technical expectations

Prefer the existing project stack. If the project is being initialized or refactored, the preferred frontend stack is:

- React
- Vite
- Tailwind CSS
- Motion / Framer Motion for animations when useful
- Lucide React for icons

Implementation should be:

- Fully responsive
- Accessible
- Semantic
- Keyboard-friendly
- Performant
- Easy to maintain
- Componentized without unnecessary complexity

## Accessibility

Healthcare interfaces should prioritize accessibility.

Pay particular attention to:

- Sufficient color contrast
- Visible focus states
- Readable text sizes
- Clear form labels
- Helpful validation messages
- Large tap targets
- Reduced-motion preferences
- Avoiding low-contrast neumorphic controls

## Responsive behavior

The mobile layout should prioritize booking and contact actions.

Ensure:

- Appointment CTAs remain easy to reach
- Service cards remain readable
- Dentist cards stack cleanly
- Booking steps work comfortably on small screens
- Forms do not overflow
- Important contact details remain visible

## Content rules

All clinic names, staff names, testimonials, statistics, addresses, phone numbers, services, and appointment data may be fictional.

Use realistic content instead of Lorem Ipsum.

The repository/demo context should make it clear that this is a portfolio showcase, while the website itself should visually resemble a finished commercial product.

## Image and media placeholders

If real clinic photography is unavailable, preserve intentional areas for:

- Dentist portraits
- Clinic interiors
- Treatment imagery
- Equipment / technology

Layouts should remain stable when these assets are replaced later.

## Code quality

When modifying this repository:

- Reuse components where appropriate
- Keep forms and booking logic understandable
- Avoid duplicated styling
- Use descriptive naming
- Preserve existing functionality unless the task explicitly changes it
- Avoid unnecessary global state
- Keep UI state local when possible
- Test key booking interactions after changes
- Test desktop, tablet, and mobile layouts

## Portfolio quality bar

This project is intended to demonstrate that the developer can create trustworthy, conversion-oriented interfaces for healthcare businesses.

Every major implementation decision should favor:

- Patient confidence
- Clear information
- Accessibility
- Easy appointment booking
- Professional polish
- Responsive quality
- Strong visual differentiation

The dental clinic demo should not look interchangeable with the construction or law-firm demos in the broader portfolio.
