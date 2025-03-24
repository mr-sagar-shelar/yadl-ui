import type { Meta, StoryObj } from "@storybook/react";
import Themeisle38 from "../Themeisle38";

const meta: Meta<typeof Themeisle38> = { title: "Themeisle/Themeisle38", component: Themeisle38 };

export default meta;
type Story = StoryObj<typeof Themeisle38>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
