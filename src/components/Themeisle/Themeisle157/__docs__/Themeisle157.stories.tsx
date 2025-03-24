import type { Meta, StoryObj } from "@storybook/react";
import Themeisle157 from "../Themeisle157";

const meta: Meta<typeof Themeisle157> = { title: "Themeisle/Themeisle157", component: Themeisle157 };

export default meta;
type Story = StoryObj<typeof Themeisle157>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
