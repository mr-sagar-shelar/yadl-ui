import type { Meta, StoryObj } from "@storybook/react";
import Themeisle439 from "../Themeisle439";

const meta: Meta<typeof Themeisle439> = { title: "Themeisle/Themeisle439", component: Themeisle439 };

export default meta;
type Story = StoryObj<typeof Themeisle439>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
