import React, { ReactNode } from "react";
import Tooltip from "react-tooltip-lite";

type TooltipComponentProps = {
  children: ReactNode;
  content: string | ReactNode;
  arrow?: boolean;
  eventToggle?: string;
  useHover?: boolean;
  className?: string;
  direction?:string;
  key?: string;
};

const TooltipComponent = (props: TooltipComponentProps) => {
  return <Tooltip {...props}>{props.children}</Tooltip>;
};

export default TooltipComponent;
