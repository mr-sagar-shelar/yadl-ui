import type { Meta, StoryObj } from "@storybook/react";
import Themeisle124 from "../Themeisle124";

const meta: Meta<typeof Themeisle124> = { title: "Themeisle/Themeisle124", component: Themeisle124 };

export default meta;
type Story = StoryObj<typeof Themeisle124>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
