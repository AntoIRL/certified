import React from "react";

const Footer = () => {
  return (
    <footer className="relative">
      <section className="max-w-[1240px] mt-20 mb-10 mx-auto  gap-2 font-body top-7 md:p-10">
        <div className="grid footer justify-between gap-[88px] md:grid-cols-2 md:gap-6 ">
          <div className="col-span-1">
            <div className="flex justify-start gap-1">
              <img src="logo.png" alt="logo" className="w-[117px] h-[42px]" />
            </div>
          </div>
        </div>
      </section>

    </footer>
  );
};

export default Footer;
