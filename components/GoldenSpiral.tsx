import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function GoldenSpiral({
  triggerAnimate,
}: {
  triggerAnimate: boolean;
}) {
  const containRef = useRef<HTMLDivElement>(null);
  const [isToggled, setIsToggled] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsToggled(!isToggled);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1000);
      }, 1000);
    }
  }, []);

  useEffect(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsToggled((prevState) => !prevState);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
    }
  }, [triggerAnimate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="parentcenter absolute top-0 -z-10 h-full w-full overflow-clip">
        {/* <div className="childcenter absolute top-0 h-full w-full"> */}
        <div ref={containRef} className={`contain ${isToggled && "toggled"} `}>
          <div className="arch">
            <div className="arch">
              <div className="arch">
                <div className="arch">
                  <div className="arch">
                    <div className="arch">
                      <div className="arch">
                        <div className="arch">
                          <div className="arch">
                            <div className="arch">
                              <div className="arch">
                                <div className="arch">
                                  <div className="arch">
                                    <div className="arch">
                                      <div className="arch">
                                        <div className="arch"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </motion.div>
  );
}
