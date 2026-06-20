const trustNumbers = [
  {
    value: "10+",
    label: "Years of Experience",
    description: "Delivering dependable facility management services.",
  },
  {
    value: "150+",
    label: "Business Sites",
    description: "Supporting commercial, industrial and institutional spaces.",
  },
  {
    value: "1700+",
    label: "Team Members",
    description: "Trained workforce deployed across multiple service areas.",
  },
  {
    value: "Pan-India",
    label: "Service Support",
    description: "Facility service support for businesses across India.",
  },
];

export default function TrustNumbersSection() {
  return (
    <section className="bg-[#fffaf2] px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustNumbers.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-[#eadfca] bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <p className="text-4xl font-black text-[#b98a3c]">
                {item.value}
              </p>

              <h3 className="mt-3 text-lg font-black text-[#2f281f]">
                {item.label}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#6b5a45]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
