import './ServicesSection.css'

type Service = {
  number: string
  title: string
  description: string
  capabilities: string[]
}

const services: Service[] = [
  {
    number: '01',
    title: 'Websites',
    description:
      'Fast, responsive websites designed to make a business clear, credible and easy to engage with.',
    capabilities: ['Landing pages', 'Business websites', 'Responsive UI', 'Performance-focused builds'],
  },
  {
    number: '02',
    title: 'Web Applications',
    description:
      'Purpose-built web apps that turn repetitive work, scattered information and manual processes into useful digital workflows.',
    capabilities: ['Dashboards', 'Customer portals', 'Internal tools', 'SaaS products'],
  },
  {
    number: '03',
    title: 'Digital Systems',
    description:
      'Connected systems for businesses that need more than a brochure website — from data management to secure user workflows.',
    capabilities: ['Database-backed apps', 'Authentication', 'Reports & analytics', 'Role-based access'],
  },
  {
    number: '04',
    title: 'Automation & Integrations',
    description:
      'Practical integrations that connect the tools a business already uses and reduce unnecessary manual steps.',
    capabilities: ['API integrations', 'Workflow automation', 'Webhooks', 'Third-party services'],
  },
]

function ServicesSection() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-intro">
        <div>
          <p className="eyebrow">SERVICES</p>
          <h2 id="services-title">Digital work built for how the business actually works.</h2>
        </div>
        <p className="services-summary">
          We focus on useful digital products — not adding technology for the sake of it.
          Every build starts with the problem, the people using it and the outcome it needs to deliver.
        </p>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <article className="service-item" key={service.number}>
            <div className="service-number" aria-hidden="true">{service.number}</div>
            <div className="service-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul aria-label={`${service.title} capabilities`}>
                {service.capabilities.map((capability) => (
                  <li key={capability}>{capability}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
