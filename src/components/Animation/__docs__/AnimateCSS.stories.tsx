import type { Meta, StoryObj } from "@storybook/react";
import AnimateCSS from "../AnimateCSS";
import React from "react";

const meta: Meta<typeof AnimateCSS> = {
  title: "Animate/AnimateCSS",
  component: AnimateCSS,
};

export default meta;
type Story = StoryObj<typeof AnimateCSS>;

export const Gradients: Story = {
  args: {},
};
