import type { Meta, StoryObj } from "@storybook/react";
import Themeisle28 from "../Themeisle28";

const meta: Meta<typeof Themeisle28> = { title: "Themeisle/Themeisle28", component: Themeisle28 };

export default meta;
type Story = StoryObj<typeof Themeisle28>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
