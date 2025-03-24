import type { Meta, StoryObj } from "@storybook/react";
import Themeisle443 from "../Themeisle443";

const meta: Meta<typeof Themeisle443> = { title: "Themeisle/Themeisle443", component: Themeisle443 };

export default meta;
type Story = StoryObj<typeof Themeisle443>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
