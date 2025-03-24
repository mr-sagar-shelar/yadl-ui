import type { Meta, StoryObj } from "@storybook/react";
import Themeisle355 from "../Themeisle355";

const meta: Meta<typeof Themeisle355> = { title: "Themeisle/Themeisle355", component: Themeisle355 };

export default meta;
type Story = StoryObj<typeof Themeisle355>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
