"use client";
import { motion } from "framer-motion";
import { ElementType, Fragment } from "react";

type Part = {
  text: string;
  /** Render this part in the brand accent color */
  accent?: boolean;
  /** Apply the animated gradient shimmer (use sparingly — at most once per page) */
  shimmer?: boolean;
  /** Force a line break before this part */
  breakBefore?: boolean;
};

interface RevealHeadingProps {
  parts: Part[];
  as?: ElementType;
  className?: string;
  /** Delay (s) before the first word starts animating */
  startDelay?: number;
  /** Gap (s) between each word */
  stagger?: number;
  /** Center text alignment, used to size the viewport margin nicely */
  align?: "left" | "center";
}

/**
 * Splits heading text into words and reveals them on scroll with a
 * staggered blur-to-focus motion. This is the site's signature text
 * animation — used consistently across every section title so the
 * effect reads as an intentional design choice rather than a one-off.
 */
export default function RevealHeading({
  parts,
  as: Tag = "h2",
  className = "",
  startDelay = 0,
  stagger = 0.045,
  align = "left",
}: RevealHeadingProps) {
  let wordIndex = 0;

  return (
    <Tag className={className}>
      {parts.map((part, pi) => {
        const words = part.text.split(" ").filter(Boolean);
        const spanClass = part.shimmer
          ? "shimmer-text"
          : part.accent
          ? "text-[var(--color-primary)] drop-shadow-[0_0_16px_rgba(230,0,0,0.45)]"
          : "";

        return (
          <Fragment key={pi}>
            {part.breakBefore && <br className="hidden lg:block" />}
            <span className={spanClass}>
              {words.map((word, wi) => {
                const idx = wordIndex++;
                return (
                  <span
                    key={wi}
                    className="inline-block overflow-hidden align-bottom pb-[0.12em]"
                  >
                    <motion.span
                      className="inline-block will-change-transform"
                      initial={{ opacity: 0, y: "70%", filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: "0%", filter: "blur(0px)" }}
                      viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: align === "center" ? 0.6 : 0.8 }}
                      transition={{
                        duration: 0.65,
                        ease: [0.22, 1, 0.36, 1],
                        delay: startDelay + idx * stagger,
                      }}
                    >
                      {word}
                      {wi < words.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                  </span>
                );
              })}
            </span>{" "}
          </Fragment>
        );
      })}
    </Tag>
  );
}
