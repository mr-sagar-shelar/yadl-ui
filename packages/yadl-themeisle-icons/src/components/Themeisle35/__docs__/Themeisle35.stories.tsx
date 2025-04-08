import type { Meta, StoryObj } from "@storybook/react";
import Themeisle35 from "../Themeisle35";

const meta: Meta<typeof Themeisle35> = { title: "Themeisle/Themeisle35", component: Themeisle35 };

export default meta;
type Story = StoryObj<typeof Themeisle35>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
