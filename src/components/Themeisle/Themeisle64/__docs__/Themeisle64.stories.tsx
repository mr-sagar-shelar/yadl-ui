import type { Meta, StoryObj } from "@storybook/react";
import Themeisle64 from "../Themeisle64";

const meta: Meta<typeof Themeisle64> = { title: "Themeisle/Themeisle64", component: Themeisle64 };

export default meta;
type Story = StoryObj<typeof Themeisle64>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
