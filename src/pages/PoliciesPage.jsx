import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { ActionLink, PageIntro, Reveal } from '../components/Common';

const policyData = {
  clinic: {
    label: "Salon policies",
    eyebrow: "Treatment appointments",
    heading: "A comfortable, informed visit.",
    items: [
      {
        title: "Appointments",
        description: "Organik Laser & Beauty is appointment-only. Contact the clinic to confirm availability and service details."
      },
      {
        title: "Service suitability",
        description: "Discuss relevant questions and personal circumstances with Racheal before a treatment is booked. Service-specific information is confirmed individually."
      },
      {
        title: "Aftercare",
        description: "Follow the individual aftercare guidance given by your practitioner. If you are unsure, contact the clinic for clarification."
      },
      {
        title: "Appointment changes",
        description: "Current change and cancellation terms were not supplied for this demo. Please confirm them with the clinic before booking."
      }
    ]
  },
  academy: {
    label: "Academy policies",
    eyebrow: "Course enrolment",
    heading: "A clear path from enrolment to completion.",
    items: [
      {
        title: "Course completion",
        description: "Courses are professional, non-accredited training at present. A certificate of completion is provided after satisfactory completion of required models."
      },
      {
        title: "Rescheduling",
        description: "Courses are non-refundable. Rescheduling requires two weeks’ notice, and the new date must be booked within eight weeks."
      },
      {
        title: "Accreditation",
        description: "Selected accredited and nationally recognised courses are planned for 2027."
      },
      {
        title: "Returning students",
        description: "Returning students receive 10% off future courses."
      }
    ]
  },
  payments: {
    label: "Payments & dates",
    eyebrow: "Course payments",
    heading: "Plan your training with clarity.",
    items: [
      {
        title: "Secure your dates",
        description: "A 20% deposit secures your course dates."
      },
      {
        title: "Course balance",
        description: "The full course fee is due two weeks before training starts."
      },
      {
        title: "Ways to pay",
        description: "Zip, Afterpay or an Academy payment plan are available. Academy payment plans have minimum weekly repayments of $250, and the course fee must be paid in full before training starts."
      }
    ]
  },
  students: {
    label: "Student arrangements",
    eyebrow: "Before and after class",
    heading: "Practical details for your training day.",
    items: [
      {
        title: "Study with a friend",
        description: "Students who study together receive a 10% discount each (20% combined)."
      },
      {
        title: "Dress and models",
        description: "Wear clean practical clothing and closed-in shoes, with hair tied back. Students usually arrange their own models; the Academy can help but cannot always guarantee a model."
      },
      {
        title: "Support after training",
        description: "Students receive ongoing WhatsApp support. Extra in-person training days are $500 per day, subject to availability."
      }
    ]
  },
  privacy: {
    label: "Privacy",
    eyebrow: "Demo privacy note",
    heading: "This preview does not collect enquiries.",
    items: [
      {
        title: "Forms in this demo",
        description: "Contact and enrolment forms are mock UI only and are not connected to a backend or submitted to Organik."
      },
      {
        title: "Before launch",
        description: "Replace this demo note with Organik’s approved privacy statement before collecting enquiry details."
      }
    ]
  },
  terms: {
    label: "Terms",
    eyebrow: "Website terms",
    heading: "Information for this design demo.",
    items: [
      {
        title: "Demonstration only",
        description: "This site is a design demo. Booking, checkout and enrolment actions are not connected to live systems."
      },
      {
        title: "Confirm current details",
        description: "Treatment and course availability, inclusions and pricing should be confirmed with the relevant Organik team before making arrangements."
      }
    ]
  },
  refunds: {
    label: "Refunds",
    eyebrow: "Changes and refunds",
    heading: "Please check the relevant terms before paying.",
    items: [
      {
        title: "Academy courses",
        description: "Course fees are non-refundable. Rescheduling requires two weeks’ notice and the course must be rebooked within eight weeks."
      },
      {
        title: "Clinic appointments",
        description: "Clinic refund and cancellation terms were not supplied for this demo. Contact the clinic to confirm its current policy."
      }
    ]
  }
};

const generalTabs = ["clinic", "academy", "privacy", "terms", "refunds"];
const academyTabs = ["academy", "payments", "students", "refunds"];

export function PoliciesPage() {
  const location = useLocation();
  const isAcademy = location.pathname === '/academy/policies';
  const availableTabs = isAcademy ? academyTabs : generalTabs;

  const [activeTab, setActiveTab] = useState(isAcademy ? 'academy' : 'clinic');

  useEffect(() => {
    setActiveTab(isAcademy ? 'academy' : 'clinic');
  }, [isAcademy]);

  const currentTab = availableTabs.includes(activeTab) ? activeTab : (isAcademy ? 'academy' : 'clinic');
  const content = policyData[currentTab];

  return (
    <main className="page page--shared page-motion">
      <PageIntro
        eyebrow={isAcademy ? "Organik Beauty Academy" : "Clear information, before you visit"}
        title={isAcademy ? "Academy policies." : "Policies &amp; procedures."}
        description={
          isAcademy
            ? "Clear enrolment, payment and student information to support your training."
            : "Important details for treatment appointments and academy enrolment. Please contact Organik if you need clarification."
        }
        breadcrumbs={
          isAcademy
            ? [{ label: 'Organik', href: '/' }, { label: 'Academy', href: '/academy' }, { label: 'Policies' }]
            : [{ label: 'Organik', href: '/' }, { label: 'Policies' }]
        }
        compact
      />

      <section className="section-pad page-container policies-page">
        <Reveal>
          <div className="policies-page__notice">
            <span>
              <ShieldCheck aria-hidden="true" />
            </span>
            <p>Confirm current Organik policies and terms with the relevant team before booking or enrolling.</p>
          </div>
        </Reveal>

        <div
          className="policy-tabs"
          role="tablist"
          aria-label={isAcademy ? "Academy policy categories" : "Policy categories"}
        >
          {availableTabs.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              id={`policy-tab-${key}`}
              aria-selected={currentTab === key}
              aria-controls="policy-panel"
              className={currentTab === key ? "is-active" : ""}
              onClick={() => setActiveTab(key)}
            >
              {policyData[key].label}
            </button>
          ))}
        </div>

        <div
          className="policy-panel"
          id="policy-panel"
          role="tabpanel"
          aria-labelledby={`policy-tab-${currentTab}`}
        >
          <Reveal key={currentTab}>
            <div className="policy-panel__content">
              <p className="eyebrow">{content.eyebrow}</p>
              <h2>{content.heading}</h2>
              <div className="policy-list">
                {content.items.map((item, i) => (
                  <article key={item.title}>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="policies-page__footer">
          <p>
            {isAcademy
              ? "Questions about a course policy? The Academy can help clarify the details."
              : "For current policy terms, please contact the relevant Organik team."}
          </p>
          <ActionLink
            href={isAcademy ? "/contact?enquiry=academy" : "/contact"}
            variant="primary"
          >
            {isAcademy ? "Ask the academy" : "Ask about a policy"}
          </ActionLink>
        </div>
      </section>
    </main>
  );
}
