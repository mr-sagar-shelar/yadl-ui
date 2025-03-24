import type { Meta, StoryObj } from "@storybook/react";
import Themeisle379 from "../Themeisle379";

const meta: Meta<typeof Themeisle379> = { title: "Themeisle/Themeisle379", component: Themeisle379 };

export default meta;
type Story = StoryObj<typeof Themeisle379>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
