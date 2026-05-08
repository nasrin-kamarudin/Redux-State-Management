import Chip from "@mui/material/Chip";
import type { SxProps, Theme } from "@mui/material/styles";

export type BadgeVariant = "Low" | "Medium" | "High" | "Neutral";

type BadgeProps = {
  label: string;
  variant: BadgeVariant;
  size?: "small" | "medium";
};

const variantStyles: Record<BadgeVariant, SxProps<Theme>> = {
  Low: {
    backgroundColor: "#E7F7ED",
    color: "#218311",
  },
  Medium: {
    backgroundColor: "#FFF4DB",
    color: "#EA7617",
  },
  High: {
    backgroundColor: "#FDE8E8",
    color: "#9A2529",
  },
  Neutral: {
    backgroundColor: "#FFFFFF",
    color: "#063E6F",
    border: "1px solid #C6C6C6",
  },
};

export default function Badge({
  label,
  variant,
  size = "small",
}: BadgeProps) {
  return (
    <Chip
      label={label}
      size={size}
      sx={{
        ...variantStyles[variant],
      }}
    />
  );
}