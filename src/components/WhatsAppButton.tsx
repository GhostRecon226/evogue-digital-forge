const WHATSAPP_NUMBER = "2348107396844";
const WHATSAPP_MESSAGE = "Hello Evogue team, I'm interested in booking a consultation.";

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 print:hidden flex items-center gap-2 rounded-full shadow-lg shadow-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] transition-transform duration-200 hover:scale-105 active:scale-95"
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping motion-reduce:hidden"
      />

      {/* Button core */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.244-.602.244-1.117.166-1.232-.085-.144-.317-.215-.66-.387z"/>
          <path d="M16.002 0C7.165 0 .002 7.163.002 16c0 2.792.715 5.524 2.075 7.937L.075 32l8.236-2.158A15.95 15.95 0 0 0 16.002 32C24.838 32 32 24.837 32 16S24.838 0 16.002 0zm0 29.122a13.07 13.07 0 0 1-6.667-1.821l-.477-.286-4.886 1.279 1.305-4.762-.31-.495a13.044 13.044 0 0 1-2.005-6.96c0-7.235 5.886-13.122 13.04-13.122 7.16 0 13.04 5.887 13.04 13.122 0 7.234-5.88 13.045-13.04 13.045z"/>
        </svg>
      </span>

      {/* Tooltip / pill (desktop only) */}
      <span className="pointer-events-none absolute right-full mr-3 hidden md:block whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-sm font-medium text-background opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
