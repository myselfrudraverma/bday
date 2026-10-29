import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Wind } from "lucide-react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
const Birthday = () => {
  const navigate = useNavigate();
  const [blown, setBlown] = useState(false);

  const handleBlow = () => {
    setBlown(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#090714] text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main pink glow */}
        <motion.div
          className="absolute left-1/2 top-[35%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[130px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple glow */}
        <motion.div
          className="absolute -left-32 top-[10%] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Stars */}
        {[...Array(30)].map((_, index) => (
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
            }}
          />
        ))}
      </div>

      {/* ================= CONFETTI ================= */}

      <AnimatePresence>
        {blown && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={180}
            recycle={false}
            gravity={0.18}
            initialVelocityY={-12}
            className="pointer-events-none fixed inset-0 z-50"
          />
        )}
      </AnimatePresence>

      {/* ================= CONTENT ================= */}

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-10">
        <AnimatePresence mode="wait">
          {/* ================= BEFORE BLOW ================= */}

          {!blown ? (
            <motion.div
              key="cake"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{
                opacity: 0,
                scale: 0.85,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex w-full max-w-md flex-col items-center text-center"
            >
              {/* Small heading */}

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mb-3 text-xs uppercase tracking-[0.4em] text-white/40"
              >
                Before anything else...
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mb-10 text-2xl font-light tracking-tight sm:text-3xl"
              >
                Make a wish.
              </motion.h1>

              {/* ================= CAKE ================= */}

              <div className="relative flex h-[280px] w-full items-end justify-center">
                {/* Cake glow */}

                <motion.div
                  className="absolute bottom-8 h-36 w-64 rounded-full bg-pink-500/20 blur-[55px]"
                  animate={{
                    opacity: [0.25, 0.45, 0.25],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Plate */}

                <div className="absolute bottom-7 h-4 w-72 max-w-[85%] rounded-[50%] border border-white/10 bg-white/5 shadow-[0_0_35px_rgba(255,255,255,0.05)]" />

                {/* Bottom cake layer */}

                <motion.div
                  className="absolute bottom-11 h-[92px] w-60 max-w-[72%] rounded-b-2xl rounded-t-md border border-pink-200/10 bg-gradient-to-b from-[#e58ba8] via-[#b9577a] to-[#71324c] shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Frosting */}

                  <div className="absolute -top-3 left-0 right-0 h-7 rounded-[50%] bg-gradient-to-b from-[#ffe4ec] to-[#f2b2c7]" />

                  {/* Frosting drips */}

                  <span className="absolute -top-1 left-[12%] h-7 w-5 rounded-b-full bg-[#f5c1d2]" />
                  <span className="absolute -top-1 left-[42%] h-10 w-5 rounded-b-full bg-[#f5c1d2]" />
                  <span className="absolute -top-1 right-[18%] h-6 w-5 rounded-b-full bg-[#f5c1d2]" />

                  {/* Cake decorations */}

                  <div className="absolute inset-x-8 top-10 flex justify-between">
                    <span className="h-2 w-2 rounded-full bg-pink-200/70" />
                    <span className="h-2 w-2 rounded-full bg-white/70" />
                    <span className="h-2 w-2 rounded-full bg-pink-200/70" />
                    <span className="h-2 w-2 rounded-full bg-white/70" />
                  </div>
                </motion.div>

                {/* Top cake layer */}

                <motion.div
                  className="absolute bottom-[92px] h-[62px] w-48 max-w-[60%] rounded-xl border border-pink-100/10 bg-gradient-to-b from-[#f0a4bc] to-[#a94769] shadow-lg"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.1,
                  }}
                >
                  <div className="absolute -top-2 left-0 right-0 h-5 rounded-[50%] bg-[#ffe8ef]" />

                  <span className="absolute -top-1 left-[20%] h-6 w-4 rounded-b-full bg-[#f5c1d2]" />
                  <span className="absolute -top-1 right-[25%] h-5 w-4 rounded-b-full bg-[#f5c1d2]" />
                </motion.div>

                {/* Candle */}

                <div className="absolute bottom-[145px] z-20 flex flex-col items-center">
                  {/* Flame */}

                  <AnimatePresence>
                    {!blown && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0.8, 1, 0.85, 1],
                          scale: [1, 1.08, 0.95, 1],
                          rotate: [-2, 3, -2, 2],
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0,
                          y: -15,
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative mb-1 h-8 w-5"
                      >
                        <div className="absolute left-1/2 top-0 h-7 w-4 -translate-x-1/2 rounded-[50%_50%_50%_50%] bg-gradient-to-t from-orange-500 via-yellow-300 to-white blur-[1px]" />

                        <div className="absolute left-1/2 top-2 h-4 w-2 -translate-x-1/2 rounded-full bg-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Candle */}

                  <div className="relative h-12 w-5 overflow-hidden rounded-t-sm rounded-b-md bg-gradient-to-r from-pink-200 via-white to-pink-200 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
                    <div className="absolute inset-0 opacity-30">
                      <div className="h-full w-1/2 border-r border-pink-300" />
                    </div>
                  </div>

                  {/* Wick */}

                  <div className="absolute top-[-3px] h-2 w-[2px] bg-black/70" />
                </div>
              </div>

              {/* Instruction */}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="mt-3 text-sm text-white/45"
              >
                Close your eyes... and make a wish.
              </motion.p>

              {/* Blow button */}

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.8,
                  duration: 0.8,
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 35px rgba(244,114,182,0.2)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={handleBlow}
                className="group relative mt-7 flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm backdrop-blur-md transition-all duration-300 hover:border-pink-300/30 hover:bg-white/10"
              >
                {/* Shine */}

                <motion.span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />

                <Wind
                  size={17}
                  className="relative z-10 text-pink-200 transition-transform duration-300 group-hover:-translate-x-1"
                />

                <span className="relative z-10">Blow the candle</span>
              </motion.button>
            </motion.div>
          ) : (
            /* ================= AFTER BLOW ================= */

            <motion.div
              key="card"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex w-full max-w-md flex-col items-center"
            >
              {/* Smoke */}

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{
                  opacity: [0, 0.35, 0],
                  y: -70,
                  scale: 1.5,
                }}
                transition={{
                  duration: 3,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute top-[25%] h-10 w-10 rounded-full bg-white/20 blur-xl"
              />

              {/* Card */}

              <motion.div
                initial={{
                  rotateX: -70,
                  opacity: 0,
                }}
                animate={{
                  rotateX: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformPerspective: 1200,
                }}
                className="relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-7"
              >
                {/* Card glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-pink-500/15 blur-[70px]" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-purple-500/15 blur-[70px]" />

                {/* Card content */}

                <div className="relative z-10">
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-xs uppercase tracking-[0.35em] text-pink-200/60"
                  >
                    Today is yours
                  </motion.p>

                  <motion.h1
                    initial={{
                      opacity: 0,
                      y: 15,
                      filter: "blur(8px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      delay: 1,
                      duration: 1,
                    }}
                    className="mt-3 text-4xl font-light tracking-tight sm:text-5xl"
                  >
                    Happy
                    <br />
                    <span className="font-normal text-pink-300">
                      Birthday ❤️
                    </span>
                  </motion.h1>

                  {/* Image */}

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1.5,
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mx-auto mt-7 aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl"
                  >
                    {/* Image glow */}

                    <div className="absolute -inset-3 rounded-3xl bg-pink-400/10 blur-2xl" />

                    <img
                      src="https://ik.imagekit.io/rudra671/731396400_1018935504119206_6400610730186590545_n.jpg"
                      alt="Birthday"
                      className="relative h-full w-full object-cover"
                    />

                    {/* Image overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </motion.div>

                  {/* Message */}

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 2,
                      duration: 0.8,
                    }}
                    className="mx-auto mt-6 max-w-sm text-sm leading-7 text-white/55"
                  >
                    Today isn't just another day.
                    <br />
                    It's the day someone very special came into this world.
                  </motion.p>

                  {/* Next */}

                  <motion.button
                    onClick={() => navigate("/message")}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 2.5,
                      duration: 0.8,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(244,114,182,0.18)",
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="group mx-auto mt-7 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm backdrop-blur-md transition-all duration-300 hover:border-pink-300/30 hover:bg-white/10"
                  >
                    <span>There’s more</span>

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Bottom fade */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090714] to-transparent" />
    </main>
  );
};

export default Birthday;
