import type { Meta, StoryObj } from "@storybook/react";
import Themeisle125 from "../Themeisle125";

const meta: Meta<typeof Themeisle125> = { title: "Themeisle/Themeisle125", component: Themeisle125 };

export default meta;
type Story = StoryObj<typeof Themeisle125>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
