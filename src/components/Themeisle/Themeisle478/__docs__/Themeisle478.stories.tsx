import type { Meta, StoryObj } from "@storybook/react";
import Themeisle478 from "../Themeisle478";

const meta: Meta<typeof Themeisle478> = { title: "Themeisle/Themeisle478", component: Themeisle478 };

export default meta;
type Story = StoryObj<typeof Themeisle478>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
