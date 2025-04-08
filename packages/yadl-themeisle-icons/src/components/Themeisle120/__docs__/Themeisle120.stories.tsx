import type { Meta, StoryObj } from "@storybook/react";
import Themeisle120 from "../Themeisle120";

const meta: Meta<typeof Themeisle120> = { title: "Themeisle/Themeisle120", component: Themeisle120 };

export default meta;
type Story = StoryObj<typeof Themeisle120>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
