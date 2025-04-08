import type { Meta, StoryObj } from "@storybook/react";
import Themeisle420 from "../Themeisle420";

const meta: Meta<typeof Themeisle420> = { title: "Themeisle/Themeisle420", component: Themeisle420 };

export default meta;
type Story = StoryObj<typeof Themeisle420>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
