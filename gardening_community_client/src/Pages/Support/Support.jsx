import { HelpCircle, Mail, BookOpen } from "lucide-react";

export default function Support() {
  const supportItems = [
    {
      title: "Community Forum",
      description:
        "Ask questions, share tips, and get advice from fellow gardeners.",
      icon: <HelpCircle className="w-6 h-6 text-green-600" />,
      linkText: "Go to Forum",
      link: "/dashboard/share-garden",
    },
    {
      title: "Contact Support",
      description: "Reach out to our team for help with issues or suggestions.",
      icon: <Mail className="w-6 h-6 text-green-600" />,
      linkText: "Email Us",
      link: "/contact",
    },
    {
      title: "Gardening Guides",
      description:
        "Explore tutorials, tips, and how-to articles curated for gardeners.",
      icon: <BookOpen className="w-6 h-6 text-green-600" />,
      linkText: "View Resources",
      link: "/dashboard/all-gardeners",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-black">
      <h2 className="text-3xl font-bold text-center mb-4">Need Support?</h2>
      <p className="text-center text-gray-600 mb-10">
        We’re here to help you grow. Explore the options below to get the
        support you need.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {supportItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">{item.description}</p>
            <a
              href={item.link}
              className="text-sm font-medium text-green-700 hover:underline"
            >
              {item.linkText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
