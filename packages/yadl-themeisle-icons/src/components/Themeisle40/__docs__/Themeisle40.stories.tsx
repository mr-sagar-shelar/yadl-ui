import type { Meta, StoryObj } from "@storybook/react";
import Themeisle40 from "../Themeisle40";

const meta: Meta<typeof Themeisle40> = { title: "Themeisle/Themeisle40", component: Themeisle40 };

export default meta;
type Story = StoryObj<typeof Themeisle40>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
