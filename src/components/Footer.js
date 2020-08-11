import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="w-90 mx-auto flex justify-between py-8">
        <p>
          Original Idea by
          <a
            href="https://github.com/bchiang7/octoprofile"
            target="_blank"
            rel="noreferrer"
            className='hover:text-green-500 hover:underline'
          >
           {' '}Britanny Chang
          </a>
        </p>

        <p>Made with React|TailwindCSS|FramerMotion|GhPolyglot|ChartJS</p>

        <h4>
          Coded by
          <a
            href="https://github.com/theAspiringDev1"
            target="_blank"
            rel="noreferrer"
            className='hover:text-main hover:underline'
          >
             {' '}Norberto Ignacio
          </a>
        </h4>
      </div>
    </footer>
  );
}
