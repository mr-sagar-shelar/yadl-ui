import type { Meta, StoryObj } from "@storybook/react";
import Themeisle408 from "../Themeisle408";

const meta: Meta<typeof Themeisle408> = { title: "Themeisle/Themeisle408", component: Themeisle408 };

export default meta;
type Story = StoryObj<typeof Themeisle408>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
