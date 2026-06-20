import Image from "next/image";

const logoSlots = [
  {
    name: "L&T Construction",
    src: "/client-logo-l-and-t-construction.png.png",
  },
  {
    name: "House of Hiranandani",
    src: "/client-logo-house-of-hiranandani.png.png",
  },
  {
    name: "DRA",
    src: "/client-logo-dra.png.png",
  },
  {
    name: "Casagrand",
    src: "/client-logo-casagrand.png.png",
  },
  {
    name: "Appaswamy Real Estates",
    src: "/client-logo-appaswamy-real-estates.png.png",
  },
  {
  name: "Radiance Realty",
  src: "/client-logo-radiance-realty.png.png",
},
];

export default function ClientLogoSection() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#9A6A1F]">
              Client Logo Section
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
              Trusted by businesses across different facility environments.
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Client logos can be added here later when you have final logo
              files. This section is ready for future brand proof without
              affecting the current page design.
            </p>
          </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {logoSlots.map((logo) => (
  <div
    key={logo.name}
    className="flex min-h-[110px] items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center sm:min-h-[118px]"
  >
    <Image
      src={logo.src}
      alt={`${logo.name} logo`}
      width={300}
height={120}
      className="h-auto max-h-[82px] w-full object-contain"
    />
  </div>
))}
          </div>
        </div>
      </div>
    </section>
  );
}
