import type { Meta, StoryObj } from "@storybook/react";
import Themeisle253 from "../Themeisle253";

const meta: Meta<typeof Themeisle253> = { title: "Themeisle/Themeisle253", component: Themeisle253 };

export default meta;
type Story = StoryObj<typeof Themeisle253>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
