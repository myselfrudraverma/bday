import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Message = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);

  const revealLines = [
    "There are some things",
    "I've never properly said...",
    "",
    "Somehow, you became a part of my everyday life",
    "without me even realizing when it happened.",
    "",
    "And now, all those little moments with you",
    "have become some of my favorite memories.",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090714] text-white">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[140px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple glow */}
        <motion.div
          className="absolute -left-32 top-[20%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Pink glow */}
        <motion.div
          className="absolute -right-32 bottom-[15%] h-[300px] w-[300px] rounded-full bg-pink-500/10 blur-[120px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Stars */}
        {[...Array(35)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-[2px] w-[2px] rounded-full bg-white"
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 61) % 100}%`,
            }}
            animate={{
              opacity: [0.05, 0.7, 0.05],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-10">

        <AnimatePresence mode="wait">

          {/* ===================================================== */}
          {/* CLOSED GIFT */}
          {/* ===================================================== */}

          {!opened ? (
            <motion.div
              key="closed"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex w-full flex-col items-center text-center"
            >

              {/* Small text */}

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                }}
                className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40"
              >
                I have something for you
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.7,
                  duration: 0.8,
                }}
                className="mb-12 text-2xl font-light sm:text-3xl"
              >
                Open this when you're ready.
              </motion.h1>

              {/* ================= GIFT ================= */}

              <motion.button
                onClick={() => setOpened(true)}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group relative h-[230px] w-[230px] cursor-pointer sm:h-[260px] sm:w-[260px]"
              >

                {/* Glow */}

                <motion.div
                  className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/20 blur-[70px]"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.25, 0.45, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Shadow */}

                <div className="absolute bottom-4 left-1/2 h-7 w-48 -translate-x-1/2 rounded-full bg-black/50 blur-xl" />

                {/* Gift body */}

                <div className="absolute bottom-8 left-1/2 h-[125px] w-[175px] -translate-x-1/2 rounded-b-xl border border-pink-200/20 bg-gradient-to-br from-[#c94e76] via-[#a93d62] to-[#6e2844] shadow-[0_25px_50px_rgba(0,0,0,0.45)] sm:h-[140px] sm:w-[190px]">

                  {/* Vertical ribbon */}

                  <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-gradient-to-r from-pink-200/30 via-pink-100/50 to-pink-200/30" />

                  {/* Horizontal ribbon */}

                  <div className="absolute left-0 top-1/2 h-8 w-full -translate-y-1/2 bg-gradient-to-b from-pink-200/25 via-pink-100/40 to-pink-200/25" />

                </div>

                {/* Gift lid */}

                <motion.div
                  className="absolute left-1/2 top-[68px] z-20 h-[38px] w-[195px] -translate-x-1/2 rounded-lg border border-pink-100/20 bg-gradient-to-r from-[#d96088] via-[#bd4c74] to-[#963856] shadow-lg sm:w-[210px]"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  {/* Lid ribbon */}

                  <div className="absolute left-1/2 top-0 h-full w-8 -translate-x-1/2 bg-pink-100/35" />

                </motion.div>

                {/* Ribbon bow */}

                <motion.div
                  className="absolute left-1/2 top-[38px] z-30 -translate-x-1/2"
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >

                  {/* Left loop */}

                  <div className="absolute right-1 h-9 w-12 rotate-[25deg] rounded-full border border-pink-100/20 bg-gradient-to-br from-pink-200/50 to-pink-400/30" />

                  {/* Right loop */}

                  <div className="absolute left-1 h-9 w-12 rotate-[-25deg] rounded-full border border-pink-100/20 bg-gradient-to-br from-pink-200/50 to-pink-400/30" />

                  {/* Center */}

                  <div className="relative z-10 h-6 w-6 rounded-full border border-pink-100/30 bg-pink-200/60" />

                </motion.div>

              </motion.button>

              {/* Hint */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.5,
                  duration: 1,
                }}
                className="mt-7 flex items-center gap-2 text-xs text-white/35"
              >
                <Gift size={14} />
                <span>Tap the gift</span>
              </motion.div>

            </motion.div>
          ) : (

            /* ===================================================== */
            /* OPENED GIFT */
            /* ===================================================== */

            <motion.div
              key="opened"
              className="flex w-full max-w-xl flex-col items-center text-center"
            >

              {/* ================= OPENING GIFT ANIMATION ================= */}

              <motion.div
                initial={{
                  opacity: 1,
                  scale: 1,
                }}
                animate={{
                  opacity: 0,
                  scale: 0.7,
                  filter: "blur(12px)",
                }}
                transition={{
                  duration: 1.2,
                  delay: 1.8,
                }}
                className="relative mb-[-180px] h-[220px] w-[220px]"
              >

                {/* Light coming out */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: [0, 1, 0.8],
                    scale: [0.3, 1.5, 1.8],
                  }}
                  transition={{
                    duration: 1.8,
                    ease: "easeOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/50 blur-3xl"
                />

                {/* Box */}

                <div className="absolute bottom-5 left-1/2 h-28 w-44 -translate-x-1/2 rounded-b-xl bg-gradient-to-br from-[#c94e76] to-[#702844]" />

                {/* Lid */}

                <motion.div
                  initial={{
                    y: 0,
                    rotate: 0,
                  }}
                  animate={{
                    y: -100,
                    rotate: -8,
                  }}
                  transition={{
                    duration: 1.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-[65px] z-20 h-9 w-48 -translate-x-1/2 rounded-lg bg-gradient-to-r from-[#d96088] to-[#963856]"
                />

              </motion.div>

              {/* ================= MESSAGE ================= */}

              <div className="relative z-10 w-full">

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 2.2,
                    duration: 0.8,
                  }}
                  className="text-xs uppercase tracking-[0.4em] text-pink-200/50"
                >
                  A little something from me
                </motion.p>

                {/* Main title */}

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 25,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    delay: 2.5,
                    duration: 1,
                  }}
                  className="mt-6 text-3xl font-light leading-tight sm:text-5xl"
                >
                  There are some things
                  <br />
                  <span className="text-pink-300">
                    I've never properly said...
                  </span>
                </motion.h1>

                {/* Message lines */}

                <div className="mx-auto mt-10 max-w-lg space-y-5">

                  {revealLines.map((line, index) => {

                    if (!line) {
                      return (
                        <div
                          key={index}
                          className="h-1"
                        />
                      );
                    }

                    return (
                      <motion.p
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 18,
                          filter: "blur(7px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          delay: 3 + index * 0.45,
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                        className="text-sm leading-7 text-white/55 sm:text-base"
                      >
                        {line}
                      </motion.p>
                    );
                  })}

                </div>

                {/* Continue */}

                <motion.button
                  onClick={() => navigate("/memories")}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 7,
                    duration: 0.8,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 35px rgba(244,114,182,0.18)",
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group mt-10 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm backdrop-blur-md transition-all duration-300 hover:border-pink-300/30 hover:bg-white/10"
                >
                  <span>Continue</span>

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </section>

      {/* Bottom fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090714] to-transparent" />

    </main>
  );
};

export default Message;
