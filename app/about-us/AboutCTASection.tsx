import Link from "next/link";

export default function AboutCTASection() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf2] px-5 py-14 sm:px-8 lg:px-12">
      <div className="absolute left-[-120px] top-[-90px] h-80 w-80 rounded-full bg-[#d6b06a]/30 blur-3xl" />
      <div className="absolute right-[-130px] bottom-[-100px] h-96 w-96 rounded-full bg-[#eadfca]/80 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#d6b06a_1px,transparent_0)] bg-[length:30px_30px] opacity-15" />

      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-[#eadfca] bg-white/85 p-7 text-center shadow-2xl shadow-black/10 backdrop-blur sm:p-10 lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.32em] text-[#b98a3c]">
            Get Free Quote
          </p>

          <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight text-[#2f281f] sm:text-4xl lg:text-5xl">
            Ready to Build a Safer, Cleaner and Better Managed Workplace?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-8 text-[#6f6254] sm:text-lg">
            Partner with Vipras Facility Management Solution for trusted
            security, housekeeping, manpower, technical maintenance, fire safety
            and integrated facility management support across Chennai, Tamil
            Nadu and Pan India.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919710946484?text=Hello%20Vipras%20Facility%20Management%20Solution%2C%20I%20would%20like%20to%20get%20a%20free%20quote%20for%20facility%20management%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#b98a3c] px-8 py-4 text-sm font-black text-white shadow-lg shadow-[#b98a3c]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#9f742f]"
            >
              Get Free Quote
            </a>

            <Link
              href="/services"
              className="rounded-full border border-[#d6b06a] bg-[#fffaf2] px-8 py-4 text-sm font-black text-[#4a3720] transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}