import type { Meta, StoryObj } from "@storybook/react";
import Themeisle329 from "../Themeisle329";

const meta: Meta<typeof Themeisle329> = { title: "Themeisle/Themeisle329", component: Themeisle329 };

export default meta;
type Story = StoryObj<typeof Themeisle329>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
