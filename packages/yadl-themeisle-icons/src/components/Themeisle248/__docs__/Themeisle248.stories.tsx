import type { Meta, StoryObj } from "@storybook/react";
import Themeisle248 from "../Themeisle248";

const meta: Meta<typeof Themeisle248> = { title: "Themeisle/Themeisle248", component: Themeisle248 };

export default meta;
type Story = StoryObj<typeof Themeisle248>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
