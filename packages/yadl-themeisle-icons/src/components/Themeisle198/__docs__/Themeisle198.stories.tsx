import type { Meta, StoryObj } from "@storybook/react";
import Themeisle198 from "../Themeisle198";

const meta: Meta<typeof Themeisle198> = { title: "Themeisle/Themeisle198", component: Themeisle198 };

export default meta;
type Story = StoryObj<typeof Themeisle198>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
