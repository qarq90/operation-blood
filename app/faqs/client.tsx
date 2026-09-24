"use client";

type FAQ = {
    question: string;
    answer: React.ReactNode;
};

type FAQSection = {
    id: string;
    number: string;
    title: string;
    faqs: FAQ[];
};

const sections: FAQSection[] = [
    {
        id: "general",
        number: "01",
        title: "General",
        faqs: [
            {
                question: "What is HAEMA?",
                answer: (
                    <p>
                        HAEMA is a digital blood donation and blood request
                        platform designed to help connect donors, people
                        requiring blood, hospitals, blood banks, and donation
                        camps.
                    </p>
                ),
            },
            {
                question: "What can I do on HAEMA?",
                answer: (
                    <>
                        <p>
                            Depending on your account and available features,
                            you can:
                        </p>

                        <ul className="list-disc space-y-2 pl-6 mt-4">
                            <li>Register as a blood donor</li>
                            <li>Submit blood requests</li>
                            <li>Find blood availability</li>
                            <li>Discover donation camps</li>
                            <li>Receive blood request notifications</li>
                            <li>Manage your donation information</li>
                        </ul>
                    </>
                ),
            },
            {
                question: "Do I need an account to use HAEMA?",
                answer: (
                    <p>
                        Some publicly available information may be accessible
                        without an account. Features such as donor registration,
                        blood requests, and account-specific services may
                        require registration.
                    </p>
                ),
            },
        ],
    },

    {
        id: "donation",
        number: "02",
        title: "Blood Donation",
        faqs: [
            {
                question: "How do I register as a blood donor?",
                answer: (
                    <p>
                        Create or sign in to your HAEMA account and complete the
                        donor registration process. You may be asked for
                        information such as your name, age, blood group, contact
                        details, and other information required for the
                        registration process.
                    </p>
                ),
            },
            {
                question: "Does registering mean I am eligible to donate?",
                answer: (
                    <div className="space-y-4">
                        <p>
                            No. Completing donor registration does not
                            automatically mean that you are medically eligible
                            to donate blood.
                        </p>

                        <p className="text-foreground/75">
                            <strong>
                                Final donation eligibility must be determined by
                                qualified healthcare professionals.
                            </strong>
                        </p>
                    </div>
                ),
            },
            {
                question: "Can I see my donation history?",
                answer: (
                    <p>
                        If donation history is enabled for your account, you may
                        be able to view your recorded donation activity through
                        your account.
                    </p>
                ),
            },
            {
                question: "Where can I donate blood?",
                answer: (
                    <p>
                        HAEMA may provide information about blood donation
                        camps, hospitals, blood banks, and other participating
                        locations. Availability and schedules may change, so
                        important details should be verified with the relevant
                        organization.
                    </p>
                ),
            },
        ],
    },

    {
        id: "blood-requests",
        number: "03",
        title: "Blood Requests",
        faqs: [
            {
                question: "How do I request blood?",
                answer: (
                    <p>
                        Use the blood request feature and provide the required
                        information, such as blood group, location, quantity,
                        reason for the request, and urgency.
                    </p>
                ),
            },
            {
                question:
                    "Does submitting a request guarantee that I will receive blood?",
                answer: (
                    <p>
                        No. A blood request does not guarantee that compatible
                        blood, donors, hospitals, or blood banks will be
                        available.
                    </p>
                ),
            },
            {
                question: "Who can see my blood request?",
                answer: (
                    <p>
                        Depending on the request and platform configuration,
                        relevant information may be shared with potentially
                        matching donors, hospitals, blood banks, administrators,
                        or other authorized organizations to help coordinate the
                        request.
                    </p>
                ),
            },
            {
                question: "Can I update or cancel a blood request?",
                answer: (
                    <p>
                        If the relevant controls are available on your account,
                        you can update or manage your request through the
                        platform. Otherwise, contact the platform administrator
                        through the available support channels.
                    </p>
                ),
            },
        ],
    },

    {
        id: "emergency",
        number: "04",
        title: "Emergency Requests",
        faqs: [
            {
                question: "What is an emergency blood request?",
                answer: (
                    <p>
                        An emergency request allows a blood request to be marked
                        as urgent so that potentially matching donors or
                        organizations can be notified more quickly.
                    </p>
                ),
            },
            {
                question: "Is HAEMA an emergency medical service?",
                answer: (
                    <div className="space-y-4">
                        <p>
                            No. HAEMA is a technology and coordination platform
                            and does not replace emergency medical services.
                        </p>

                        <p className="text-foreground/75">
                            <strong>
                                In a life-threatening situation, immediately
                                contact the appropriate emergency medical
                                services and treating hospital.
                            </strong>
                        </p>
                    </div>
                ),
            },
            {
                question: "Will an emergency notification reach every donor?",
                answer: (
                    <p>
                        Not necessarily. Notifications depend on factors such as
                        user availability, notification settings, matching
                        information, connectivity, and the platform's
                        configuration.
                    </p>
                ),
            },
        ],
    },

    {
        id: "blood-inventory",
        number: "05",
        title: "Blood Inventory",
        faqs: [
            {
                question: "Is the blood stock information real-time?",
                answer: (
                    <p>
                        Blood inventory information may change rapidly because
                        of donations, transfusions, reservations, expiry,
                        testing, and other operational circumstances. Displayed
                        information should therefore be verified with the
                        relevant blood bank or hospital.
                    </p>
                ),
            },
            {
                question: "Can I reserve blood through HAEMA?",
                answer: (
                    <p>
                        HAEMA may provide blood availability and coordination
                        features, but displayed availability does not
                        necessarily constitute a confirmed reservation.
                    </p>
                ),
            },
            {
                question:
                    "Why might the displayed stock differ from the actual stock?",
                answer: (
                    <p>
                        Inventory can change quickly as blood is donated,
                        reserved, tested, transferred, used, or expires.
                        Information shown on the platform may therefore not
                        always reflect the latest operational status.
                    </p>
                ),
            },
        ],
    },

    {
        id: "camps",
        number: "06",
        title: "Donation Camps",
        faqs: [
            {
                question: "How do I find a blood donation camp?",
                answer: (
                    <p>
                        Use the donation camps section to browse available camps
                        and their published information, including dates,
                        locations, and schedules.
                    </p>
                ),
            },
            {
                question: "Can a donation camp change its schedule?",
                answer: (
                    <p>
                        Yes. Camp dates, venues, schedules, eligibility
                        requirements, and organizers may change. Verify
                        important details with the relevant organizer before
                        attending.
                    </p>
                ),
            },
            {
                question: "Does HAEMA organize all listed camps?",
                answer: (
                    <p>
                        Not necessarily. The platform may list camps organized
                        by approved or registered organizations.
                    </p>
                ),
            },
        ],
    },

    {
        id: "account",
        number: "07",
        title: "Account & Security",
        faqs: [
            {
                question: "How do I create an account?",
                answer: (
                    <p>
                        Select the registration option and provide the required
                        account information. You may need to verify certain
                        information before accessing account-specific features.
                    </p>
                ),
            },
            {
                question:
                    "What should I do if I think someone accessed my account?",
                answer: (
                    <p>
                        Secure your account immediately and contact the platform
                        administrator through the available support channels if
                        you believe your account has been accessed without
                        authorization.
                    </p>
                ),
            },
            {
                question: "Can I delete my account?",
                answer: (
                    <p>
                        Users may request account deactivation or deletion
                        through available account settings or official support
                        channels. Certain information may need to be retained
                        where required for legal, security, or operational
                        purposes.
                    </p>
                ),
            },
        ],
    },

    {
        id: "privacy",
        number: "08",
        title: "Privacy",
        faqs: [
            {
                question: "What information does HAEMA collect?",
                answer: (
                    <p>
                        Depending on the features you use, HAEMA may collect
                        account details, contact information, blood group,
                        donation information, blood request information,
                        location-related information, uploaded documents,
                        communication preferences, and platform activity.
                    </p>
                ),
            },
            {
                question: "Why does HAEMA need my blood group?",
                answer: (
                    <p>
                        Blood group information may be used to support donor
                        registration, blood request coordination, matching,
                        eligibility-related workflows, and other relevant
                        platform features.
                    </p>
                ),
            },
            {
                question: "Is my personal information publicly visible?",
                answer: (
                    <p>
                        HAEMA does not intend to make users' personal
                        information publicly available unless it is necessary
                        for a feature or the user has authorized its disclosure.
                        Privacy controls may also be used to protect direct
                        contact information.
                    </p>
                ),
            },
            {
                question: "How is my information protected?",
                answer: (
                    <p>
                        HAEMA aims to protect personal information using
                        appropriate technical and organizational safeguards.
                        Depending on the platform configuration, these may
                        include authentication, access controls, encrypted
                        communication, session management, activity logging, and
                        other security measures.
                    </p>
                ),
            },
        ],
    },

    {
        id: "medical",
        number: "09",
        title: "Medical Information",
        faqs: [
            {
                question: "Does HAEMA provide medical advice?",
                answer: (
                    <p>
                        No. HAEMA may provide general educational information,
                        eligibility-related information, reminders, and
                        coordination tools, but it does not replace qualified
                        healthcare professionals or medical institutions.
                    </p>
                ),
            },
            {
                question: "Can I use HAEMA to determine if I can donate?",
                answer: (
                    <p>
                        Platform information may help with general eligibility
                        guidance, but final eligibility to donate must be
                        determined by qualified healthcare professionals.
                    </p>
                ),
            },
            {
                question:
                    "Can I use the blood compatibility information to make a transfusion decision?",
                answer: (
                    <p>
                        No. Any compatibility information provided by the
                        platform is for educational and informational purposes.
                        Blood transfusions must be performed under the
                        supervision of qualified healthcare professionals and
                        according to applicable medical protocols and testing
                        requirements.
                    </p>
                ),
            },
        ],
    },

    {
        id: "support",
        number: "10",
        title: "Support",
        faqs: [
            {
                question: "I found incorrect information. What should I do?",
                answer: (
                    <p>
                        Contact the platform administrator through the official
                        support channels provided on the website and include
                        enough information to help identify the issue.
                    </p>
                ),
            },
            {
                question: "How can I report a privacy or security concern?",
                answer: (
                    <p>
                        Privacy, account, and security concerns should be
                        reported through the official support channels so they
                        can be reviewed by the platform administrator.
                    </p>
                ),
            },
            {
                question: "Where can I read the full Terms and Privacy Policy?",
                answer: (
                    <p>
                        The full Terms of Service and Privacy Policy are
                        available through their respective pages on the HAEMA
                        website.
                    </p>
                ),
            },
        ],
    },
];

export default function Client() {
    return (
        <main className="min-h-screen">
            <section className="pt-24 sm:px-10 lg:pt-20 max-w-7xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                    Frequently Asked Questions
                </h1>
            </section>

            <div className="mx-auto px-6 sm:px-8 lg:px-10 lg:pt-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_minmax(0,1fr)] z-50">
                    <aside className="hidden lg:block">
                        <div className="sticky top-14">
                            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground/75">
                                On this page
                            </p>

                            <nav className="max-h-[calc(100vh-100px)] overflow-y-auto pr-3 pt-4">
                                <div className="space-y-1">
                                    {sections.map((section) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-foreground/75 transition hover:text-foreground"
                                        >
                                            <span className="font-mono text-xs">
                                                {section.number}
                                            </span>

                                            <span>{section.title}</span>
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>
                    </aside>

                    <article className="min-w-0 rounded-2xl px-6 shadow-sm sm:px-10 lg:px-12">
                        {sections.map((section) => (
                            <section
                                key={section.id}
                                id={section.id}
                                className="scroll-mt-28 border-b border-foreground/10 last:border-b-0 first:pt-0 pt-12 pb-6"
                            >
                                <div className="flex gap-5">
                                    <span className="hidden shrink-0 pt-1 text-2xl font-bold text-red-500 sm:block">
                                        {section.number}
                                    </span>

                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-2xl pb-4 font-bold tracking-tight text-foreground/75 sm:text-3xl">
                                            {section.title}
                                        </h2>

                                        <div className="mt-6">
                                            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
                                                {section.faqs.map(
                                                    (faq, index) => (
                                                        <details
                                                            key={index}
                                                            className="group"
                                                        >
                                                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-semibold text-foreground/75 transition hover:text-foreground [&::-webkit-details-marker]:hidden">
                                                                <span>
                                                                    {
                                                                        faq.question
                                                                    }
                                                                </span>

                                                                <span className="shrink-0 text-xl font-light text-foreground/40 transition-transform duration-200 group-open:rotate-45">
                                                                    +
                                                                </span>
                                                            </summary>

                                                            <div className="pb-6 pr-8 text-sm leading-7 text-foreground/75">
                                                                {faq.answer}
                                                            </div>
                                                        </details>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </article>
                </div>
            </div>
        </main>
    );
}
