import type { Meta, StoryObj } from "@storybook/react";
import Themeisle293 from "../Themeisle293";

const meta: Meta<typeof Themeisle293> = { title: "Themeisle/Themeisle293", component: Themeisle293 };

export default meta;
type Story = StoryObj<typeof Themeisle293>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
