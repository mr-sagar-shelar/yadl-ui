import type { Meta, StoryObj } from "@storybook/react";
import Themeisle320 from "../Themeisle320";

const meta: Meta<typeof Themeisle320> = { title: "Themeisle/Themeisle320", component: Themeisle320 };

export default meta;
type Story = StoryObj<typeof Themeisle320>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
