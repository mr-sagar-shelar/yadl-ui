import type { Meta, StoryObj } from "@storybook/react";
import Themeisle457 from "../Themeisle457";

const meta: Meta<typeof Themeisle457> = { title: "Themeisle/Themeisle457", component: Themeisle457 };

export default meta;
type Story = StoryObj<typeof Themeisle457>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
