"use client"

import { CheckCircle } from "lucide-react"
import { testingSteps } from "@/lib/data"

export function TestingProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Testing Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How we evaluate and rank each betting site to ensure quality and reliability
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>

            {testingSteps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Step Number */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full font-bold text-lg mr-6 floating">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mr-2" />
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
