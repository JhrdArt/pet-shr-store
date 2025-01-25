import { footerData } from "public/data";
import { styles } from "~/styles";

const FooterLargeWidth = () => {
  return (
    <div className="mx-auto grid-rows-[80px_auto] gap-8 text-black text-balance max-w-7xl xl:hidden max-md:hidden max-lg:grid h-auto px-4 mt-8">
      <div className="row-span-1 h-24 border-b">
        {footerData.sections.map(
          (section, index) =>
            section.title === "Localiza tu tienda" && (
              <div className="col-span-1 space-y-2 content-start" key={index}>
                <a
                  href={section.url}
                  className={`${styles.h3} flex gap-2 hover:underline hover:underline-offset-2`}
                >
                  {section.icon}
                  {section.title}
                </a>
                <p className={`${styles.p} leading-6`}>{section.description}</p>
              </div>
            )
        )}
      </div>
      <div className="row-span-1 grid grid-cols-4 mt-4">
        {footerData.sections.map((section, index) =>
          section.title === "Guia de compra" ? (
            <div className="col-span-1 content-start" key={index}>
              <h3 className={`${styles.h3}`}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links?.map((link, index) => (
                  <li
                    className={`${styles.p} text-xs hover:underline hover:underline-offset-2`}
                    key={index}
                  >
                    <a href={link.url}>{link.label}</a>
                    {link.img && link.img && (
                      <a
                        href={link.img.url}
                        className="aspect-auto w-36 h-auto"
                      >
                        <img
                          src={link.img.src}
                          alt={link.img.alt}
                          className="mt-2 w-32 object-contain"
                        />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ) : section.title === "Contacto" ? (
            <div className="col-span-1 content-start" key={index}>
              <h3 className={`${styles.h3}`}>{section.title}</h3>
              {section.contactInfo && (
                <ul className="space-y-2">
                  <li
                    className={`${styles.p} text-xs hover:underline hover:underline-offset-2`}
                  >
                    <a href={section.contactInfo.email.url}>
                      {section.contactInfo.email.label}
                    </a>
                  </li>
                  <li
                    className={`${styles.p} text-xs hover:underline hover:underline-offset-2`}
                  >
                    <a href={section.contactInfo.phone.url}>
                      {section.contactInfo.phone.label}
                    </a>
                  </li>
                  <li className={`${styles.p} text-xs`}>
                    {section.contactInfo.serviceHours.weekdays}
                  </li>
                  <li className={`${styles.p} text-xs`}>
                    {section.contactInfo.serviceHours.sunday}
                  </li>
                  <li
                    className={`${styles.p} text-xs hover:underline hover:underline-offset-2`}
                  >
                    <a href={section.reportChannel.url}>
                      {section.reportChannel?.label}
                    </a>
                  </li>
                </ul>
              )}
            </div>
          ) : section.title !== "Localiza tu tienda" ? (
            <div className="col-span-1 content-start" key={index}>
              <h3 className={`${styles.h3}`}>{section.title}</h3>
              <ul className="space-y-2">
                {section.links?.map((link, index) => (
                  <li
                    className={`${styles.p} text-xs hover:underline hover:underline-offset-2`}
                    key={index}
                  >
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
export default FooterLargeWidth;
