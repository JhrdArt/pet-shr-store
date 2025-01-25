import React, {
  useEffect,
  forwardRef,
  useRef,
  type RefObject,
  useState,
} from "react";
import clsx from "clsx";
import Button from "../button";
import { X } from "lucide-react";
import { useSlidePanel } from "~/context/useSlidePanel";

interface Props {
  children: React.ReactNode;
  size?: "full" | "large" | "small";
  pos?: "left" | "right";
  classname?: string;
  id: string;
  type?: "button" | "text";
  buttonSide?: "right" | "left";
}

const SlidePanel = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      size = "large",
      pos = "right",
      classname,
      id,
      type = "button",
      buttonSide,
    },
    ref
  ) => {
    const { activeSlidePanel, setActiveSlidePanel } = useSlidePanel();
    const internalRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const handleClose = () => {
      setActiveSlidePanel("");
    };

    const openModal = activeSlidePanel === id;

    useEffect(() => {
      if (typeof window === "undefined") return;
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Node;
        if (internalRef.current && !internalRef.current.contains(target)) {
          setActiveSlidePanel("");
        }
      };

      if (openModal) {
        window.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        window.removeEventListener("mousedown", handleClickOutside);
      };
    }, [openModal]);

    if (!isMounted) return null;

    return (
      <div
        ref={(node) => {
          internalRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref && node)
            (ref as RefObject<HTMLDivElement>).current = node;
        }}
        className={clsx(
          `h-dvh fixed z-50 bg-white flex flex-col duration-300 ease-in transform`,
          {
            "w-full": size === "full",
            "w-96": size === "large",
            "w-80": size === "small",
            "left-0": pos === "left",
            "right-0": pos === "right",
            "translate-x-0": openModal,
            "-translate-x-full": !openModal && pos === "left",
            "translate-x-full": !openModal && pos === "right",
          },
          classname
        )}
        style={{ top: 0 }}
      >
        <div
          className={clsx(
            "absolute rounded top-1 flex items-center hover:bg-black/20 duration-300 ml-auto z-10",
            {
              "left-1": buttonSide === "left",
              "right-1": buttonSide === "right",
            }
          )}
        >
          {type === "text" ? (
            <button
              className="text-xs py-1 px-2"
              aria-label="button close"
              onClick={handleClose}
            >
              cerrar
            </button>
          ) : (
            <Button ariaLabel="button close" onClick={handleClose}>
              <X />
            </Button>
          )}
        </div>
        {children}
      </div>
    );
  }
);

export default SlidePanel;
