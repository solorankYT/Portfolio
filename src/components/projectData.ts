export type ProjectImage = {
  file: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ProjectCategory = "client" | "personal";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  tags: string[];
  images: [ProjectImage, ...ProjectImage[]];
  source?: string;
};

export const projects: Project[] = [
  {
    id: "hotel-reservation",
    title: "Hotel Reservation and Billing System",
    category: "client",
    summary:
      "A Laravel capstone project that connects online reservations with front-desk operations. Guests can check room availability and manage bookings. Staff can look up reservations, record payments, and run occupancy and revenue reports.",
    tags: ["Laravel 12", "HTML", "JavaScript", "API", "CSS"],
    images: [
      {
        file: "hotel-home.webp",
        alt: "Guest-facing hotel website landing screen",
        width: 1280,
        height: 628,
        caption: "Guest-facing homepage.",
      },
      {
        file: "hotel.webp",
        alt: "Hotel booking calendar with check-in, check-out, guest count, and availability controls",
        width: 960,
        height: 640,
        caption: "Guest-facing availability calendar.",
      },
    ],
    source: "https://github.com/solorankYT/HRBS",
  },
  {
    id: "fresh-connection",
    title: "Fresh Connection – E-Commerce & Inventory Management System",
    category: "client",
    summary:
      "A customer storefront and inventory system for a fresh produce business. The application combines product and order management, sales reports, promotions, and a role-based administrative dashboard.",
    tags: ["Laravel 12", "React", "MySQL", "Inertia.js", "Tailwind CSS", "JavaScript", "REST API"],
    images: [
      {
        file: "fresh-connection.webp",
        alt: "Fresh Connection storefront for fruit and vegetable products",
        width: 1076,
        height: 619,
      },
      {
        file: "fresh-product-form.webp",
        alt: "Fresh Connection product entry form",
        width: 398,
        height: 592,
      },
    ],
  },
  {
    id: "barangay-ims",
    title: "Barangay Information Management System",
    category: "client",
    summary:
      "A local government records system with resident profiles, document issuance, and service request tracking. Staff can view and manage these records from an administrative dashboard.",
    tags: ["Laravel 12", "React", "Inertia.js", "CSS"],
    images: [
      {
        file: "barangay.webp",
        alt: "Barangay Information Management System home page",
        width: 1280,
        height: 646,
      },
      {
        file: "barangay-map.webp",
        alt: "Evacuation map in the Barangay Information Management System",
        width: 1180,
        height: 564,
      },
    ],
  },
  {
    id: "focusly",
    title: "Focusly",
    category: "personal",
    summary:
      "A productivity app with Kanban boards, Pomodoro focus sessions, and progress tracking.",
    tags: ["Laravel 12", "React", "Inertia.js", "MySQL", "shadcn/ui"],
    images: [
      {
        file: "focusly.webp",
        alt: "Focusly task management interface",
        width: 1280,
        height: 587,
      },
    ],
    source: "https://github.com/solorankYT/taskmanagement",
  },
  {
    id: "unitrack",
    title: "Unitrack",
    category: "personal",
    summary:
      "A school uniform and book storefront with multi-step checkout and an inventory dashboard for tracking stock.",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    images: [
      {
        file: "unitrack.webp",
        alt: "Unitrack online storefront",
        width: 601,
        height: 330,
      },
    ],
    source: "https://github.com/solorankYT/unitrackk",
  },
  {
    id: "ulam-generator",
    title: "Ulam Generator",
    category: "personal",
    summary: "A meal suggestion app that recommends dishes based on the user’s preferences.",
    tags: ["Next.js", "Firebase", "shadcn/ui"],
    images: [
      {
        file: "ulam-generator.webp",
        alt: "Ulam Generator meal suggestion interface",
        width: 947,
        height: 529,
      },
    ],
    source: "https://github.com/solorankYT/ulamgenerator",
  },
  {
    id: "salapi",
    title: "Salapi",
    category: "personal",
    summary:
      "An offline budgeting app that stores data on the device. It tracks income, expenses, and transfers across bank accounts, e-wallets, and cash, with a calendar for upcoming bills.",
    tags: ["React", "TypeScript", "SQLite WASM", "PWA"],
    images: [
      {
        file: "salapi-accounts.webp",
        alt: "Salapi Accounts screen with six demo account cards for banks, e-wallets, and cash",
        width: 1130,
        height: 998,
        caption: "Account cards and balances from a demo wallet.",
      },
      {
        file: "salapi-overview.webp",
        alt: "Salapi mobile overview with a demo balance, upcoming bill, and recent activity",
        width: 720,
        height: 1566,
        caption: "Mobile overview with sample balances and a bill reminder.",
      },
      {
        file: "salapi-calendar.webp",
        alt: "Salapi mobile calendar with sample bill dates and daily spending",
        width: 720,
        height: 1566,
        caption: "Monthly calendar with sample bills and spending.",
      },
      {
        file: "salapi-transfer.webp",
        alt: "Salapi mobile transfer form with demo GCash and Cash accounts",
        width: 720,
        height: 1566,
        caption: "Draft transfer between two demo accounts.",
      },
    ],
  },
  {
    id: "laundry-pos",
    title: "Laundry POS",
    category: "personal",
    summary:
      "A point-of-sale app for laundry shops. Staff can create orders, print claim slips, record payments, and track pickups. Managers can review the day's order activity and collections.",
    tags: ["React", "Supabase", "PostgreSQL"],
    images: [
      {
        file: "laundry-orders.webp",
        alt: "Laundry POS order queue with sample orders, statuses, and payment actions",
        width: 1240,
        height: 720,
        caption: "Order queue with sample orders.",
      },
      {
        file: "laundry-dashboard.webp",
        alt: "Laundry POS manager dashboard showing cash and GCash collections and orders ready for pickup",
        width: 1240,
        height: 810,
        caption: "Manager dashboard with sample daily collections and pickups.",
      },
      {
        file: "laundry-payment.webp",
        alt: "Laundry POS payment drawer for a sample order with Cash selected",
        width: 420,
        height: 571,
        caption: "Recording a cash payment for a sample order.",
      },
    ],
    source: "https://github.com/solorankYT/laundry-pos",
  },
];
