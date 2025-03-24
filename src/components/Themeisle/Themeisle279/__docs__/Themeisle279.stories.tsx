import type { Meta, StoryObj } from "@storybook/react";
import Themeisle279 from "../Themeisle279";

const meta: Meta<typeof Themeisle279> = { title: "Themeisle/Themeisle279", component: Themeisle279 };

export default meta;
type Story = StoryObj<typeof Themeisle279>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
