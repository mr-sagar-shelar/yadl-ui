import type { Meta, StoryObj } from "@storybook/react";
import Themeisle246 from "../Themeisle246";

const meta: Meta<typeof Themeisle246> = { title: "Themeisle/Themeisle246", component: Themeisle246 };

export default meta;
type Story = StoryObj<typeof Themeisle246>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
