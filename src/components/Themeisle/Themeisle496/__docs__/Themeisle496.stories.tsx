import type { Meta, StoryObj } from "@storybook/react";
import Themeisle496 from "../Themeisle496";

const meta: Meta<typeof Themeisle496> = { title: "Themeisle/Themeisle496", component: Themeisle496 };

export default meta;
type Story = StoryObj<typeof Themeisle496>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
