import type { Meta, StoryObj } from "@storybook/react";
import Themeisle67 from "../Themeisle67";

const meta: Meta<typeof Themeisle67> = { title: "Themeisle/Themeisle67", component: Themeisle67 };

export default meta;
type Story = StoryObj<typeof Themeisle67>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
