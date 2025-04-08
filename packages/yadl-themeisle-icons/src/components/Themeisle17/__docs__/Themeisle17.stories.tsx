import type { Meta, StoryObj } from "@storybook/react";
import Themeisle17 from "../Themeisle17";

const meta: Meta<typeof Themeisle17> = { title: "Themeisle/Themeisle17", component: Themeisle17 };

export default meta;
type Story = StoryObj<typeof Themeisle17>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
