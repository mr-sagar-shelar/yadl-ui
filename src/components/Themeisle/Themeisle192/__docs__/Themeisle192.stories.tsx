import type { Meta, StoryObj } from "@storybook/react";
import Themeisle192 from "../Themeisle192";

const meta: Meta<typeof Themeisle192> = { title: "Themeisle/Themeisle192", component: Themeisle192 };

export default meta;
type Story = StoryObj<typeof Themeisle192>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
