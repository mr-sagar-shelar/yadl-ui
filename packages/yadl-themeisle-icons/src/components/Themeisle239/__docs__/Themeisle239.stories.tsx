import type { Meta, StoryObj } from "@storybook/react";
import Themeisle239 from "../Themeisle239";

const meta: Meta<typeof Themeisle239> = { title: "Themeisle/Themeisle239", component: Themeisle239 };

export default meta;
type Story = StoryObj<typeof Themeisle239>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
