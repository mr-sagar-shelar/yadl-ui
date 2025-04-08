import type { Meta, StoryObj } from "@storybook/react";
import Themeisle5 from "../Themeisle5";

const meta: Meta<typeof Themeisle5> = { title: "Themeisle/Themeisle5", component: Themeisle5 };

export default meta;
type Story = StoryObj<typeof Themeisle5>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
