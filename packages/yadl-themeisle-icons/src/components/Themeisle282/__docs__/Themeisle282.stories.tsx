import type { Meta, StoryObj } from "@storybook/react";
import Themeisle282 from "../Themeisle282";

const meta: Meta<typeof Themeisle282> = { title: "Themeisle/Themeisle282", component: Themeisle282 };

export default meta;
type Story = StoryObj<typeof Themeisle282>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
