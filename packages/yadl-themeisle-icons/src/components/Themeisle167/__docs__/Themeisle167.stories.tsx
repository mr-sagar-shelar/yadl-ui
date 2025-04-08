import type { Meta, StoryObj } from "@storybook/react";
import Themeisle167 from "../Themeisle167";

const meta: Meta<typeof Themeisle167> = { title: "Themeisle/Themeisle167", component: Themeisle167 };

export default meta;
type Story = StoryObj<typeof Themeisle167>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
