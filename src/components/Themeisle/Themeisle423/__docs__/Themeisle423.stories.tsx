import type { Meta, StoryObj } from "@storybook/react";
import Themeisle423 from "../Themeisle423";

const meta: Meta<typeof Themeisle423> = { title: "Themeisle/Themeisle423", component: Themeisle423 };

export default meta;
type Story = StoryObj<typeof Themeisle423>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
