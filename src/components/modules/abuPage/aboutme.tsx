

interface HeroProps {
  tagline?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  imageUrl?: string;
}

const Blog7 = ({
  tagline = "Welcome to my Portfolio",
  heading = "Learn More About Me",
  description =
    "I’m Abu Bakar Siddik — a passionate Full-Stack Developer and digital creator. I build reliable, user-focused web applications and e-commerce platforms using modern technologies. I care deeply about clean code, thoughtful UX, and scalable architectures. Here I share my projects, lessons learned, and practical tips to help others build better web experiences.",
  ctaText = "Read in 5 minutes",
  imageUrl = "/bannar.jpg",
}: HeroProps) => {
  return (
    <div className="pt-25 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <section className="relative overflow-hidden">
        <div className="container mx-auto pb-14 pt-4 flex-col-reverse items-center gap-10 md:flex-row md:gap-16 lg:px-16">
          {/* Left Content */}
          <div className="flex flex-1 flex-col items-center justify-center text-center mb-10">
            <p className="text-sm font-semibold uppercase text-muted-foreground mb-8">
              {tagline}
            </p>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
              {heading}
            </h1>

            <p className="text-muted-foreground text-base md:text-lg mb-8 mt-4">
              {description}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={undefined}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:opacity-95"
              >
                {ctaText}
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="container mx-auto mb-10">
            <img
              src={imageUrl}
              alt="Hero illustration"
              className="w-full h-auto max-h-[500px] rounded-2xl shadow-lg object-cover md:max-h-[300px] lg:max-h-[400px]"
            />
          </div>

          {/* About / Summary */}
          <div className="container mx-auto bg-accent rounded-2xl border-4 mb-10 pb-14 pt-4 flex-col-reverse items-center gap-10 md:flex-row md:gap-16 lg:px-16">
            <div className="p-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-center">
                About Me
              </h2>
              <p className="text-foreground text-base md:text-lg leading-[26px]">
                I’m a professional Full-Stack Developer specializing in e-commerce
                solutions. For the past 4 years I’ve helped businesses across
                Bangladesh grow by delivering tailored web platforms, improving
                user experience, and implementing effective SEO practices. I focus
                on pragmatic solutions that balance performance, maintainability,
                and business goals.
              </p>

              <p className="pt-8 text-foreground text-base md:text-lg leading-[26px]">
                My approach is collaborative — I work closely with clients to
                understand their needs, advising on product strategy and building
                features that drive sales and customer satisfaction. I adopt the
                latest tools and best practices to ensure secure, scalable
                results.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="container mx-auto bg-accent rounded-2xl border-4 mb-10 pb-14 pt-4 flex-col-reverse items-center gap-10 md:flex-row md:gap-16 lg:px-16">
            <div className="p-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-center">
                Services I Offer
              </h2>
              <p className="text-foreground text-base md:text-lg leading-[26px]">
                I provide end-to-end e-commerce and web development services that
                include design, feature development, and SEO optimization to help
                businesses convert traffic into customers.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="text-foreground text-base md:text-lg leading-[26px]">
                  <strong>Full E-commerce Development:</strong> Build modern,
                  secure, and scalable online stores tailored to your market.
                </li>

                <li className="text-foreground text-base md:text-lg leading-[26px]">
                  <strong>Website Redesign & Modernization:</strong> Refresh legacy
                  sites to increase conversions and improve user experience.
                </li>

                <li className="text-foreground text-base md:text-lg leading-[26px]">
                  <strong>Feature Integration:</strong> Add custom functionality,
                  payment gateways, analytics, and automation to streamline
                  operations.
                </li>

                <li className="text-foreground text-base md:text-lg leading-[26px]">
                  <strong>Single Product Landing Pages:</strong> High-converting,
                  focused pages for product launches or campaigns.
                </li>

                <li className="text-foreground text-base md:text-lg leading-[26px]">
                  <strong>SEO Optimization for E-commerce:</strong> Improve search
                  visibility and organic traffic to boost sales in the local
                  market.
                </li>

                <li className="text-foreground text-base md:text-lg leading-[26px]">
                  <strong>Maintenance & Support:</strong> Ongoing updates,
                  security patches, and monitoring to keep your site healthy.
                </li>
              </ul>
            </div>
          </div>

          {/* Strengths & Experience */}
          <div className="container mx-auto bg-accent rounded-2xl border-4 mb-10 pb-14 pt-4 flex-col-reverse items-center gap-10 md:flex-row md:gap-16 lg:px-16">
            <div className="p-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-center">
                Strengths & Experience
              </h2>

              <p className="text-foreground text-base md:text-lg leading-[26px]">
                Over the years I’ve completed more than 70 website builds and
                over 30 site modernizations. This hands-on experience has sharpened
                my ability to deliver production-ready code, reliable integrations,
                and SEO-friendly structures that perform in real business contexts.
              </p>

              <p className="pt-8 text-foreground text-base md:text-lg leading-[26px]">
                I continuously learn emerging technologies and industry patterns so I
                can apply best practices across performance, accessibility, and
                security in every project.
              </p>
            </div>
          </div>

          {/* Goals & Mission */}
          <div className="container mx-auto bg-accent rounded-2xl border-4 mb-10 pb-14 pt-4 flex-col-reverse items-center gap-10 md:flex-row md:gap-16 lg:px-16">
            <div className="p-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-center">
                Goals & Mission
              </h2>
              <p className="text-foreground text-base md:text-lg leading-[26px]">
                My mission is to empower Bangladeshi entrepreneurs with modern,
                effective e-commerce platforms that increase revenue and reduce
                friction. I aim to deliver solutions that are easy to manage,
                technically robust, and aligned with long-term business goals.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="container mx-auto bg-accent rounded-2xl border-4 mb-10 pb-14 pt-4 flex-col-reverse items-center gap-10 md:flex-row md:gap-16 lg:px-16">
            <div className="p-6">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6 text-center">
                Conclusion
              </h2>
              <p className="text-foreground text-base md:text-lg leading-[26px]">
                E-commerce development is a growing and competitive field. With a
                focus on practical design, clean implementation, and measurable
                results, I’m ready to help businesses scale online. If you want
                to turn an idea into a high-performing website, I’m here to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Blog7 };
