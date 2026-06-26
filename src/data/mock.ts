// GHO Academy — Mock Data
// Single source of truth for all demo state.
// All pages import from here.

export const DEMO_USER = {
  firstName:        "Amara",
  lastName:         "Okonkwo",
  email:            "amara@who.int",
  role:             "Public Health Specialist",
  organisation:     "WHO Nigeria",
  country:          "Nigeria",
  cohort:           "Cohort 1",
  avatar_initials:  "AO",
  progress_percent: 30,
  completed_modules:[1],
  current_module:   2,
  tier:             "Early Bird",
  enrolled_date:    "2026-06-15",
  cert_eligible:    false,
  progress:         30,
  name:             "Amara Okonkwo",
};

export const DEMO_CREDENTIALS = {
  email:    "amara@who.int",
  password: "demo2026",
};

export const COHORT_STATS = {
  enrolled:                 18,
  capacity:                 50,
  early_bird_seats_taken:   14,
  standard_seats_taken:     4,
  revenue_usd:              14154,
  revenue_target_usd:       20000,
  module_1_attendance_rate: 91,
};

export const COHORT_MEMBERS = [
  { initials: "AO", name: "Amara Okonkwo",      role: "Public Health Specialist", org: "WHO Nigeria",         country: "Nigeria",  flag: "🇳🇬" },
  { initials: "SK", name: "Samuel Kipkoech",    role: "Research Scientist",        org: "KEMRI",               country: "Kenya",    flag: "🇰🇪" },
  { initials: "NM", name: "Nadia Mukasine",     role: "Health Policy Advisor",     org: "Rwanda MoH",          country: "Rwanda",   flag: "🇷🇼" },
  { initials: "PB", name: "Priya Bhattacharya", role: "Global Health Consultant",  org: "Independent",         country: "India",    flag: "🇮🇳" },
  { initials: "TA", name: "Temi Adeyemi",       role: "NGO Programme Manager",     org: "MSF West Africa",     country: "Ghana",    flag: "🇬🇭" },
  { initials: "CL", name: "Chidi Lebrun",       role: "Medical Officer",           org: "IPPF Cameroon",       country: "Cameroon", flag: "🇨🇲" },
  { initials: "GS", name: "Grace Ssemakula",    role: "Health Economist",          org: "Makerere University", country: "Uganda",   flag: "🇺🇬" },
  { initials: "MA", name: "Mohamed Al-Hassan",  role: "Policymaker",               org: "Sudan MoH",           country: "Sudan",    flag: "🇸🇩" },
];

export const RECENT_REGISTRATIONS = [
  { id:1,  name:"Amara Okonkwo",      email:"amara@who.int",          country:"Nigeria",   org:"WHO Nigeria",        tier:"Early Bird", paid:true,  mod1:true,  cert:false, date:"2026-06-15" },
  { id:2,  name:"Samuel Kipkoech",    email:"samuel@kemri.go.ke",     country:"Kenya",     org:"KEMRI",              tier:"Early Bird", paid:true,  mod1:true,  cert:false, date:"2026-06-15" },
  { id:3,  name:"Nadia Mukasine",     email:"nadia@moh.gov.rw",       country:"Rwanda",    org:"Rwanda MoH",         tier:"Early Bird", paid:true,  mod1:true,  cert:false, date:"2026-06-16" },
  { id:4,  name:"Priya Bhattacharya", email:"priya@globalhealth.com", country:"India",     org:"Independent",        tier:"Standard",   paid:true,  mod1:true,  cert:false, date:"2026-06-17" },
  { id:5,  name:"Temi Adeyemi",       email:"temi@msf.org",           country:"Ghana",     org:"MSF West Africa",    tier:"Early Bird", paid:true,  mod1:false, cert:false, date:"2026-06-18" },
  { id:6,  name:"Chidi Lebrun",       email:"chidi@ippf.org",         country:"Cameroon",  org:"IPPF West Africa",   tier:"Early Bird", paid:true,  mod1:true,  cert:false, date:"2026-06-19" },
  { id:7,  name:"Grace Ssemakula",    email:"grace@makerere.ac.ug",   country:"Uganda",    org:"Makerere University",tier:"Early Bird", paid:true,  mod1:true,  cert:false, date:"2026-06-20" },
  { id:8,  name:"Mohamed Al-Hassan",  email:"m.alhassan@moh.sd",      country:"Sudan",     org:"Sudan MoH",          tier:"Standard",   paid:true,  mod1:false, cert:false, date:"2026-06-21" },
];

export const DISCUSSION_POSTS = [
  { initials:"AO", name:"Amara O.",  country:"Nigeria", time:"2h ago",    msg:"The interplay between technical expertise and leadership capacity is something I experience daily. This module gave me a framework I had felt but never articulated — the difference between working in a system and working on a system." },
  { initials:"SK", name:"Samuel K.", country:"Kenya",   time:"5h ago",    msg:"The African CDC case study was a revelation. Responding to immediate crisis while reshaping the institutional architecture underneath — that is the real work of systems leadership." },
  { initials:"NM", name:"Nadia M.",  country:"Rwanda",  time:"Yesterday", msg:"Question for the cohort: how do we apply systems thinking when we are junior and don't control the structural levers? Would appreciate strategies from those who have navigated this." },
];

export const DISCUSSION_THREADS = [
  { title:"Welcome — introduce yourself to Cohort 1",                         replies:22, views:89, hot:true  },
  { title:"Module 1 reflection: where have you seen systems change fail?",    replies:14, views:67, hot:false },
  { title:"Recommended AI tools for public health research — crowd-sourced",  replies:8,  views:41, hot:false },
  { title:"Fundraising strategies that actually worked — share yours",         replies:6,  views:28, hot:false },
  { title:"Capstone ideas brainstorm — what challenges are you considering?",  replies:11, views:55, hot:false },
];

export const SESSION_SCHEDULE = [
  { num:1,  module:"Leadership & Systems Change",          date:"Tue 8 Jul 2026",  time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"done",     zoom:"#" },
  { num:2,  module:"Innovation & Entrepreneurship",        date:"Tue 15 Jul 2026", time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"next",     zoom:"#" },
  { num:3,  module:"Think, Read, Write & Communicate",     date:"Tue 22 Jul 2026", time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"upcoming", zoom:"#" },
  { num:4,  module:"Policy, Politics & Diplomacy",         date:"Tue 29 Jul 2026", time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"upcoming", zoom:"#" },
  { num:5,  module:"Partnerships & Networking",            date:"Tue 5 Aug 2026",  time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"upcoming", zoom:"#" },
  { num:6,  module:"Fundraising & Resource Mobilization",  date:"Tue 12 Aug 2026", time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"upcoming", zoom:"#" },
  { num:7,  module:"AI for Global Health",                 date:"Tue 19 Aug 2026", time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"upcoming", zoom:"#" },
  { num:8,  module:"Responsible AI & Prompt Engineering",  date:"Tue 26 Aug 2026", time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"upcoming", zoom:"#" },
  { num:9,  module:"Critical & Systems Thinking",          date:"Tue 2 Sep 2026",  time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"upcoming", zoom:"#" },
  { num:10, module:"Careers, Value & Leadership Mindset",  date:"Tue 9 Sep 2026",  time:"16:00 WAT / 17:00 EAT / 15:00 GMT", status:"upcoming", zoom:"#" },
];
