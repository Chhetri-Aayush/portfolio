type LogoIconProps = React.SVGProps<SVGSVGElement>;

export const DarkIcon = (props: LogoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 472.618 472.618"
    {...props}
  >
    <path d="M380.525 337.291c-135.427 0-245.302-109.773-245.302-245.302 0-32.502 6.338-63.575 17.991-91.988C63.372 36.286 0 124.39 0 227.315c0 135.427 109.875 245.302 245.302 245.302 102.923 0 191.029-63.472 227.316-153.315-28.417 11.652-59.489 17.989-92.093 17.989z" />
  </svg>
);

export const LightIcon = (props: LogoIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#fce205"
      // stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4V2m0 18v2M6.414 6.414 5 5m12.728 12.728 1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728 5 19.142M12 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
    />
  </svg>
);
