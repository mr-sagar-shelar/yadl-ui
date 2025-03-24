import type { Meta, StoryObj } from "@storybook/react";
import Themeisle14 from "../Themeisle14";

const meta: Meta<typeof Themeisle14> = { title: "Themeisle/Themeisle14", component: Themeisle14 };

export default meta;
type Story = StoryObj<typeof Themeisle14>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
