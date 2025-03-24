import type { Meta, StoryObj } from "@storybook/react";
import Themeisle90 from "../Themeisle90";

const meta: Meta<typeof Themeisle90> = { title: "Themeisle/Themeisle90", component: Themeisle90 };

export default meta;
type Story = StoryObj<typeof Themeisle90>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
