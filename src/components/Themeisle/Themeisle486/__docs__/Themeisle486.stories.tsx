import type { Meta, StoryObj } from "@storybook/react";
import Themeisle486 from "../Themeisle486";

const meta: Meta<typeof Themeisle486> = { title: "Themeisle/Themeisle486", component: Themeisle486 };

export default meta;
type Story = StoryObj<typeof Themeisle486>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
