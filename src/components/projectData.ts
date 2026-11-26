type ProjectArtwork = {
  file: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  label?: string;
};

export type FeaturedProject = {
  id: string;
  title: string;
  category: string;
  year?: number;
  summary: string;
  tags: string[];
  artwork: ProjectArtwork;
  additionalArtwork?: ProjectArtwork;
  problem: string;
  contribution: string;
  decisions: string;
  result: string;
  source?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "salapi",
    title: "Salapi",
    category: "Personal project",
    year: 2026,
    summary: "Offline budgeting with an Accounts view modeled on familiar Philippine payment cards.",
    tags: ["React", "SQLite WASM", "Offline access"],
    artwork: {
      file: "salapi.webp",
      alt: "Illustration of five color-coded payment cards and a separate cash account, each with its balance shown below",
      caption: "Illustrative Accounts view with sample balances.",
      width: 960,
      height: 640,
      label: "Illustration",
    },
    problem:
      "A budget should be accessible when a connection drops. The Accounts view also needed a clear way to distinguish bank accounts from cash at a glance.",
    contribution:
      "I built the offline budgeting app and designed its Accounts view. The interface pairs issuer-specific landscape cards with a separate design for Cash.",
    decisions:
      "Salapi stores budget data on the device using SQLite compiled to WebAssembly and the browser’s Origin Private File System. The balance sits below each card so it stays in a consistent place across account designs.",
    result:
      "The Accounts view shows a distinct face and readable balance for each account. The budget is usable without an internet connection.",
  },
  {
    id: "laundry-pos",
    title: "Laundry POS & Inventory",
    category: "Client project",
    year: 2026,
    summary: "Digital order intake, payments, and daily close for a local laundry shop.",
    tags: ["React", "Supabase", "PostgreSQL"],
    artwork: {
      file: "laundry-pos.webp",
      alt: "Laundry POS orders screen showing sample orders, payment status, and staff actions",
      caption: "Orders screen with synthetic shop data.",
      width: 1110,
      height: 740,
    },
    additionalArtwork: {
      file: "laundry-order-detail.webp",
      alt: "Synthetic laundry order details with an unpaid balance and payment options",
      caption: "Order and payment details with synthetic shop data.",
      width: 420,
      height: 598,
    },
    problem:
      "A local laundry shop relied on handwritten orders. Staff needed a shared record they could consult when accepting orders, collecting payments, and handing back laundry.",
    contribution:
      "I built a React and Supabase point-of-sale system with order intake, printable claim stubs, payment records, and reports for the manager.",
    decisions:
      "I separated cashier and manager permissions, blocked order release until payment was recorded, and designed checkout retries to avoid duplicate orders and payments.",
    result:
      "Staff can look up an order by claim number and see its status and payment. Managers can reconcile daily collections and export sales records to Excel.",
    source: "https://github.com/solorankYT/laundry-pos",
  },
  {
    id: "hotel-reservation",
    title: "Hotel Reservation & Billing",
    category: "Capstone project",
    summary: "Guest reservations and front-desk billing in one system.",
    tags: ["Laravel 12", "PHP", "JavaScript"],
    artwork: {
      file: "hotel.webp",
      alt: "Hotel booking calendar with check-in, check-out, guest count, and availability controls",
      caption: "Guest-facing availability calendar.",
      width: 960,
      height: 640,
    },
    additionalArtwork: {
      file: "hotel-home.webp",
      alt: "Guest-facing hotel website landing screen",
      caption: "Guest-facing homepage.",
      width: 1280,
      height: 628,
    },
    problem:
      "A hotel needed to coordinate online reservations and walk-ins with room availability, payment verification, and front-desk checkout.",
    contribution:
      "I helped build a capstone application with guest room search, bookings, and a front-desk workflow for reservations, payments, and checkout.",
    decisions:
      "Laravel APIs connect the guest and staff workflows through a booking reference. A booking service enforces cancellation timing and updates room availability when a reservation is cancelled.",
    result:
      "Guests can check room availability and manage a booking. Staff can look up reservations, track payments, and run reports on occupancy and revenue.",
    source: "https://github.com/solorankYT/HRBS",
  },
];

type ArchivedProject = {
  title: string;
  summary: string;
  source?: string;
};

export const otherProjects: ArchivedProject[] = [
  {
    title: "Fresh Connection",
    summary: "Produce storefront and inventory dashboard with order tracking and sales reports.",
  },
  {
    title: "Barangay Information Management System",
    summary: "Resident records, document issuance, and service request tracking for a local government office.",
  },
  {
    title: "Focusly",
    summary: "Task planning with Kanban boards, Pomodoro sessions, and productivity tracking.",
    source: "https://github.com/solorankYT/taskmanagement",
  },
  {
    title: "UniTrack",
    summary: "School uniform and book storefront with checkout and stock tracking.",
    source: "https://github.com/solorankYT/unitrackk",
  },
  {
    title: "Ulam Generator",
    summary: "Meal suggestions based on the user’s preferences.",
    source: "https://github.com/solorankYT/ulamgenerator",
  },
];
