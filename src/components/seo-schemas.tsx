import { Organization, Person, WebSite, BreadcrumbList } from 'schema-dts';

export function OrganizationSchema() {
  const organization: Organization = {
    "@type": "Organization",
    "@id": "https://lunaesolutions.dev/#organization",
    "name": "Lunae Solutions",
    "url": "https://lunaesolutions.dev",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lunaesolutions.dev/icon_1.webp",
      "width": "512",
      "height": "512"
    },
    "founder": {
      "@type": "Person",
      "name": "Edson Vinicius",
      "jobTitle": "Desenvolvedor Full Stack",
      "email": "viniciuspereira76@hotmail.com"
    },
    "description": "Empresa especializada em desenvolvimento web, automação com IA e consultoria tecnológica para pequenas empresas",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "Brasil"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-99999-9999",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://github.com/EdsonViniciusNeoera",
      "https://linkedin.com/in/edson-vinicius"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization),
      }}
    />
  );
}

export function PersonSchema() {
  const person: Person = {
    "@type": "Person",
    "@id": "https://lunaesolutions.dev/#person",
    "name": "Edson Vinicius",
    "jobTitle": "Desenvolvedor Full Stack",
    "description": "Especialista em desenvolvimento web, inteligência artificial e consultoria tecnológica",
    "url": "https://lunaesolutions.dev",
    "email": "viniciuspereira76@hotmail.com",
    "image": "https://lunaesolutions.dev/icon_1.webp",
    "worksFor": {
      "@type": "Organization",
      "name": "Lunae Solutions"
    },
    "knowsAbout": [
      "Desenvolvimento Web",
      "JavaScript",
      "TypeScript", 
      "React",
      "Next.js",
      "Node.js",
      "Inteligência Artificial",
      "Automação",
      "Consultoria Tecnológica"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Desenvolvedor Full Stack",
      "occupationLocation": {
        "@type": "Country",
        "name": "Brasil"
      },
      "skills": [
        "React",
        "Next.js", 
        "TypeScript",
        "Node.js",
        "Python",
        "Inteligência Artificial"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person),
      }}
    />
  );
}

export function WebSiteSchema() {
  const website: WebSite = {
    "@type": "WebSite",
    "@id": "https://lunaesolutions.dev/#website",
    "url": "https://lunaesolutions.dev",
    "name": "Edson Vinicius - Lunae Solutions",
    "description": "Desenvolvedor Full Stack especializado em transformação digital para pequenas empresas",
    "publisher": {
      "@type": "Organization",
      "name": "Lunae Solutions"
    },
    "inLanguage": "pt-BR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://lunaesolutions.dev/?s={search_term_string}"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(website),
      }}
    />
  );
}

interface BreadcrumbProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbProps) {
  const breadcrumbs: BreadcrumbList = {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbs),
      }}
    />
  );
}