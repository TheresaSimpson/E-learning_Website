import React from 'react'

import a1 from "../assets/img/a1.jpg";
import a2 from "../assets/img/a2.jpg";
import a3 from "../assets/img/a3.jpg";
const AboutSec3 = () => {
    return (
      <div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-24">
          {/* <!-- card1 --> */}

          <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={a1} alt="IT" />
            <div className="px-6 py-4">
              <div class="font-bold text-3xl mb-2">Study at the comfort of your home</div>
            </div>
          </div>

          {/* <!-- card2 --> */}

          <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={a2} alt="IT" />
            <div className="px-6 py-4">
              <div class="font-bold text-3xl mb-2">Learn by practicing questions</div>
            </div>
          </div>

          {/* <!-- card3 --> */}
          <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={a3} alt="IT" />
            <div className="px-6 py-4">
              <div className="font-bold text-3xl mb-2">News</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutSec3;
