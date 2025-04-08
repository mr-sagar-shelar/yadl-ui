import type { Meta, StoryObj } from "@storybook/react";
import Themeisle452 from "../Themeisle452";

const meta: Meta<typeof Themeisle452> = { title: "Themeisle/Themeisle452", component: Themeisle452 };

export default meta;
type Story = StoryObj<typeof Themeisle452>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
