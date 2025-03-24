import type { Meta, StoryObj } from "@storybook/react";
import Themeisle161 from "../Themeisle161";

const meta: Meta<typeof Themeisle161> = { title: "Themeisle/Themeisle161", component: Themeisle161 };

export default meta;
type Story = StoryObj<typeof Themeisle161>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
