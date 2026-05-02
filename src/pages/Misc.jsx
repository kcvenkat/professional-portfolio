import useScroll from "../helpers/scroll"
import Confetti from "../helpers/Confetti"
import { useEffect, useState } from "react"
import "./Misc.css"

function Misc() {
  useScroll();
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    const hasSeen = localStorage.getItem("seenConfetti");
    if (!hasSeen) {
      setShowConfetti(true);
      localStorage.setItem("seenConfetti", "true");
    }
    localStorage.setItem("visitedMisc", "true");
  }, []);

  return (
    <>
      {showConfetti && <Confetti />}
      <h1 className="title item">Miscellaneous</h1>
      <p className="supports item">You made it!</p>
      <p className="long-desc outside item">Thank you for taking the time to solve my mini CTF challenge. Now, you know me a bit deeper than my surface-level professional portfolio. Welcome to my "Miscellaneous" page. This page contains information and productions that stem from my hobbies like making music or reading and discussing philosophy. While this page is still a work in progress, I will keep adding items to it as I indulge in more creative pursuits.</p>
      <div className="music-container">
        <p className="list-title item">My Music</p>
        <p className="long-desc item">I make Lo-Fi music inspired by techno and synth-like sounds and choppy 808-like kicks, snares, and hi-hats. My favorite genre of music is generally calm music like RnB, Lo-Fi, and Hip Hop. My main motivation to produce music is both to refine my songwriting with my guitar and have something to listen to while I work. I hope others can find the same solace in my music.</p>
        <p className="long-desc item">Use the VHS widget to listen to each song, and it should autoplay the next song.</p>
        <div className="soundcloud-frame">
          <div className="vhs-body item">
            <div className="vhs-screw screw-tl"></div>
            <div className="vhs-screw screw-tr"></div>
            <div className="vhs-screw screw-bl"></div>
            <div className="vhs-screw screw-br"></div>
            <div className="vhs-stripe"></div>
            <div className="vhs-top">
              <div className="reel-box">
                <div className="reel">
                  <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="28" cy="28" r="26" fill="#0d0d1a" stroke="#452092" strokeWidth="2"/>
                    <circle cx="28" cy="28" r="8" fill="#1a1a2e" stroke="#7b5ea7" strokeWidth="1.5"/>
                    <line x1="28" y1="4" x2="28" y2="14" stroke="#452092" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="28" y1="42" x2="28" y2="52" stroke="#452092" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="4" y1="28" x2="14" y2="28" stroke="#452092" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="42" y1="28" x2="52" y2="28" stroke="#452092" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="11" y1="11" x2="18" y2="18" stroke="#452092" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="38" y1="38" x2="45" y2="45" stroke="#452092" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="45" y1="11" x2="38" y2="18" stroke="#452092" strokeWidth="1.5" strokeLinecap="round"/>
                    <line x1="18" y1="38" x2="11" y2="45" stroke="#452092" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="28" cy="28" r="4" fill="#452092"/>
                  </svg>
                </div>
              </div>
              <div className="screen-wrap">
                <iframe
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A2230720256&color=%23452092&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                  allow="autoplay"
                  title="SoundCloud Player"
                />
              </div>
            </div>
            <div className="vhs-middle">
              <div className="led"></div>
              <div className="tape-window">
                <div className="tape-strip"></div>
              </div>
              <div className="counter">00:00</div>
            </div>
            <div className="vhs-bottom">
            <a href="https://soundcloud.com/ahikksu" target="_blank" rel="noopener noreferrer" className="vhs-link">
              <span className="vhs-label">Lo-Fi Collection · Ahikksu</span>
            </a>
              <span className="vhs-brand">VHS-180</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Misc;