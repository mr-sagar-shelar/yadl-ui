import type { Meta, StoryObj } from "@storybook/react";
import Themeisle384 from "../Themeisle384";

const meta: Meta<typeof Themeisle384> = { title: "Themeisle/Themeisle384", component: Themeisle384 };

export default meta;
type Story = StoryObj<typeof Themeisle384>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
