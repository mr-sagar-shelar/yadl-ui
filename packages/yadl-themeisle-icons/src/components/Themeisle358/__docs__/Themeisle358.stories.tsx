import type { Meta, StoryObj } from "@storybook/react";
import Themeisle358 from "../Themeisle358";

const meta: Meta<typeof Themeisle358> = { title: "Themeisle/Themeisle358", component: Themeisle358 };

export default meta;
type Story = StoryObj<typeof Themeisle358>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
