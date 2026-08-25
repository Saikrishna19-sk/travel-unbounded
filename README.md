# Travel Unbounded

A responsive full-stack travel website built as part of the Travel Unbounded Full Stack Web Developer Assignment.

The website showcases travel destinations across India and internationally, provides information about Travel Unbounded, and allows users to submit travel enquiries that are validated and stored in MongoDB.

## Live Demo

Coming soon — deployment will be completed on Vercel.

## GitHub Repository

Coming soon.

---

## Features

### Home Page

- Responsive hero section
- Travel Unbounded branding
- India destinations
- International destinations
- Destination cards
- Starting prices
- Destination detail pages
- Call-to-action sections

### About Page

- Company story
- Office locations
- Why choose us section
- Company values

### Contact / Enquiry Page

- Full name
- Country code
- Contact number
- Email
- Date of travel
- Number of travellers
- Number of children
- Hotel category
- Client-side validation
- Server-side validation
- Loading state
- Success message
- Error handling

### Backend

- Next.js API route
- POST `/api/enquiry`
- Server-side request validation
- MongoDB persistence
- Created timestamp

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- MongoDB Atlas
- MongoDB Node.js Driver
- Zod
- React Hook Form
- Vercel

---

## Next.js Architecture

This project uses the Next.js App Router.

Main routes:

```text
/
├── /about
├── /contact
├── /destinations/[id]
└── /api/enquiry