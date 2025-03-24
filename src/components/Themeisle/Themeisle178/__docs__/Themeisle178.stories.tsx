import type { Meta, StoryObj } from "@storybook/react";
import Themeisle178 from "../Themeisle178";

const meta: Meta<typeof Themeisle178> = { title: "Themeisle/Themeisle178", component: Themeisle178 };

export default meta;
type Story = StoryObj<typeof Themeisle178>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
