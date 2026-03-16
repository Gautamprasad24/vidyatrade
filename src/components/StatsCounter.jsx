import React from "react";
import CountUp from "react-countup";

export default function StatsCounter() {

  const stats = [
    { number: 10, label: "Years Experience" },
    { number: 500, label: "Products Sold" },
    { number: 200, label: "Happy Clients" },
    { number: 50, label: "Distributors" }
  ];

  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 text-center gap-10">

        {stats.map((item, index) => (

          <div
            key={index}
            className="transition transform hover:scale-110"
          >

            <h3 className="text-4xl font-bold text-[var(--primary)]">

              <CountUp
                end={item.number}
                duration={2.5}
                enableScrollSpy
                scrollSpyDelay={200}
              />+

            </h3>

            <p className="text-gray-600">
              {item.label}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}