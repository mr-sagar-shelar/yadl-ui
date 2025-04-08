import type { Meta, StoryObj } from "@storybook/react";
import Themeisle53 from "../Themeisle53";

const meta: Meta<typeof Themeisle53> = { title: "Themeisle/Themeisle53", component: Themeisle53 };

export default meta;
type Story = StoryObj<typeof Themeisle53>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
