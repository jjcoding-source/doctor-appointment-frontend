export default function Home() {
  return (
    <div className="bg-white">

      {}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

          {}
          <div>
            <span className="inline-block px-4 py-1 mb-4 text-sm rounded-full bg-indigo-100 text-indigo-600">
              24/7 Services Available
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Your Health, Our Technology. <br />
              Trusted Doctors at Your Fingertips.
            </h1>

            <p className="mt-6 text-gray-600 max-w-xl">
              Book appointments with certified doctors, manage your visits
              easily and access healthcare services from anywhere.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                Book Appointment
              </button>

              <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                See how it works
              </button>
            </div>
          </div>

          {}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600959907703-125ba1374a12?q=80&w=1200&auto=format&fit=crop"
                alt="Doctors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">
              Medical Support for Every Need
            </h2>
            <p className="mt-4 text-gray-600">
              Comprehensive healthcare services designed to meet all your medical needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <ServiceCard
              title="General Consultations"
              desc="Diagnosis, prescriptions and expert advice in minutes."
            />

            <ServiceCard
              title="Pediatrics"
              desc="Specialized care for your child’s health and development."
              highlighted
            />

            <ServiceCard
              title="Dental Services"
              desc="Cleanings, fillings and smile makeovers."
            />

            <ServiceCard
              title="Mental Health"
              desc="Private therapy and psychiatric consultations."
            />

            <ServiceCard
              title="Diagnostics & Lab Tests"
              desc="Accurate reports delivered directly to your phone."
            />

            <ServiceCard
              title="Chronic Care Programs"
              desc="Personalized plans for long-term health conditions."
            />

          </div>
        </div>
      </section>

    </div>
  );
}



function ServiceCard({ title, desc, highlighted }) {
  return (
    <div
      className={`rounded-2xl p-6 transition shadow-sm hover:shadow-lg
        ${highlighted
          ? "bg-indigo-600 text-white"
          : "bg-white text-gray-900"
        }`}
    >
      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p
        className={`mt-3 text-sm
          ${highlighted ? "text-indigo-100" : "text-gray-600"}
        `}
      >
        {desc}
      </p>

      <button
        className={`mt-6 text-sm font-medium
          ${highlighted ? "text-white" : "text-indigo-600"}
        `}
      >
        Learn more →
      </button>
    </div>
  );
}