import type { Meta, StoryObj } from "@storybook/react";
import Themeisle130 from "../Themeisle130";

const meta: Meta<typeof Themeisle130> = { title: "Themeisle/Themeisle130", component: Themeisle130 };

export default meta;
type Story = StoryObj<typeof Themeisle130>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
