import type { Meta, StoryObj } from "@storybook/react";
import Themeisle360 from "../Themeisle360";

const meta: Meta<typeof Themeisle360> = { title: "Themeisle/Themeisle360", component: Themeisle360 };

export default meta;
type Story = StoryObj<typeof Themeisle360>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
