import type { Meta, StoryObj } from "@storybook/react";
import Themeisle129 from "../Themeisle129";

const meta: Meta<typeof Themeisle129> = { title: "Themeisle/Themeisle129", component: Themeisle129 };

export default meta;
type Story = StoryObj<typeof Themeisle129>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
