export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-divider bg-white"
    >
      <div className="mx-auto flex w-full max-w-[1034px] flex-col gap-4 px-6 py-12 sm:px-12 sm:py-16">
        <h2 className="text-[16px] leading-[1.26] font-normal tracking-[-0.56px] text-black">
          Contact
        </h2>
        <p className="text-[15px] leading-[22px] text-text-muted sm:text-[16px] sm:leading-[24px]">
          Get in touch to discuss design work or collaborations.
        </p>
      </div>
    </section>
  );
}
