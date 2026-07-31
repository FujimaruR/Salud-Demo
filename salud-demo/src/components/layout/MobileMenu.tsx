import { X } from "lucide-react";

type Link = {
  title: string;
  href: string;
};

type Props = {
  open: boolean;
  close: () => void;
  links: Link[];
};

export default function MobileMenu({
  open,
  close,
  links
}: Props) {

  return (

    <div
      className={`
        fixed
        inset-0
        z-[60]
        transition-all
        duration-300

        ${open
          ? "visible bg-black/40"
          : "invisible bg-transparent"}
      `}
    >

      <aside
        className={`
            absolute
            right-0
            top-0
            flex
            h-full
            w-80
            flex-col
            bg-white
            p-8
            shadow-2xl
            transition-transform
            duration-300

            ${open
              ? "translate-x-0"
              : "translate-x-full"}
        `}
      >

        <div className="mb-10 flex justify-end">

          <button onClick={close}>

            <X size={30} />

          </button>

        </div>

        <nav className="flex flex-col gap-8">

          {links.map(link => (

            <a
              key={link.title}
              href={link.href}
              onClick={close}
              className="text-lg font-semibold"
            >

              {link.title}

            </a>

          ))}

        </nav>

        <button
          className="
            mt-auto
            rounded-full
            bg-[#A69232]
            py-4
            font-semibold
            text-white
          "
        >

          Agendar cita

        </button>

      </aside>

    </div>

  );

}