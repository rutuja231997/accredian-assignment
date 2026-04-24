import React from "react";

export type accredians = {
  title: string;
  description: string;
  items: Item[];
};

export type Item = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: LinePosition;
  color: ColorKey;
};

export type IconKey =
  | "lightbulb"
  | "user"
  | "settings"
  | "globe"
  | "arrow"
  | "target"
  | "box";

export type ColorKey = "primary" | "secondary" | "accent";

export const colorVariants: ColorKey[] = ["primary", "secondary", "accent"];

export type LinePosition = "top" | "bottom" | "both" | "none";
