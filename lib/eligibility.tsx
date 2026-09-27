import {
    EligibilityQuestion,
    EligibilityAnswer,
    EligibilityResult,
} from "@/types/eligibility";

export const eligibilityQuestions: EligibilityQuestion[] = [
    {
        id: "age",
        label: "Age",
        question: "Are you between 18 and 65 years old?",
        hint: "Most blood banks accept donors aged 18–65. Some allow 16–17 with parental consent.",
        type: "boolean",
        disqualifyIfYes: false,
        disqualifyReason:
            "Donors must be between 18 and 65 years old to donate safely.",
    },
    {
        id: "weight",
        label: "Weight",
        question: "Do you weigh at least 50 kg (110 lbs)?",
        hint: "A minimum weight ensures your body can safely handle the volume drawn.",
        type: "boolean",
        disqualifyIfYes: false,
        disqualifyReason: "Donors must weigh at least 50 kg to donate safely.",
    },
    {
        id: "lastDonation",
        label: "Last donation",
        question: "How long has it been since your last blood donation?",
        hint: "Whole blood donors usually need to wait 3 months between donations.",
        type: "select",
        options: [
            { label: "Never donated before", value: "never" },
            { label: "More than 3 months ago", value: "3m+" },
            { label: "1–3 months ago", value: "1-3m", disqualifies: true },
            {
                label: "Less than 1 month ago",
                value: "<1m",
                disqualifies: true,
            },
        ],
        retryAfterDays: 90,
        disqualifyReason:
            "You need at least 3 months between whole blood donations.",
    },
    {
        id: "recentIllness",
        label: "Recent illness",
        question: "Have you had a fever, flu, or infection in the last 7 days?",
        hint: "You should be symptom-free for at least 7 days before donating.",
        type: "boolean",
        disqualifyIfYes: true,
        retryAfterDays: 7,
        disqualifyReason:
            "You must be symptom-free for at least 7 days before donating.",
    },
    {
        id: "medications",
        label: "Medications",
        question: "Are you currently taking any of these medications?",
        hint: "Some medications (antibiotics, blood thinners, certain acne treatments) temporarily disqualify donors.",
        type: "select",
        options: [
            { label: "None of these", value: "none" },
            { label: "Antibiotics", value: "antibiotics", disqualifies: true },
            { label: "Blood thinners", value: "thinners", disqualifies: true },
            {
                label: "Isotretinoin (Accutane)",
                value: "accutane",
                disqualifies: true,
            },
            { label: "Other prescription meds", value: "other" },
        ],
        retryAfterDays: 30,
        disqualifyReason:
            "Some medications require a waiting period before donating.",
    },
    {
        id: "tattoo",
        label: "Tattoo / piercing",
        question:
            "Have you had a tattoo, piercing, or acupuncture in the last 6 months?",
        hint: "These carry a small infection risk and usually require a 6-month deferral.",
        type: "boolean",
        disqualifyIfYes: true,
        retryAfterDays: 180,
        disqualifyReason:
            "Recent tattoos or piercings require a 6-month waiting period.",
    },
    {
        id: "surgery",
        label: "Surgery",
        question: "Have you had a major surgery in the last 6 months?",
        hint: "Major surgery requires recovery time before donating.",
        type: "boolean",
        disqualifyIfYes: true,
        retryAfterDays: 180,
        disqualifyReason:
            "You need at least 6 months of recovery after major surgery.",
    },
    {
        id: "pregnancy",
        label: "Pregnancy",
        question:
            "Are you currently pregnant or have you given birth in the last 6 months?",
        hint: "Donors who are pregnant or recently gave birth should wait before donating.",
        type: "boolean",
        disqualifyIfYes: true,
        retryAfterDays: 180,
        disqualifyReason:
            "You should wait at least 6 months after giving birth before donating.",
    },
    {
        id: "travel",
        label: "Recent travel",
        question:
            "Have you travelled to a malaria-endemic region in the last 3 months?",
        hint: "Some regions carry malaria or other infection risks that require a deferral.",
        type: "boolean",
        disqualifyIfYes: true,
        retryAfterDays: 90,
        disqualifyReason:
            "Travel to malaria-endemic regions requires a 3-month deferral.",
    },
    {
        id: "chronicConditions",
        label: "Chronic conditions",
        question: "Do you have any of these conditions?",
        hint: "Some chronic conditions may prevent donation. Consult your doctor if unsure.",
        type: "select",
        options: [
            { label: "None of these", value: "none" },
            {
                label: "HIV / Hepatitis B or C",
                value: "hiv-hep",
                disqualifies: true,
            },
            { label: "Active cancer", value: "cancer", disqualifies: true },
            {
                label: "Severe heart disease",
                value: "heart",
                disqualifies: true,
            },
            { label: "Other chronic condition", value: "other" },
        ],
        disqualifyReason:
            "Some chronic conditions prevent blood donation. Please consult your doctor.",
    },
];

export function evaluateEligibility(
    answers: Record<string, EligibilityAnswer>,
): EligibilityResult {
    const disqualifiedBy: EligibilityQuestion[] = [];
    const reasons: string[] = [];
    let maxRetryDays = 0;

    for (const q of eligibilityQuestions) {
        const answer = answers[q.id];
        if (answer === undefined || answer === null) continue;

        let disqualified = false;

        if (q.type === "boolean") {
            if (q.disqualifyIfYes === true && answer === true)
                disqualified = true;
            if (q.disqualifyIfYes === false && answer === false)
                disqualified = true;
        }

        if (q.type === "select" && q.options) {
            const opt = q.options.find((o) => o.value === answer);
            if (opt?.disqualifies) disqualified = true;
        }

        if (disqualified) {
            disqualifiedBy.push(q);
            if (q.disqualifyReason) reasons.push(q.disqualifyReason);
            if (q.retryAfterDays && q.retryAfterDays > maxRetryDays) {
                maxRetryDays = q.retryAfterDays;
            }
        }
    }

    const retryAfter =
        maxRetryDays > 0
            ? new Date(Date.now() + maxRetryDays * 24 * 60 * 60 * 1000)
            : undefined;

    return {
        eligible: disqualifiedBy.length === 0,
        disqualifiedBy,
        retryAfter,
        reasons,
    };
}
