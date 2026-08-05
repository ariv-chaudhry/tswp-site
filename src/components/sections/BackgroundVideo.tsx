/**
 * Background video for hero-style sections.
 *
 * Ideal final source (if the team has permission to host a copy):
 *   /public/videos/water-bg.mp4
 *
 * Temporary source (Wix CDN):
 *   https://video.wixstatic.com/video/11062b_ebf4b596cf0d44a297df02c03d90ce46/720p/mp4/file.mp4
 */
const TEMP_VIDEO_SRC =
  "https://video.wixstatic.com/video/11062b_ebf4b596cf0d44a297df02c03d90ce46/720p/mp4/file.mp4";

interface BackgroundVideoProps {
  /** Optional override; defaults to the temporary Wix CDN URL */
  src?: string;
  className?: string;
}

export function BackgroundVideo({
  src = TEMP_VIDEO_SRC,
  className = "",
}: BackgroundVideoProps) {
  return (
    <div
      className={`hero-bg-video pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <video
        className="absolute inset-0 h-full w-full max-w-none object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
