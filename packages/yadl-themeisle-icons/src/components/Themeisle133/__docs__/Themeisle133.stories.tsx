import type { Meta, StoryObj } from "@storybook/react";
import Themeisle133 from "../Themeisle133";

const meta: Meta<typeof Themeisle133> = { title: "Themeisle/Themeisle133", component: Themeisle133 };

export default meta;
type Story = StoryObj<typeof Themeisle133>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
