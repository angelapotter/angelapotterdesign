import React from "react"


export default () => {
  const projects = [
    {
      name: 'Industrial Control Models',
      company: 'Kelvin',
      role: 'Lead Design',
      platform: 'Web',
      slug: 'kelvin-control-models',
      blurb: "Empower analysts to tune control models for natural gas wells",
      show_case_study: true
    },
    {
      name: 'Unified Messaging',
      company: 'DoubleDutch',
      role: 'End-to-End Design',
      platform: 'Web & Mobile',
      slug: 'doubledutch-unified-messaging',
      blurb: "Allow event attendees to see all their chat activity in one place",
      show_case_study: true
    },
    {
      name: 'Attendee Engagement Report',
      company: 'DoubleDutch',
      role: 'End-to-End Design',
      platform: 'Web & Mobile',
      slug: 'doubledutch-engagement-report',
      blurb: "Visualize attendee behavior for event organizers",
      show_case_study: true
    },
    {
      name: 'Edit Event App',
      company: 'DoubleDutch',
      role: 'End-to-End Design',
      platform: 'Web',
      slug: 'doubledutch-edit-app',
      blurb: "Guide event organizers through editing and submitting their mobile event app",
      show_case_study: true
    },
    {
      name: 'E-Commerce Checkout',
      company: 'Goldbely',
      role: 'Design + Front-End Dev',
      platform: 'Web',
      slug: 'goldbely-checkout',
      blurb: "Enable foodies to buy and schedule food orders from across the country",
      show_case_study: true,
      outbound_link: {
        label: 'View on Goldbely.com',
        url: 'https://www.goldbely.com',
      }
    },
    {
      name: 'E-Commerce Search',
      company: 'Goldbely',
      role: 'Design',
      platform: 'Web',
      slug: 'goldbely-search-autocomplete',
      blurb: "Provide visual search results with autosuggest",
      outbound_link: {
        label: 'View on Goldbely.com',
        url: 'https://www.goldbely.com',
      },
      show_case_study: true
    },
    {
      name: 'E-Commerce Order History',
      company: 'Goldbely',
      role: 'Design',
      platform: 'Web',
      slug: 'goldbely-order-history',
      blurb: "Empower customers to track their food shipments"
    },
    {
      name: 'Any.do Hotel Matches',
      company: 'OLSET',
      role: 'Design + Front-End Dev',
      platform: 'Android',
      slug: 'anydo-hotel-matches',
      blurb: "Allow Any.do users to book hotels from their to-do list"
    },
    {
      name: 'OLSET Hotel Matches',
      company: 'OLSET',
      role: 'Design + Front-End Dev',
      platform: 'Web',
      slug: 'olset-hotel-matches',
      blurb: "Provide business travelers with personalized hotel matches"
    },
    {
      name: 'Music Notation App',
      role: 'Design',
      platform: 'Android',
      slug: 'music-notation-app',
      blurb: "Compose music on your phone"
    },
    {
      name: 'Old Person App',
      role: 'Design + XML',
      platform: 'Android',
      slug: 'old-person-app',
      blurb: "Equip vision-impaired users with a flashlight, magnifying glass, and large print notebook.",
      outbound_link: {
        label: 'Download from Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.thirdlayer.oldperson&feature=search_result#?t=W251bGwsMSwxLDEsImNvbS50aGlyZGxheWVyLm9sZHBlcnNvbiJd',
      }
    },
    {
      name: 'Gig Tracking App',
      company: 'MyFive',
      role: 'UI Design + Prototyping',
      platform: 'Web',
      slug: 'myfive',
      blurb: "Help freelancers keep track of their referral sources"
    },
  ]
  return(
  <div>
    {projects.map((item) => (
      <div key={item.slug}>
        <img src={'/public/' + item.slug + '.png'} />
        {item.name}
      </div>
    ))}

  </div>
)}
