import type { Meta, StoryObj } from "@storybook/react";
import Themeisle447 from "../Themeisle447";

const meta: Meta<typeof Themeisle447> = { title: "Themeisle/Themeisle447", component: Themeisle447 };

export default meta;
type Story = StoryObj<typeof Themeisle447>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
