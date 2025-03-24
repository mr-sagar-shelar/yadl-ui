import type { Meta, StoryObj } from "@storybook/react";
import Themeisle33 from "../Themeisle33";

const meta: Meta<typeof Themeisle33> = { title: "Themeisle/Themeisle33", component: Themeisle33 };

export default meta;
type Story = StoryObj<typeof Themeisle33>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
