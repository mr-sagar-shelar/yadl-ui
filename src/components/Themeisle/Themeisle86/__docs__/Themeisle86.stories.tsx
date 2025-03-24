import type { Meta, StoryObj } from "@storybook/react";
import Themeisle86 from "../Themeisle86";

const meta: Meta<typeof Themeisle86> = { title: "Themeisle/Themeisle86", component: Themeisle86 };

export default meta;
type Story = StoryObj<typeof Themeisle86>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
