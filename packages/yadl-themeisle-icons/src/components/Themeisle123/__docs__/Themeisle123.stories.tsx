import type { Meta, StoryObj } from "@storybook/react";
import Themeisle123 from "../Themeisle123";

const meta: Meta<typeof Themeisle123> = { title: "Themeisle/Themeisle123", component: Themeisle123 };

export default meta;
type Story = StoryObj<typeof Themeisle123>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
