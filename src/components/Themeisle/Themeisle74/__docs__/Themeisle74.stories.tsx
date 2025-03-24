import type { Meta, StoryObj } from "@storybook/react";
import Themeisle74 from "../Themeisle74";

const meta: Meta<typeof Themeisle74> = { title: "Themeisle/Themeisle74", component: Themeisle74 };

export default meta;
type Story = StoryObj<typeof Themeisle74>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
