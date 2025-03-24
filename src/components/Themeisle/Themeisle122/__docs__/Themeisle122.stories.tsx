import type { Meta, StoryObj } from "@storybook/react";
import Themeisle122 from "../Themeisle122";

const meta: Meta<typeof Themeisle122> = { title: "Themeisle/Themeisle122", component: Themeisle122 };

export default meta;
type Story = StoryObj<typeof Themeisle122>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
