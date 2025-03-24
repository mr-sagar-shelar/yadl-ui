import type { Meta, StoryObj } from "@storybook/react";
import Themeisle362 from "../Themeisle362";

const meta: Meta<typeof Themeisle362> = { title: "Themeisle/Themeisle362", component: Themeisle362 };

export default meta;
type Story = StoryObj<typeof Themeisle362>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
