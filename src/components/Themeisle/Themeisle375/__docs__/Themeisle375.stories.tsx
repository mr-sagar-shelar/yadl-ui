import type { Meta, StoryObj } from "@storybook/react";
import Themeisle375 from "../Themeisle375";

const meta: Meta<typeof Themeisle375> = { title: "Themeisle/Themeisle375", component: Themeisle375 };

export default meta;
type Story = StoryObj<typeof Themeisle375>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
