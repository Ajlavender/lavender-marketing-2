/** Customer-facing catalogue, independent of homepage services and pricing copy. */
export type CatalogueService = { slug: string; title: string; short: string; image: string; category: string; plan: string | null; planText: string; problem: string; benefits: string[]; setup: string[]; example: string; note: string; faqs: {q: string; a: string}[] };
export const serviceCategories = [
  {
    "title": "Get More Customers",
    "description": "Help more people find your business and turn their interest into paying customers."
  },
  {
    "title": "Better Customer Service",
    "description": "Make it easier for customers to reach you, book with you, and get the help they need."
  },
  {
    "title": "Marketing & Online Reputation",
    "description": "Stay visible, build trust, and give past customers more reasons to come back."
  },
  {
    "title": "AI & Business Automation",
    "description": "Let technology handle repetitive work while you focus on your customers."
  }
] as const;
export const serviceCatalogue: CatalogueService[] = [
  {
    "slug": "/website-redesign",
    "title": "A Website Built to Win Customers",
    "short": "A professional website designed to turn visitors into calls, enquiries, and bookings.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/websites.webp",
    "category": "Get More Customers",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "A good-looking website is not enough if customers cannot see what you do or how to reach you.",
    "benefits": [
      "Clear service pages and calls to action",
      "A fast, readable experience on phones",
      "Your own business, photos and voice"
    ],
    "setup": [
      "Understand your customers and services",
      "Design your homepage for a free 7-day preview",
      "Refine the design with your feedback",
      "Launch and support your live website"
    ],
    "example": "A homeowner finds your service page, sees a real project, and requests a quote without searching for your phone number.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We understand your customers and services, then design your homepage for a free 7-day preview. Refine the design with your feedback. Launch and support your live website."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Essentials includes this service. Your website design is free; if you choose to launch, Essentials is $297/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed."
      }
    ]
  },
  {
    "slug": "/local-seo",
    "title": "Get Found on Google",
    "short": "Improve your Google Business Profile and local visibility so nearby customers can discover you.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/local-seo.webp",
    "category": "Get More Customers",
    "plan": "Growth & Scale",
    "planText": "Starter in Growth · Advanced in Scale",
    "problem": "Outdated listings and an incomplete business profile can make your business harder to find and trust.",
    "benefits": [
      "Consistent business details across directories",
      "A complete Google Business Profile",
      "Ongoing improvements with the advanced tier"
    ],
    "setup": [
      "Review your profile and business details",
      "Set up key directory listings",
      "Optimise your Google Business Profile",
      "Maintain content and profile updates with Scale"
    ],
    "example": "A nearby customer searches for your service and finds accurate hours, current photos and a clear way to contact you.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Search positions and customer enquiries are not guaranteed.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We review your profile and business details, then set up key directory listings. Optimise your Google Business Profile. Maintain content and profile updates with Scale."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Growth includes key directory listings and Google Business Profile setup. Scale adds ongoing optimisation, regular content updates and full profile management."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Search positions and customer enquiries are not guaranteed."
      }
    ]
  },
  {
    "slug": "/instant-lead-response",
    "title": "Respond to New Leads Instantly",
    "short": "Automatically text or email people who request information before they lose interest.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/automations.webp",
    "category": "Get More Customers",
    "plan": null,
    "planText": "Setup and pricing agreed with you",
    "problem": "A new enquiry can arrive while you are on a job. Leaving it unanswered makes the next step uncertain.",
    "benefits": [
      "An immediate acknowledgement",
      "A useful next step, not just a receipt",
      "A notification for the person who will reply"
    ],
    "setup": [
      "Choose the enquiry sources to connect",
      "Write your first-response message",
      "Set routing and business-hour rules",
      "Test the response and staff notification"
    ],
    "example": "A quote request arrives at 2 p.m. The customer receives a thank-you message and booking link while your team gets the enquiry.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We choose the enquiry sources to connect, then write your first-response message. Set routing and business-hour rules. Test the response and staff notification."
      },
      {
        "q": "Which plan includes this service?",
        "a": "We agree the scope and pricing with you before setup. Being in our services catalogue does not mean this capability is included in Essentials."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules."
      }
    ]
  },
  {
    "slug": "/follow-up-automation",
    "title": "Follow Up Without Lifting a Finger",
    "short": "Keep in touch with interested prospects automatically, even when you're busy.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/automations.webp",
    "category": "Get More Customers",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "One unanswered quote should not mean a good enquiry is forgotten. A consistent follow-up keeps the conversation moving.",
    "benefits": [
      "Short messages in your business voice",
      "A sensible schedule for each enquiry",
      "Stop rules when someone replies or opts out"
    ],
    "setup": [
      "Map your enquiry and quote stages",
      "Write and approve the follow-up messages",
      "Set timing, reply and opt-out rules",
      "Review the sequence with your team"
    ],
    "example": "A customer has not replied to a quote. A friendly reminder goes out; when they answer, the automated follow-up stops.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We map your enquiry and quote stages, then write and approve the follow-up messages. Set timing, reply and opt-out rules. Review the sequence with your team."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Essentials includes this service. Your website design is free; if you choose to launch, Essentials is $297/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules."
      }
    ]
  },
  {
    "slug": "/sales-calling",
    "title": "Make More Sales Calls, Faster",
    "short": "Work through your calling list without searching for every contact or manually entering phone numbers.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/crm-pipeline.webp",
    "category": "Get More Customers",
    "plan": null,
    "planText": "Setup and pricing agreed with you",
    "problem": "Switching between spreadsheets, contact records and your phone slows down a focused calling session.",
    "benefits": [
      "An organised calling queue",
      "Contact details and notes at hand",
      "A clear outcome and next task after each call"
    ],
    "setup": [
      "Select the contacts you are allowed to call",
      "Connect your calling number",
      "Configure the queue and call outcomes",
      "Train your team on notes and follow-up"
    ],
    "example": "Your team opens a calling queue, reviews the next contact, makes the call and records a follow-up without hunting through a spreadsheet.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We select the contacts you are allowed to call, then connect your calling number. Configure the queue and call outcomes. Train your team on notes and follow-up."
      },
      {
        "q": "Which plan includes this service?",
        "a": "We agree the scope and pricing with you before setup. Being in our services catalogue does not mean this capability is included in Essentials."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules."
      }
    ]
  },
  {
    "slug": "/missed-call-text-back",
    "title": "Never Lose a Missed Call",
    "short": "If you miss a call, automatically text the caller so they can still reach your business.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/missed-call.webp",
    "category": "Better Customer Service",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "You cannot always answer the phone. A missed caller still needs an easy way to tell you what they need.",
    "benefits": [
      "A friendly text after an unanswered call",
      "A reply that reaches your inbox",
      "Rules that avoid repeated messages"
    ],
    "setup": [
      "Review your phone setup",
      "Connect a texting-enabled number",
      "Approve the text-back and repeat-call rules",
      "Test unanswered calls and customer replies"
    ],
    "example": "You miss a call while working. The caller receives a text asking how you can help and replies with their service request.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We review your phone setup, then connect a texting-enabled number. Approve the text-back and repeat-call rules. Test unanswered calls and customer replies."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Essentials includes this service. Your website design is free; if you choose to launch, Essentials is $297/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules."
      }
    ]
  },
  {
    "slug": "/online-booking",
    "title": "Let Customers Book Online 24/7",
    "short": "Customers choose their own appointment times without having to call your business.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/booking.webp",
    "category": "Better Customer Service",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "Phone tag makes a simple appointment take longer than it should. Online booking lets customers choose from your real availability.",
    "benefits": [
      "Availability that follows your working hours",
      "Calendar connections and booking buffers",
      "A clear confirmation after booking"
    ],
    "setup": [
      "Set hours, appointment types and buffers",
      "Connect the calendars you use",
      "Add booking to your website and messages",
      "Test confirmations and calendar conflicts"
    ],
    "example": "After dinner, a customer chooses an available appointment for next week. The booking appears on your connected calendar.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We set hours, appointment types and buffers, then connect the calendars you use. Add booking to your website and messages. Test confirmations and calendar conflicts."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Essentials includes this service. Your website design is free; if you choose to launch, Essentials is $297/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed."
      }
    ]
  },
  {
    "slug": "/appointment-reminders",
    "title": "Fewer No-Shows, Less Wasted Time",
    "short": "Automatically remind customers about upcoming appointments through text and email.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/booking.webp",
    "category": "Better Customer Service",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "A forgotten appointment leaves an empty slot and wasted preparation. Timely reminders give customers a chance to confirm or rearrange.",
    "benefits": [
      "Reminders timed around your appointments",
      "Appointment details in every message",
      "An easier way to reschedule"
    ],
    "setup": [
      "Choose the calendars and appointment types",
      "Agree the reminder timing",
      "Write confirmation and rescheduling messages",
      "Test changes and cancelled appointments"
    ],
    "example": "A customer receives a reminder the day before their visit with the time, location and a way to rearrange if needed.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We choose the calendars and appointment types, then agree the reminder timing. Write confirmation and rescheduling messages. Test changes and cancelled appointments."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Automatic text and email appointment reminders are included with online booking in Essentials. We confirm your calendars, timing and any usage charges before setup."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules."
      }
    ]
  },
  {
    "slug": "/unified-inbox",
    "title": "All Your Messages in One Inbox",
    "short": "Manage connected Facebook Messenger, Instagram DMs, texts, emails, and website conversations together.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/unified-inbox.webp",
    "category": "Better Customer Service",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "Messages spread across apps are easy to miss. Your team needs one place to see who has replied and who is still waiting.",
    "benefits": [
      "Connected channels in a shared inbox",
      "Customer history beside the conversation",
      "Team assignments and mobile access"
    ],
    "setup": [
      "Connect eligible messaging accounts",
      "Set permissions and team assignments",
      "Configure notifications and mobile access",
      "Walk through real conversation scenarios"
    ],
    "example": "A customer sends an Instagram message and later emails. Your team can review their contact history and assign the conversation to the right person.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We connect eligible messaging accounts, then set permissions and team assignments. Configure notifications and mobile access. Walk through real conversation scenarios."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Essentials includes this service. Your website design is free; if you choose to launch, Essentials is $297/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed."
      }
    ]
  },
  {
    "slug": "/chat-widget",
    "title": "Turn Website Visitors Into Conversations",
    "short": "Let customers ask questions or request help directly from your website with live chat.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/chat-widget.webp",
    "category": "Better Customer Service",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "A visitor with one unanswered question may leave without making an enquiry. Website chat gives them a simple way to ask.",
    "benefits": [
      "A chat widget styled to your business",
      "Pre-loaded answers to common questions",
      "Live handoff and contact capture"
    ],
    "setup": [
      "Choose your common questions",
      "Approve answers and offline messages",
      "Connect the widget to your inbox",
      "Test live replies and out-of-hours enquiries"
    ],
    "example": "A visitor asks whether you serve their town. They see your approved answer or send a message for your team to reply.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We choose your common questions, then approve answers and offline messages. Connect the widget to your inbox. Test live replies and out-of-hours enquiries."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Essentials includes this service. Your website design is free; if you choose to launch, Essentials is $297/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed."
      }
    ]
  },
  {
    "slug": "/review-automation",
    "title": "Get More Google & Facebook Reviews",
    "short": "Automatically invite customers to leave reviews after appointments or completed jobs.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/reviews.webp",
    "category": "Marketing & Online Reputation",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "Customers often mean to leave a review and forget. Consistent, fair invitations make feedback easier to share.",
    "benefits": [
      "Requests after completed work",
      "Direct links to your connected review profiles",
      "Honest feedback from real customers"
    ],
    "setup": [
      "Connect your Google and Facebook profiles",
      "Choose the completed-work trigger",
      "Approve a neutral review invitation",
      "Set reasonable timing and review reporting"
    ],
    "example": "When a job is complete, the customer receives a short invitation with a link to leave an honest review. Every eligible customer receives the same opportunity.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. No fake reviews, incentives or filtering customers by how positive their feedback is. Review ratings are never guaranteed.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We connect your Google and Facebook profiles, then choose the completed-work trigger. Approve a neutral review invitation. Set reasonable timing and review reporting."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Essentials includes this service. Your website design is free; if you choose to launch, Essentials is $297/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. No fake reviews, incentives or filtering customers by how positive their feedback is. Review ratings are never guaranteed."
      }
    ]
  },
  {
    "slug": "/social-media-publishing",
    "title": "One Post. All Your Social Media.",
    "short": "Create once and publish to connected Facebook, Instagram, LinkedIn, Google, and other supported accounts.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/reporting.webp",
    "category": "Marketing & Online Reputation",
    "plan": null,
    "planText": "Setup and pricing agreed with you",
    "problem": "Posting the same update in several apps takes time. Planning content in one place makes it easier to keep your accounts current.",
    "benefits": [
      "A shared publishing calendar",
      "Posts adapted for connected accounts",
      "Draft approvals before publishing"
    ],
    "setup": [
      "Connect supported business accounts",
      "Set who writes and approves posts",
      "Build a practical content calendar",
      "Check formats and schedule approved posts"
    ],
    "example": "You prepare a finished-project update, adjust its caption for each connected account and schedule it from one calendar.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Account permissions, supported post formats and network publishing rules vary.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We connect supported business accounts, then set who writes and approves posts. Build a practical content calendar. Check formats and schedule approved posts."
      },
      {
        "q": "Which plan includes this service?",
        "a": "We agree the scope and pricing with you before setup. Being in our services catalogue does not mean this capability is included in Essentials."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Account permissions, supported post formats and network publishing rules vary."
      }
    ]
  },
  {
    "slug": "/text-email-marketing",
    "title": "Stay in Touch With Text & Email",
    "short": "Send promotions, business updates, newsletters, and special offers to your customers.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/unified-inbox.webp",
    "category": "Marketing & Online Reputation",
    "plan": null,
    "planText": "Setup and pricing agreed with you",
    "problem": "Past customers may not remember every service you offer. Relevant updates help you stay in touch without relying on social media reach.",
    "benefits": [
      "Messages for the right customer groups",
      "Branded email and concise text campaigns",
      "Consent and unsubscribe handling"
    ],
    "setup": [
      "Review your contact list and consent",
      "Choose useful customer segments",
      "Create and approve message templates",
      "Test delivery and opt-out handling"
    ],
    "example": "Customers who opted in receive a seasonal service reminder with a clear offer and a straightforward way to unsubscribe.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We review your contact list and consent, then choose useful customer segments. Create and approve message templates. Test delivery and opt-out handling."
      },
      {
        "q": "Which plan includes this service?",
        "a": "We agree the scope and pricing with you before setup. Being in our services catalogue does not mean this capability is included in Essentials."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules."
      }
    ]
  },
  {
    "slug": "/customer-reactivation",
    "title": "Bring Back Past Customers",
    "short": "Reconnect with previous customers through personalised offers and timely reminders.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/automations.webp",
    "category": "Marketing & Online Reputation",
    "plan": "Scale",
    "planText": "Included in Scale",
    "problem": "Your existing customers already know your business. A relevant reason to return can restart a conversation that went quiet.",
    "benefits": [
      "Segments based on customer history",
      "Timely reminders or relevant offers",
      "Reply routing to your team"
    ],
    "setup": [
      "Review customer history and permission",
      "Choose who should receive the campaign",
      "Approve the offer and follow-up",
      "Track replies and stop rules"
    ],
    "example": "A previous customer who is due for another service receives a relevant reminder. Their reply reaches your team for a personal follow-up.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We review customer history and permission, then choose who should receive the campaign. Approve the offer and follow-up. Track replies and stop rules."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Scale includes database reactivation campaigns alongside everything in Growth. Scale starts at $997/month plus ad spend."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Messages and calls require appropriate consent, with opt-out and contact-frequency rules."
      }
    ]
  },
  {
    "slug": "/website-review-display",
    "title": "Show Off Your Best Customer Reviews",
    "short": "Display real Google and Facebook reviews directly on your website to build trust.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/reviews.webp",
    "category": "Marketing & Online Reputation",
    "plan": null,
    "planText": "Setup and pricing agreed with you",
    "problem": "Visitors want to hear from people who have used your business. Real, attributed reviews provide useful context alongside your service details.",
    "benefits": [
      "Reviews from connected profiles",
      "A display that fits your website",
      "Clear sources and reviewer attribution"
    ],
    "setup": [
      "Connect supported review sources",
      "Choose the website locations",
      "Style and configure the review display",
      "Check updates and mobile readability"
    ],
    "example": "A visitor comparing your services sees genuine customer feedback beside your enquiry button, with the review source clearly identified.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Review availability depends on connected sources and their display permissions. We never manufacture or rewrite customer reviews.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We connect supported review sources, then choose the website locations. Style and configure the review display. Check updates and mobile readability."
      },
      {
        "q": "Which plan includes this service?",
        "a": "We agree the scope and pricing with you before setup. Being in our services catalogue does not mean this capability is included in Essentials."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. Review availability depends on connected sources and their display permissions. We never manufacture or rewrite customer reviews."
      }
    ]
  },
  {
    "slug": "/voice-ai-receptionist",
    "title": "Your Own 24/7 AI Receptionist",
    "short": "Answer calls, respond to common questions, collect customer details, and help book appointments while you're busy.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/ai-receptionist.webp",
    "category": "AI & Business Automation",
    "plan": "Growth",
    "planText": "Included in Growth",
    "problem": "A ringing phone interrupts the job in front of you. An AI receptionist can handle routine enquiries and pass the important details to your team.",
    "benefits": [
      "Business-specific greetings and answers",
      "Customer details and call summaries",
      "Booking help and human escalation"
    ],
    "setup": [
      "Agree call routing and escalation rules",
      "Train on your approved business information",
      "Connect booking and handoff options",
      "Review test calls and refine responses"
    ],
    "example": "An after-hours caller asks about your services. The receptionist collects their details, offers an eligible appointment and sends your team a summary.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. AI can make mistakes; approved information, human handoff and regular reviews are part of the setup. Additional channels depend on eligibility and configuration.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We agree call routing and escalation rules, then train on your approved business information. Connect booking and handoff options. Review test calls and refine responses."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Growth includes this service, alongside everything in Essentials. Growth is $497/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. AI can make mistakes; approved information, human handoff and regular reviews are part of the setup. Additional channels depend on eligibility and configuration."
      }
    ]
  },
  {
    "slug": "/ai-chat-widget",
    "title": "An AI Assistant That Replies for You",
    "short": "Automatically answer customer questions through supported text and messaging channels.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/chat-widget.webp",
    "category": "AI & Business Automation",
    "plan": "Growth",
    "planText": "Included in Growth",
    "problem": "Routine questions arrive when your team is busy or offline. A trained AI assistant can answer common enquiries and recognise when a person needs to take over.",
    "benefits": [
      "Answers based on approved information",
      "Enquiry qualification and booking help",
      "A handoff when human judgement is needed"
    ],
    "setup": [
      "Confirm supported channels and scope",
      "Train on services, policies and FAQs",
      "Set limits and human-handoff rules",
      "Review transcripts and retrain monthly"
    ],
    "example": "A customer asks about service availability through a supported channel. The assistant answers from your approved information and routes an unusual request to your team.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. AI can make mistakes; approved information, human handoff and regular reviews are part of the setup. Additional channels depend on eligibility and configuration.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We confirm supported channels and scope, then train on services, policies and faqs. Set limits and human-handoff rules. Review transcripts and retrain monthly."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Growth includes this service, alongside everything in Essentials. Growth is $497/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. AI can make mistakes; approved information, human handoff and regular reviews are part of the setup. Additional channels depend on eligibility and configuration."
      }
    ]
  },
  {
    "slug": "/crm-pipeline",
    "title": "Know Where Every Customer Stands",
    "short": "See who needs a call, who's waiting on a quote, and who's ready to buy in one organised place.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/crm-pipeline.webp",
    "category": "AI & Business Automation",
    "plan": "Essentials",
    "planText": "Included in Essentials",
    "problem": "Scattered notes make it hard to know what should happen next. A simple customer pipeline turns those notes into a clear working list.",
    "benefits": [
      "Stages that match how you sell",
      "Contact history, notes and tasks",
      "Ownership of the next follow-up"
    ],
    "setup": [
      "Map your sales and service stages",
      "Import agreed contact records",
      "Set task and assignment rules",
      "Train your team on keeping records current"
    ],
    "example": "Your morning pipeline shows new enquiries, quotes awaiting replies and booked work. Each contact has a named owner and next action.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We map your sales and service stages, then import agreed contact records. Set task and assignment rules. Train your team on keeping records current."
      },
      {
        "q": "Which plan includes this service?",
        "a": "Essentials includes this service. Your website design is free; if you choose to launch, Essentials is $297/month."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed."
      }
    ]
  },
  {
    "slug": "/estimates-invoices-payments",
    "title": "Send Estimates, Invoices & Get Paid",
    "short": "Send quotes, collect payments through online links, and follow up on unpaid invoices.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/crm-pipeline.webp",
    "category": "AI & Business Automation",
    "plan": null,
    "planText": "Setup and pricing agreed with you",
    "problem": "Quotes, invoices and payment reminders should not be spread across disconnected documents. A connected process makes the next step clearer for everyone.",
    "benefits": [
      "Branded estimates and invoices",
      "Online payment links when configured",
      "Payment-status follow-up"
    ],
    "setup": [
      "Review your quoting and billing process",
      "Configure templates and payment connection",
      "Agree reminder and approval rules",
      "Test the customer journey and payment status"
    ],
    "example": "You send an estimate, turn the agreed work into an invoice and give the customer a secure payment link. An unpaid balance triggers an approved reminder.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. A supported payment provider is required. Processing fees and tax settings are confirmed separately; this does not replace accounting advice.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We review your quoting and billing process, then configure templates and payment connection. Agree reminder and approval rules. Test the customer journey and payment status."
      },
      {
        "q": "Which plan includes this service?",
        "a": "We agree the scope and pricing with you before setup. Being in our services catalogue does not mean this capability is included in Essentials."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed. A supported payment provider is required. Processing fees and tax settings are confirmed separately; this does not replace accounting advice."
      }
    ]
  },
  {
    "slug": "/business-automation",
    "title": "Put Repetitive Work on Autopilot",
    "short": "Automate routine customer updates, internal notifications, follow-ups, and everyday tasks.",
    "image": "https://fnpoqmrynnxwvgyhgldk.supabase.co/storage/v1/object/public/media/illustrations/automations.webp",
    "category": "AI & Business Automation",
    "plan": null,
    "planText": "Setup and pricing agreed with you",
    "problem": "Repeating the same update or assigning the same task by hand takes time. Clear workflow rules let those routine steps happen consistently.",
    "benefits": [
      "Customer updates at the right stage",
      "Internal alerts and task assignments",
      "Exceptions that stay under human control"
    ],
    "setup": [
      "Choose one repeatable process",
      "Map triggers, actions and exceptions",
      "Connect the relevant records and channels",
      "Test the workflow before switching it on"
    ],
    "example": "When a customer accepts a quote, the workflow assigns a preparation task, alerts the team and sends an approved next-steps message.",
    "note": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed.",
    "faqs": [
      {
        "q": "What do you set up for my business?",
        "a": "We choose one repeatable process, then map triggers, actions and exceptions. Connect the relevant records and channels. Test the workflow before switching it on."
      },
      {
        "q": "Which plan includes this service?",
        "a": "We agree the scope and pricing with you before setup. Being in our services catalogue does not mean this capability is included in Essentials."
      },
      {
        "q": "What should I know before getting started?",
        "a": "Availability depends on your configured services and connected accounts. We confirm the setup and any usage charges before you proceed."
      }
    ]
  }
];
export function catalogueService(slug: string) { return serviceCatalogue.find(service => service.slug === slug); }
