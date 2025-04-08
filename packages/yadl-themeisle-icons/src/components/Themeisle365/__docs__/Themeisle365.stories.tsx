import type { Meta, StoryObj } from "@storybook/react";
import Themeisle365 from "../Themeisle365";

const meta: Meta<typeof Themeisle365> = { title: "Themeisle/Themeisle365", component: Themeisle365 };

export default meta;
type Story = StoryObj<typeof Themeisle365>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
