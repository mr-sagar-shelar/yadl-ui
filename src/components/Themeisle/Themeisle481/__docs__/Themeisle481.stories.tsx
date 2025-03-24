import type { Meta, StoryObj } from "@storybook/react";
import Themeisle481 from "../Themeisle481";

const meta: Meta<typeof Themeisle481> = { title: "Themeisle/Themeisle481", component: Themeisle481 };

export default meta;
type Story = StoryObj<typeof Themeisle481>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
