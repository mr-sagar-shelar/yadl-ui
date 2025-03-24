import type { Meta, StoryObj } from "@storybook/react";
import Themeisle187 from "../Themeisle187";

const meta: Meta<typeof Themeisle187> = { title: "Themeisle/Themeisle187", component: Themeisle187 };

export default meta;
type Story = StoryObj<typeof Themeisle187>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
