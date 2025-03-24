import type { Meta, StoryObj } from "@storybook/react";
import Themeisle195 from "../Themeisle195";

const meta: Meta<typeof Themeisle195> = { title: "Themeisle/Themeisle195", component: Themeisle195 };

export default meta;
type Story = StoryObj<typeof Themeisle195>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
