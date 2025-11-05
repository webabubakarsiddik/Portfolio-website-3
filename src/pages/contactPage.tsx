"use client";
import { Mail, MapPin, MessageCircle, Phone, } from "lucide-react";
import { Link } from "react-router";

interface Contact7Props {
  title?: string;
  description?: string;
}

const Contact7 = ({
  title = "Contact Me",
  description = "You can contact me directly via email, phone, or live chat.",
}: Contact7Props) => {
  const items = [
    {
      icon: <Mail className="h-7 w-7 text-white" />,
      label: "Email",
      description: "All emails are replied to within 24 hours.",
      value: "mr.siddikdev@gmail.com",
      href: "https://mail.google.com/mail/u/0/#inbox",
      bg: "from-blue-500 to-blue-700",
    },
    {
      icon: <MapPin className="h-7 w-7 text-white" />,
      label: "Office",
      description: "Come hang out with us at our office over a cup of coffee ☕",
      value: "Dhaka, Bangladesh",
      href: "https://www.google.com/maps/",
      bg: "from-green-500 to-green-700",
    },
    {
      icon: <Phone className="h-7 w-7 text-white" />,
      label: "Phone",
      description: "Contact us from Monday to Friday, between 9 AM and 5 PM.",
      value: "+880 134 534 0311",
      href: "https://receive-smss.com/",
      bg: "from-orange-500 to-red-500",
    },
    {
      icon: <MessageCircle className="h-7 w-7 text-white" />,
      label: "Live Chat",
      description: "Start a chat now to get instant support.",
      value: "Start Chat",
      href: "https://www.livechat.com",
      bg: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section className="py-16 mt-10 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <h1 className="mb-3 mt-2 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        {/* Contact Boxes */}
        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-card p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <span
                className={`mb-4 flex size-16 items-center justify-center rounded-full bg-gradient-to-r ${item.bg} shadow-lg transition-all duration-300 group-hover:scale-110`}
              >
                {item.icon}
              </span>
              <p className="mb-2 text-lg font-semibold text-foreground">
                {item.label}
              </p>
              <p className="text-muted-foreground mb-3">{item.description}</p>
              <Link
                to={item.href}
                className="font-medium text-primary hover:underline"
              >
                {item.value}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
