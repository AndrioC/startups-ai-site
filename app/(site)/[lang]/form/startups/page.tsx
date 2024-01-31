"use client";

import FormStep from "@/components/form/startups/form-step";
import HeaderSteps from "@/components/form/startups/header-steps";
import { FormProvider } from "@/contexts/FormContext";

export default function FormStartusPage() {
  return (
    // <section className="flex flex-col justify-between p-24">
    //   {/* steps */}
    //   <nav aria-label="Progress">
    //     <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
    //       {steps.map((step, index) => (
    //         <li key={step.name} className="md:flex-1">
    //           {currentStep > index ? (
    //             <div className="group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
    //               <span className="text-sm font-medium text-sky-600 transition-colors ">
    //                 {step.id}
    //               </span>
    //               <span className="text-sm font-medium">{step.name}</span>
    //             </div>
    //           ) : currentStep === index ? (
    //             <div
    //               className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
    //               aria-current="step"
    //             >
    //               <span className="text-sm font-medium text-sky-600">
    //                 {step.id}
    //               </span>
    //               <span className="text-sm font-medium">{step.name}</span>
    //             </div>
    //           ) : (
    //             <div className="group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
    //               <span className="text-sm font-medium text-gray-500 transition-colors">
    //                 {step.id}
    //               </span>
    //               <span className="text-sm font-medium">{step.name}</span>
    //             </div>
    //           )}
    //         </li>
    //       ))}
    //     </ol>
    //   </nav>

    //   {/* Form */}
    //   <form className="mt-12 py-12" onSubmit={handleSubmit(processForm)}>
    //     {currentStep === 0 && (
    //       <motion.div
    //         initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
    //         animate={{ x: 0, opacity: 1 }}
    //         transition={{ duration: 0.3, ease: "easeInOut" }}
    //       >
    //         <DataAboutStartupsForm />
    //       </motion.div>
    //     )}

    //     {currentStep === 1 && (
    //       <motion.div
    //         initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
    //         animate={{ x: 0, opacity: 1 }}
    //         transition={{ duration: 0.3, ease: "easeInOut" }}
    //       >
    //         <h2 className="text-base font-semibold leading-7 text-gray-900">
    //           Address
    //         </h2>
    //         <p className="mt-1 text-sm leading-6 text-gray-600">
    //           Address where you can receive mail.
    //         </p>

    //         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    //           <div className="sm:col-span-3">
    //             <label
    //               htmlFor="country"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Country
    //             </label>
    //             <div className="mt-2">
    //               <select
    //                 id="country"
    //                 {...register("country")}
    //                 autoComplete="country-name"
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
    //               >
    //                 <option>United States</option>
    //                 <option>Canada</option>
    //                 <option>Mexico</option>
    //               </select>
    //               {errors.country?.message && (
    //                 <p className="mt-2 text-sm text-red-400">
    //                   {errors.country.message}
    //                 </p>
    //               )}
    //             </div>
    //           </div>

    //           <div className="col-span-full">
    //             <label
    //               htmlFor="street"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               Street address
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 type="text"
    //                 id="street"
    //                 {...register("street")}
    //                 autoComplete="street-address"
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
    //               />
    //               {errors.street?.message && (
    //                 <p className="mt-2 text-sm text-red-400">
    //                   {errors.street.message}
    //                 </p>
    //               )}
    //             </div>
    //           </div>

    //           <div className="sm:col-span-2 sm:col-start-1">
    //             <label
    //               htmlFor="city"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               City
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 type="text"
    //                 id="city"
    //                 {...register("city")}
    //                 autoComplete="address-level2"
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
    //               />
    //               {errors.city?.message && (
    //                 <p className="mt-2 text-sm text-red-400">
    //                   {errors.city.message}
    //                 </p>
    //               )}
    //             </div>
    //           </div>

    //           <div className="sm:col-span-2">
    //             <label
    //               htmlFor="state"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               State / Province
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 type="text"
    //                 id="state"
    //                 {...register("state")}
    //                 autoComplete="address-level1"
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
    //               />
    //               {errors.state?.message && (
    //                 <p className="mt-2 text-sm text-red-400">
    //                   {errors.state.message}
    //                 </p>
    //               )}
    //             </div>
    //           </div>

    //           <div className="sm:col-span-2">
    //             <label
    //               htmlFor="zip"
    //               className="block text-sm font-medium leading-6 text-gray-900"
    //             >
    //               ZIP / Postal code
    //             </label>
    //             <div className="mt-2">
    //               <input
    //                 type="text"
    //                 id="zip"
    //                 {...register("zip")}
    //                 autoComplete="postal-code"
    //                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
    //               />
    //               {errors.zip?.message && (
    //                 <p className="mt-2 text-sm text-red-400">
    //                   {errors.zip.message}
    //                 </p>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </motion.div>
    //     )}

    //     {currentStep === 2 && (
    //       <>
    //         <h2 className="text-base font-semibold leading-7 text-gray-900">
    //           Complete
    //         </h2>
    //         <p className="mt-1 text-sm leading-6 text-gray-600">
    //           Thank you for your submission.
    //         </p>
    //       </>
    //     )}
    //   </form>

    //   {/* Navigation */}
    //   <div className="mt-8 pt-5">
    //     <div className="flex justify-between">
    //       <button
    //         type="button"
    //         onClick={prev}
    //         disabled={currentStep === 0}
    //         className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="currentColor"
    //           className="h-6 w-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M15.75 19.5L8.25 12l7.5-7.5"
    //           />
    //         </svg>
    //       </button>
    //       <button
    //         type="button"
    //         onClick={next}
    //         disabled={currentStep === steps.length - 1}
    //         className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="currentColor"
    //           className="h-6 w-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M8.25 4.5l7.5 7.5-7.5 7.5"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </section>
    <FormProvider>
      <div className="flex flex-col items-center mt-5 mb-5">
        <HeaderSteps />
        <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100 w-[720px]">
          <div className="max-w-2xl w-full border p-6 rounded-md bg-white">
            <FormStep />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
