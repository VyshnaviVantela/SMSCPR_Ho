export default function RegistrationModal() {
  return (
    <div className="fixed left-55 top-33 right-4 bottom-30 flex items-start justify-start">
      
      <div className="relative flex w-full flex-col items-center rounded-[15px] bg-white px-0 pt-7.5 pb-12 font-[Lato,sans-serif]">

        {/* CLOSE */}
        <div className="absolute top-12.5 right-7.5 cursor-pointer text-[15px] font-black text-black">
          ✖
        </div>

        {/* HEADER */}
        <div className="max-w-215 px-10 pt-12.5 text-center">
          <h2 className="mx-1.25 mt-11 mb-1 text-[25px] font-[750] text-[#514c4c]">
            Get started as a registered sender
          </h2>

          <p className="text-[15px] font-medium leading-[1.6] text-[#4A4A4A]">
            To comply with mobile carrier regulations, all businesses must register before sending text messages. Don't worry <br /> — this process is quick and straightforward.
          </p>
        </div>

        {/* SECTION TITLE */}
        <div className="mt-10 w-full text-center text-[17px] font-bold text-[#3A3A3A]">
          Here's what you'll need:
        </div>

        {/* CARDS */}
        <div className="flex w-full gap-5 px-8 pt-4">

          {/* CARD 1 */}
          <div className="relative flex basis-[32%] gap-3 rounded-[0px_15px_0px_4px] bg-[#FAFAFA] px-6 py-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2B7FCC]" />
            <div className="text-[50px]  font-semibold text-[#2B7FCC]">1</div>
            <div>
              <div className="text-[16px] font-semibold text-[#454242]">Business information</div>
              <p className="m-0 text-[14px] font-normal leading-[1.8] text-[#4A4A4A]"> Provide essential details like your company's EIN, industry, and registered street address. </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative flex basis-[32%] gap-3 rounded-[0px_15px_0px_4px] bg-[#FAFAFA] px-6 py-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4CB9E5]" />
            <div className="text-[50px] font-semibold text-[#2B7FCC]">2</div>
            <div>
              <div className="text-[16px] font-semibold  text-[#454242]">Use case & consent</div>
              <p className="m-0 text-[14px] font-normal leading-[1.8] text-[#4A4A4A]"> Share how you plan to use texting and describe your method for collecting customer consent. </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative flex basis-[32%] gap-3 rounded-[0px_15px_0px_4px] bg-[#FAFAFA] px-6 py-6">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2B7FCC]" />
            <div className="text-[50px] font-semibold text-[#2B7FCC]">3</div>
            <div>
              <div className="text-[16px] font-semibold text-[#454242]">Approval timeline</div>
              <p className="m-0 text-[14px] font-normal leading-[1.8] text-[#4A4A4A]"> Approval usually takes less than 1 business day. Errors may extend the process to 3 days, so double-check your information before submitting. </p>
            </div>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="mt-10 flex gap-5">
          <button className="text-[#083050] font-bold">Set up later</button>

          <button className="rounded-lg bg-[#003F70] px-5 py-2 text-white font-bold hover:bg-[#005A9C] transition">
            Begin Registration
          </button>
        </div>

      </div>
    </div>
  );
}