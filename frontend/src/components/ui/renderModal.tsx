import React from "react";
import ChatModal from "../Room/Modals/ChatModal";
import UsersModal from "../Room/Modals/UsersModal";
import LanguageModal from "../Room/Modals/LanguageModal";

const RenderModal = ({
  icon,
  label,
  animate,
  open,
}: {
  icon: React.ReactNode | React.JSX.Element;
  label: string;
  animate: boolean;
  open: boolean;
}) => {
  let Component = <h1>Nothing to show here</h1>;
  switch (label) {
    case "Chat":
      Component = (
        <ChatModal icon={icon} label={label} animate={animate} open={open} />
      );
      break;
    case "Users":
      Component = (
        <UsersModal icon={icon} label={label} animate={animate} open={open} />
      );
      break;
    case "Language":
      Component = (
        <LanguageModal
          icon={icon}
          label={label}
          animate={animate}
          open={open}
        />
      );
      break;
    default:
      break;
  }
  return <div>{Component}</div>;
};

export default RenderModal;