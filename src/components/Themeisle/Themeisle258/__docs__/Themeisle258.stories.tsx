import type { Meta, StoryObj } from "@storybook/react";
import Themeisle258 from "../Themeisle258";

const meta: Meta<typeof Themeisle258> = { title: "Themeisle/Themeisle258", component: Themeisle258 };

export default meta;
type Story = StoryObj<typeof Themeisle258>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
