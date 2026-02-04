import { CONTACT } from "@/app/ui/constants";
import { ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-md border border-gray-200 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-md font-bold text-gray-900 mb-4">
              {CONTACT.CONTACT_INFO.TITLE}
            </h3>

            <div className="space-y-4 mb-8">
              {CONTACT.CONTACT_INFO.ITEMS.map((item, index) => {
                const Icon = item.ICON;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${item.COLOR} transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/50 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium opacity-80 mb-1">
                          {item.LABEL}
                        </div>
                        {item.HREF ? (
                          <a
                            href={item.HREF}
                            target={
                              item.HREF.startsWith("http") ? "_blank" : "_self"
                            }
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                          >
                            {item.VALUE}
                          </a>
                        ) : (
                          <div className="font-semibold">{item.VALUE}</div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-4">
              {CONTACT.SOCIAL_LINK.TITLE}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {CONTACT.SOCIAL_LINK.ITEMS.map((social, index) => {
                const Icon = social.ICON;
                return (
                  <a
                    key={index}
                    href={social.HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-lg ${social.COLOR} transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="flex-1">
                      <div className="font-medium">{social.NAME}</div>
                      <div className="text-sm opacity-90">{social.LABEL}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
