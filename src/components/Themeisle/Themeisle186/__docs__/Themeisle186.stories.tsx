import type { Meta, StoryObj } from "@storybook/react";
import Themeisle186 from "../Themeisle186";

const meta: Meta<typeof Themeisle186> = { title: "Themeisle/Themeisle186", component: Themeisle186 };

export default meta;
type Story = StoryObj<typeof Themeisle186>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
