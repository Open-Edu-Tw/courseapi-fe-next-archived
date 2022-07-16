import classNames from "classnames";
import type { ReactNode } from "react";
import React from "react";
import { tw } from "twind";
import type { RequireAtLeastOne } from "type-fest";

export type ButtonProps = RequireAtLeastOne<
  {
    size?: "medium" | "large" | "xl";
    color?: "basic" | "accent";
    label?: string;
    icon?: ReactNode;
  },
  "label" | "icon"
> &
  React.ComponentPropsWithoutRef<"button">;

/**
 * CourseAPI 的按鈕組件。
 *
 * @example
 * import { Button } from "@/components";
 * import { DownloadIcon } from "@/icons";
 *
 * <Button size="medium" color="basic" label="登入" />
 * <Button size="medium" color="accent" icon={<DownloadIcon />} />
 * <Button size="medium" color="accent" icon={<DownloadIcon />} label="下載 filename.zip" onClick={() => triggerDownload("filename.zip")}/>
 */
export function Button({
  size = "medium",
  color = "basic",
  label,
  icon,
  ...props
}: ButtonProps) {
  if (!label && !icon)
    throw new TypeError("should be at least one of `label` or `icon`.");

  return (
    <button
      type="button"
      // FIXME:  min-height will be much better.
      className={classNames(
        tw`
          text-gray-800 dark:text-gray-200
          rounded flex gap-3 items-center justify-items-center h-8
        `,
        // Our type check has been ensured the colorClass[color] will be defined.
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        colorClass[color],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
        sizeClass[size]
      )}
      {...props}
    >
      {icon && <div>{icon}</div>}
      {label && <div>{label}</div>}
    </button>
  );
}

const colorClass = {
  basic: tw`bg-gray-200 dark:bg-gray-700`,
  accent: tw`bg-blue-200 dark:bg-light-blue-700`,
} as const;

const sizeClass = {
  medium: tw`px-5 py-2`,
  large: tw`px-10 py-4`,
  xl: tw`px-20 py-6 text-xl`,
} as const;

export default Button;
