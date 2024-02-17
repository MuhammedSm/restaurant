import { PropsWithChildren } from "react";

type PopupProps = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  className?: string;
};
const PopUp = ({
  backgroundColor,
  className,
  children,
}: PropsWithChildren<PopupProps>) => {
  const popupClasses = `
    }  bg-${backgroundColor || "white"} rounded-[35px] overflow-hidden 
    min-w-[400px] z-10 shadow-md absolute right-16 top-1/2 transform -translate-y-1/2 ${
      className || ""
    }`;

  return <div className={popupClasses}>{children}</div>;
};

export default PopUp;
