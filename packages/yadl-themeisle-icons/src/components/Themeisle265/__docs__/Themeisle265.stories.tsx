import type { Meta, StoryObj } from "@storybook/react";
import Themeisle265 from "../Themeisle265";

const meta: Meta<typeof Themeisle265> = { title: "Themeisle/Themeisle265", component: Themeisle265 };

export default meta;
type Story = StoryObj<typeof Themeisle265>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
