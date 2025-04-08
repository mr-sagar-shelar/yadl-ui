import type { Meta, StoryObj } from "@storybook/react";
import Tailwind_cssTailwindCSS from "../Tailwind_cssTailwindCSS";

const meta: Meta<typeof Tailwind_cssTailwindCSS> = { title: "unDraw/Tailwind_cssTailwindCSS", component: Tailwind_cssTailwindCSS };

export default meta;
type Story = StoryObj<typeof Tailwind_cssTailwindCSS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
