import React from "react";

export default function cocktailHeader(){

  return(
    <div>
      <div className="flex justify-center h-[400px]"><img src={`${process.env.PUBLIC_URL}/assets/cocktail1.png`} /></div>
      <h1 className="text-center text-6xl text-white absolute top-36 inset-0 flex justify-center" id="myClub_heading" style={{ fontFamily: '"Dancing Script", sans-serif' }}>
        sex on the beach<br></br> Margarita
      </h1>
      <h3 className="text-center text-xl text-gray-500 mb-20 mt-8">
        Life's journey thrives on exploration, the ultimate way to connect with<br></br>
        opportunities and discover new horizons globally.
      </h3>
    </div>
  )
}