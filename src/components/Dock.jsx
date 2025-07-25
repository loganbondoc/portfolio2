// "use client";

// import Link from "next/link";
// import React from "react";

// import { ModeToggle } from "@/components/mode-toggle";
// import { buttonVariants } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { cn } from "@/lib/utils";
// import { Dock, DockIcon } from "@/components/magicui/dock";

// // Replace these with your actual icons or use inline icons like below
// const Works = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <circle cx="12" cy="12" r="10" />
//   </svg>
// );
// const Resume = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <rect x="4" y="4" width="16" height="16" rx="2" />
//   </svg>
// );
// const Contact = (props) => (
//   <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
//     <path d="M2 4h20v16H2z" />
//   </svg>
// );

// const DATA = {
//   navbar: [
//     { href: "/#CurrentWorks", icon: Works, label: "Works" },
//     { href: "/resume", icon: Resume, label: "Resume" },
//     { href: "mailto:loganbondoc@gmail.com", icon: Contact, label: "Contact" },
//   ],
// };

// export function DockDemo() {
//   return (
//     <div className="fixed bottom-0 left-0 z-[9999] w-full flex items-end justify-center pointer-events-none">
//       <TooltipProvider>
//         <Dock className="pointer-events-auto bg-background/80 backdrop-blur border shadow-md">
//           {DATA.navbar.map((item) => (
//             <DockIcon key={item.label}>
//               <Tooltip>
//                 <TooltipTrigger asChild>
//                   <Link
//                     href={item.href}
//                     aria-label={item.label}
//                     className={cn(
//                       buttonVariants({ variant: "ghost", size: "icon" }),
//                       "size-12 rounded-full"
//                     )}
//                   >
//                     <item.icon className="size-5" />
//                   </Link>
//                 </TooltipTrigger>
//                 <TooltipContent>
//                   <p>{item.label}</p>
//                 </TooltipContent>
//               </Tooltip>
//             </DockIcon>
//           ))}
//           <Separator orientation="vertical" className="h-full py-2" />
//           <DockIcon>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <ModeToggle className="rounded-full" />
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Theme</p>
//               </TooltipContent>
//             </Tooltip>
//           </DockIcon>
//         </Dock>
//       </TooltipProvider>
//     </div>
//   );
// }

"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Children,
  cloneElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function DockItem({
  children,
  className = "",
  onClick,
  mouseY,
  spring,
  distance,
  magnification,
  baseItemSize,
}) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseY, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      y: 0,
      height: baseItemSize,
    };
    return val - rect.y - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full bg-[#060010] border-neutral-700 border-2 shadow-md ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {Children.map(children, (child) =>
        cloneElement(child, { isHovered })
      )}
    </motion.div>
  );
}

function DockLabel({ children, className = "", ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (latest) => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: -10 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0.2 }}
          className={`${className} absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-full mr-2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-[#060010] px-2 py-0.5 text-xs text-white`}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}

export default function Dock({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelWidth = 64,
  dockWidth = 256,
  baseItemSize = 50,
}) {
  const mouseY = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxWidth = useMemo(
    () => Math.max(dockWidth, magnification + magnification / 2 + 4),
    [magnification, dockWidth]
  );
  const widthCol = useTransform(isHovered, [0, 1], [panelWidth, maxWidth]);
  const width = useSpring(widthCol, spring);

  return (
    <motion.div
      style={{ width, scrollbarWidth: "none" }}
      className="my-2 flex max-h-full"
    >
      <motion.div
        onMouseMove={({ pageY }) => {
          isHovered.set(1);
          mouseY.set(pageY);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseY.set(Infinity);
        }}
        className={`${className} fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 border-neutral-700 border-2 px-2 py-4 rounded-2xl z-50`}
        style={{ width: panelWidth }}
        role="toolbar"
        aria-label="Vertical dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseY={mouseY}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
