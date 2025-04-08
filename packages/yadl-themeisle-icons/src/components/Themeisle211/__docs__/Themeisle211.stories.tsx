import type { Meta, StoryObj } from "@storybook/react";
import Themeisle211 from "../Themeisle211";

const meta: Meta<typeof Themeisle211> = { title: "Themeisle/Themeisle211", component: Themeisle211 };

export default meta;
type Story = StoryObj<typeof Themeisle211>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
