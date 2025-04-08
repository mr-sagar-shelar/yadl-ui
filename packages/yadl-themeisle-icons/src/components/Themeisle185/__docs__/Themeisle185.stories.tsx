import type { Meta, StoryObj } from "@storybook/react";
import Themeisle185 from "../Themeisle185";

const meta: Meta<typeof Themeisle185> = { title: "Themeisle/Themeisle185", component: Themeisle185 };

export default meta;
type Story = StoryObj<typeof Themeisle185>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
