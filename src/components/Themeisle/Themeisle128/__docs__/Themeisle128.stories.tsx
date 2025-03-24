import type { Meta, StoryObj } from "@storybook/react";
import Themeisle128 from "../Themeisle128";

const meta: Meta<typeof Themeisle128> = { title: "Themeisle/Themeisle128", component: Themeisle128 };

export default meta;
type Story = StoryObj<typeof Themeisle128>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
