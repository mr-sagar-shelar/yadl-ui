import type { Meta, StoryObj } from "@storybook/react";
import Themeisle223 from "../Themeisle223";

const meta: Meta<typeof Themeisle223> = { title: "Themeisle/Themeisle223", component: Themeisle223 };

export default meta;
type Story = StoryObj<typeof Themeisle223>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
