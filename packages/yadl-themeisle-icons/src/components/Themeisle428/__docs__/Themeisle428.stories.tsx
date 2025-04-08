import type { Meta, StoryObj } from "@storybook/react";
import Themeisle428 from "../Themeisle428";

const meta: Meta<typeof Themeisle428> = { title: "Themeisle/Themeisle428", component: Themeisle428 };

export default meta;
type Story = StoryObj<typeof Themeisle428>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
