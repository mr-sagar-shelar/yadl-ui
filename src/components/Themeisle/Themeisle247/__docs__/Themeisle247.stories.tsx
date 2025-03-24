import type { Meta, StoryObj } from "@storybook/react";
import Themeisle247 from "../Themeisle247";

const meta: Meta<typeof Themeisle247> = { title: "Themeisle/Themeisle247", component: Themeisle247 };

export default meta;
type Story = StoryObj<typeof Themeisle247>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
