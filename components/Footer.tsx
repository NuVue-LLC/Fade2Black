"use client";

import AnimateIn from "./AnimateIn";
import DarkMap from "./DarkMap";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-black-soft border-t border-dark-light/30">
      {/* Footer info */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-white mb-4">
              FADE<span className="text-red">2</span>BLACK
            </h3>
            <p className="font-body text-sm text-silver leading-relaxed">
              Quality pre-owned vehicles in Indianola, Iowa.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4">CONTACT</h4>
            <div className="space-y-3 font-body text-sm text-silver">
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+15158683990" className="hover:text-red transition-colors">(515) 868-3990</a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                1003 West 2nd Ave, Indianola, IA 50125
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <a href="https://www.facebook.com/austin.easter.371059/" target="_blank" rel="noopener noreferrer" className="hover:text-red transition-colors">Facebook</a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-xl text-white mb-4">HOURS</h4>
            <div className="space-y-2 font-body text-sm text-silver">
              <div className="flex justify-between">
                <span>Mon - Tue</span>
                <span className="text-white">11:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Wed - Thu</span>
                <span className="text-white">11:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span className="text-white">12:00 PM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white">10:00 AM - 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-red">Closed</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/austin.easter.371059/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-light hover:bg-red flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 overflow-hidden rounded-lg border border-dark-light/50">
          <DarkMap />
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-light/30 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-silver/50 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Fade 2 Black &mdash; Indianola, Iowa. All rights reserved.
          </p>
          <p className="font-body text-[10px] text-silver/30 mt-2">
            Powered by{" "}
            <a href="https://nuvuepro.com" target="_blank" rel="noopener noreferrer" className="hover:text-silver/50 transition-colors">
              NuVue
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
