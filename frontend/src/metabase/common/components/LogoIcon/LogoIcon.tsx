import cx from "classnames";

import CS from "metabase/css/core/index.css";
import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";
import AtomTechLogo from "./atomtech_logo.svg";

interface LogoIconProps {
  width?: number;
  height?: number;
  dark?: boolean;
  fill?: string;
}

export const DefaultLogoIcon = ({
  dark,
  height = 32,
  width,
}: LogoIconProps) => {
  return (
    <img
      className={cx("Icon", { [CS.textWhite]: dark })}
      src={AtomTechLogo}
      width={width}
      height={height}
      alt="AtomTech"
      data-testid="main-logo"
      style={{ maxHeight: "32px", width: "auto" }}
    />
  );
};

export function LogoIcon(props: LogoIconProps) {
  const [Component = DefaultLogoIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
