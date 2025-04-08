import type { Meta, StoryObj } from "@storybook/react";
import DarkMode from "../DarkMode";

const meta: Meta<typeof DarkMode> = { title: "unDraw/DarkMode", component: DarkMode };

export default meta;
type Story = StoryObj<typeof DarkMode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
