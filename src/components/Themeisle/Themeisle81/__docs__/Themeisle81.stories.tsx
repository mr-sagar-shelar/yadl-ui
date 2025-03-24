import type { Meta, StoryObj } from "@storybook/react";
import Themeisle81 from "../Themeisle81";

const meta: Meta<typeof Themeisle81> = { title: "Themeisle/Themeisle81", component: Themeisle81 };

export default meta;
type Story = StoryObj<typeof Themeisle81>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
