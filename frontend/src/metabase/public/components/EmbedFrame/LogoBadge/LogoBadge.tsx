import cx from "classnames";
import { t } from "ttag";

import { ExternalLink } from "metabase/common/components/ExternalLink";

import EmbedFrameS from "../EmbedFrame.module.css";

import LogoBadgeStyle from "./LogoBadge.module.css";
import AtomTechLogo from "./atomtech_logo.svg";

export const LogoBadge = ({ dark }: { dark: boolean }) => {
  return (
    <ExternalLink
      className={cx(EmbedFrameS.LogoBadge, LogoBadgeStyle.metabaseLink, {
        [LogoBadgeStyle.dark]: dark,
        [LogoBadgeStyle.light]: !dark,
      })}
      href="https://atomtech.es/servicios/analitica-de-datos"
      target="_blank"
    >
      <span>{t`Powered by`}</span>
      <img src={AtomTechLogo} height={32} style={{ width: "auto" }} alt="AtomTech" />
    </ExternalLink>
  );
};

function getHostAppUrlDomain() {
  // based on https://stackoverflow.com/questions/3420004/access-parent-url-from-iframe
  let referrerUrl =
    parent !== window ? document.referrer : document.location.href;

  // remove trailing slash
  referrerUrl = referrerUrl.replace(/\/+$/, "");

  // get domain value, based on https://stackoverflow.com/questions/569137/how-to-get-domain-name-from-url
  return referrerUrl.replace(/.+\/\/|www.|\..+/g, "");
}
