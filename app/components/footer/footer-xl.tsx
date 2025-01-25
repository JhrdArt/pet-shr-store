import { footerData } from "public/data";
import { styles } from "~/styles";

interface Props {
  /*Props*/
}

const FooterMaxWidth: React.FC<Props> = (props) => {
  return (
    <div className="mx-auto grid-cols-5 gap-8 text-black text-balance max-w-7xl xl:grid hidden mt-8">
      {footerData.sections.map((section, index) =>
        section.title === "Localiza tu tienda" ? (
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
        ) : section.title === "Guia de compra" ? (
          <div className="col-span-1 content-start" key={index}>
            <h3 className={`${styles.h3}`}>{section.title}</h3>
            <ul className="space-y-2">
              {section.links?.map((link, index) => (
                <li className={`${styles.p}`} key={index}>
                  <a href={link.url}>{link.label}</a>
                  {link.img && link.img && (
                    <a href={link.img.url} className=" aspect-auto">
                      <img
                        src={link.img.src}
                        alt={link.img.alt}
                        className="mt-2 w-36 object-contain"
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
                <li className={`${styles.p}`}>
                  <a href={section.contactInfo.email.url}>
                    {section.contactInfo.email.label}
                  </a>
                </li>
                <li className={`${styles.p}`}>
                  <a href={section.contactInfo.phone.url}>
                    {section.contactInfo.phone.label}
                  </a>
                </li>
                <li className={`${styles.p}`}>
                  {section.contactInfo.serviceHours.weekdays}
                </li>
                <li className={`${styles.p}`}>
                  {section.contactInfo.serviceHours.sunday}
                </li>
                <li className={`${styles.p}`}>
                  <a href={section.reportChannel.url}>
                    {section.reportChannel?.label}
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <div className="col-span-1 content-start" key={index}>
            <h3 className={`${styles.h3}`}>{section.title}</h3>
            <ul className="space-y-2">
              {section.links?.map((link, index) => (
                <li className={`${styles.p}`} key={index}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};
export default FooterMaxWidth;
