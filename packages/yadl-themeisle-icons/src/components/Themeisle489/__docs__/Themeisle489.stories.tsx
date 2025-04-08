import type { Meta, StoryObj } from "@storybook/react";
import Themeisle489 from "../Themeisle489";

const meta: Meta<typeof Themeisle489> = { title: "Themeisle/Themeisle489", component: Themeisle489 };

export default meta;
type Story = StoryObj<typeof Themeisle489>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
